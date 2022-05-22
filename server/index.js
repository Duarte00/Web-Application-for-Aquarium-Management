const express = require("express");
const mysql = require("mysql");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const multer = require("multer");
const DIR = "./uploads";

const bcrypt = require("bcrypt");
const saltRouts = 10;

const jwt = require("jsonwebtoken");

dotenv.config({ path: "./.env" });

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    key: "uid",
    secret: "ondabanksbaby",
    resave: true,
    saveUninitialized: true,
    cookie: {
      expires: 60 * 60 * 24 * 1000,
    },
  })
);

const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  database: process.env.DATABASE,
  multipleStatements: true
  
});

const jwtSecret = process.env.JWTSECRET;

db.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Mysql connected");
  }
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    let dotArray = file.originalname.split(".");
    const uniqueSuffix = Date.now() + Math.round(Math.random() * 1e9);
    const newFileName = dotArray[0] + "-" + uniqueSuffix;
    let extension = "." + dotArray.pop();
    cb(null, Buffer.from(newFileName).toString("base64") + extension);
  },
});

var upload = multer({
  storage: storage,
});

app.post('/register', (req,res) =>{

  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;
  
  bcrypt.hash(password, saltRouts, (err,hash) => {
      if(err){
          console.log(err);
      }
      db.query(
          "INSERT INTO users (username, password, email) VALUES (?,?,?)", 
          [username, hash, email], 
          (err, result) => {
              if (err) throw err;
              res.send({ack:1})
      })
  })
  
});

const verifyJWT = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    res.status(403).json({ auth: false });
  } else {
    try {
      jwt.verify(token, jwtSecret, (err, decoded) => {
        if (err) {
          res.status(403).json({ auth: false });
        } else {
          req.uid = decoded.uid;
          next();
        }
      });
    } catch (err) {
      throw err;
    }
  }
};

app.get("/isUserAuth", verifyJWT, (req, res) => {
  res.json({ auth: true });
});

app.get("/login", (req, res) => {
  if(req.session.user){
      res.send({loggedIn: true, user: req.session.user});
  } else{
      res.send({loggedIn: false});
  }
})

app.get("/logout", (req, res) => {
  res.status(202).clearCookie("access_token").send("token-cookie cleared");
});
app.post('/login', (req,res) => {

  const username = req.body.username;
  const password = req.body.password;
  
  db.query(
      "SELECT * FROM users WHERE username = ?;", 
      username, 
      (err, result) => {
          if (err) {
              throw err;
          }
              if (result.length > 0){
                  bcrypt.compare(password, result[0].password, (error, response) => {
                      if(response){
                        const id = result[0].id;
                        let payload = { id: id };
                        const token = jwt.sign(payload, jwtSecret, {
                          noTimestamp: true,
                          expiresIn: "24h",
                        });
                        req.session.user = {
                          id: id,
                          username: result[0].username,
                        };
            
                        res
                          .status(200)
                          .cookie("access_token", token, {
                            httpOnly: true,
                            expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
                            secure: false,
                          })
                          .json({ ack: true });
                      }else{
                          res.json({auth: false, mesage: "wrong credentials"});
                      }
                  });
                  }else{
                      res.json({auth: false, mesage: "account doens´t exist"});
                  }
              }
  );
});
app.post('/profile', upload.single("uploaded_file"),verifyJWT, (req,res) =>{
  const name  = req.body.name;
  const dimension = req.body.dimension;
  /*const  img= req.file.img;*/
  const id=req.session.user.id;
  console.log(req.session.user)
  db.query(
      "INSERT INTO aquarium (name, dimension, id) VALUES (?,?,?); Select LAST_INSERT_ID()", 
      [name, dimension, id], 
      (err, result) => {
          if (err) throw err;
          console.log(result[0].insertId);
          const lastId = result[0].insertId;
          const nameFileArray=req.file.filename.split(".");
          const extention="."+nameFileArray[1]
          const imgName =nameFileArray[0]
          db.query("INSERT INTO imagea (IDA, extencionA, nameImgA) VALUES (?,?,?)",
          [lastId,extention,imgName],
          (err, result) => {
              if (err) throw err;
              res.send({ack:1})
          })

          
  })

})
app.get("/aquaImgPreview", (req, res) => {
    const idAquario=req.query.aquaid;
    if(idAquario!=null){
    db.query(
        "SELECT nameImgA, extencionA FROM imagea WHERE IDA=?;", 
        idAquario, 
        (err, result) => {
            if (err) {
                throw err;
            }
            if(result.length>0){
            const nomeFicheiroImagem=result[0].nameImgA+result[0].extencionA
            res.sendFile(__dirname + "/uploads/" + nomeFicheiroImagem);
            }
            else{
                res.json({ack:0,message:"No Aquariums found!"})
            }
        })
    }
    });
app.get("/userAquariums", (req, res) => {
    console.log(req.session.user)
      const id=req.session.user.id;
      db.query(
          "SELECT nameImgA,extencionA,AquaInfo.IDA,AquaInfo.dimension,AquaInfo.name FROM imagea, (SELECT IDA, dimension,name FROM aquarium WHERE id=?) as AquaInfo WHERE imagea.IDA=AquaInfo.IDA", 
          id, 
          (err, result) => {
              if (err) {
                  throw err;
              }
              res.send(result);
          })
      });


app.listen(3001, () => {
  console.log("Server started on port 3001");
});
