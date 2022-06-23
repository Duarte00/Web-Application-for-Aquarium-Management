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

/* Profile and aquarium API*/ 
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

      app.get("/userAquarium", (req, res) => {
        const ida=req.query.ida;
          db.query(
              "SELECT nameImgA,extencionA,AquaInfo.IDA,AquaInfo.dimension,AquaInfo.name FROM imagea, (SELECT IDA,dimension,name FROM aquarium WHERE ida=?) as AquaInfo WHERE imagea.IDA=AquaInfo.IDA", 
              ida, 
              (err, result) => {
                  if (err) {
                      throw err;
                  }
                  res.send(result);
              })
          });
      
/* Profile and aquarium API END*/

/* Fish  API*/

app.get("/aquariumFish", (req, res) => {

    const ida= req.query.ida;
    db.query(
        "SELECT imagef.nameImgF,imagef.extencionF,FishInfo.IDF,FishInfo.species,FishInfo.quantityF FROM imagef, (SELECT IDF, species,quantityF FROM fish WHERE IDA=?) as FishInfo WHERE imagef.IDF=FishInfo.IDF", 
        ida, 
        (err, result) => {
            if (err) {
                throw err;
            }
            res.send(result);
        })
    });

    app.post('/fishes', upload.single("uploaded_file"),verifyJWT, (req,res) =>{
      const species  = req.body.species;
      const quantityF = req.body.quantityF;
      const ida= req.body.IDA;
      console.log(req.session.user)
      db.query(
          "INSERT INTO fish (species, quantityF, ida) VALUES (?,?,?); Select LAST_INSERT_ID()", 
          [species, quantityF, ida], 
          (err, result) => {
              if (err) throw err;
              console.log(result[0].insertId);
              const lastId = result[0].insertId;
              const nameFileArray=req.file.filename.split(".");
              const extention="."+nameFileArray[1]
              const imgName =nameFileArray[0]
              db.query("INSERT INTO imagef (IDF, extencionF, nameImgF) VALUES (?,?,?)",
              [lastId,extention,imgName],
              (err, result) => {
                  if (err) throw err;
                  res.send({ack:1})
              })   
      })
    })

    app.get("/fishImgPreview", (req, res) => {
      const idFish=req.query.fishid;
      if(idFish!=null){
      db.query(
          "SELECT nameImgF, extencionF FROM imagef WHERE IDF=?;", 
          idFish, 
          (err, result) => {
              if (err) {
                  throw err;
              }
              if(result.length>0){
              const nomeFicheiroImagem=result[0].nameImgF+result[0].extencionF
              res.sendFile(__dirname + "/uploads/" + nomeFicheiroImagem);
              }
              else{
                  res.json({ack:0,message:"No fishes found!"})
              }
          })
      }
      });
/* Fish  API END*/

/* Product  API*/

app.get("/aquariumProduct", (req, res) => {
    const ida= req.query.ida;
    db.query(
        "SELECT imagep.nameImgP,imagep.extencionP,ProductInfo.IDD,ProductInfo.typeD,ProductInfo.quantityD FROM imagep, (SELECT IDD, typeD,quantityD FROM products WHERE IDA=?) as ProductInfo WHERE imagep.IDD=ProductInfo.IDD", 
        ida, 
        (err, result) => {
            if (err) {
                throw err;
            }
            res.send(result);
        })
    });

    app.post('/products', upload.single("uploaded_file"),verifyJWT, (req,res) =>{
      const typeD  = req.body.typeD;
      const quantityD = req.body.quantityD;
      const ida= req.body.IDA;
      console.log(req.session.user)
      db.query(
          "INSERT INTO products (typeD, quantityD, ida) VALUES (?,?,?); Select LAST_INSERT_ID()", 
          [typeD, quantityD, ida], 
          (err, result) => {
              if (err) throw err;
              console.log(result[0].insertId);
              const lastId = result[0].insertId;
              const nameFileArray=req.file.filename.split(".");
              const extention="."+nameFileArray[1]
              const imgName =nameFileArray[0]
              db.query("INSERT INTO imagep (IDD, extencionP, nameImgP) VALUES (?,?,?)",
              [lastId,extention,imgName],
              (err, result) => {
                  if (err) throw err;
                  res.send({ack:1})
              })   
      })
    })

    app.get("/productImgPreview", (req, res) => {
      const idProduct=req.query.productid;
      if(idProduct!=null){
      db.query(
          "SELECT nameImgP, extencionP FROM imagep WHERE IDD=?;", 
          idProduct, 
          (err, result) => {
              if (err) {
                  throw err;
              }
              if(result.length>0){
              const nomeFicheiroImagem=result[0].nameImgP+result[0].extencionP
              res.sendFile(__dirname + "/uploads/" + nomeFicheiroImagem);
              }
              else{
                  res.json({ack:0,message:"No products found!"})
              }
          })
      }
      });

/* Product  API END*/

/* Parameter API*/
app.get("/aquariumParameter", (req, res) => {
  const namePs = ["Ph","Nitrato","Nitrito","Cloro","Amónia","GH","KH"]
  const ida= req.query.ida;
  const namep= namePs[req.query.param];
  db.query(
      "SELECT IDP, nameP, quantityP, DATE_FORMAT(dateP, '%d-%m') as datep FROM parameters WHERE IDA=? AND nameP=?", 
      [ida,namep], 
      (err, result) => {
          if (err) {
              throw err;  
          }
          res.send(result);
      })
  });

  app.post('/parameters',verifyJWT, (req,res) =>{
    console.log(req.body);
    const quantityP  = req.body.quantityP;
    const ida= req.body.IDA;
    const namePs = ["Ph","Nitrato","Nitrito","Cloro","Amónia","GH","KH"]
    const nameP = namePs[req.body.nameP];
    console.log(req.session.user)
    db.query(
        "INSERT INTO parameters (nameP,quantityP, dateP, ida) VALUES (?,?,CURDATE(),?); Select LAST_INSERT_ID()", 
        [nameP, quantityP, ida], 
        (err, result) => {
          if (err) {
              throw err;  
          }
          res.send({ack:1});
      })
    })

      
/* Parameter  API END*/

/* Alert  API*/

app.get("/alerts", (req, res) => {
  db.query(
      "SELECT aquaNames.name, dateA, typeA, alert.IDA FROM alert , (SELECT IDA, name FROM aquarium) as aquaNames WHERE alert.IDA=aquaNames.IDA LIMIT 10", 
      (err, result) => {
          if (err) {
              throw err;  
          }
          res.send(result);
      })
  }); 

/* Alert  API END*/

app.listen(3001, () => {
  console.log("Server started on port 3001");
});
