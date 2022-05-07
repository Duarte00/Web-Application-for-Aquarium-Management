const express = require("express");
const mysql = require("mysql");
const dotenv = require('dotenv');
const cors = require("cors");

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const bcrypt = require("bcrypt");
const saltRouts = 10;

const jwt= require('jsonwebtoken');

dotenv.config({path: './.env'});

const app = express();

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(session({
    key: "userId",
    secret: "secretSssion",
    resave: false,
    saveUninittialized: false,
    cookie: {
        expires: 60*60*24,
    },
}));

const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
});

const  jwtSecret = process.env.JWTSECRET;

db.connect( (error) => {
    if(error) {
        console.log(error)
    } else{
           console.log("Mysql connected"); 
    }
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

const verifyJWT =(req, res, next) => {
    const token = req.headers["x-access-token"]
    if (!token) {
        res.send("Token needed");
    }else{
        jwt.verify(token, jwtSecret, (err, decoded) =>{
            if(err){
                res.json({auth: false, message: "Failed authentication"});
            }else{
                req.userId = decoded.id;
                next();
            }
        })
    }
}

app.get('/isUserAuth', verifyJWT,(req,res) =>{
    res.send("You´re authenticaded");
});

app.get("/login", (req, res) => {
    if(req.session.user){
        res.send({loggedIn: true, user: req.session.user});
    } else{
        res.send({loggedIn: false});
    }
})

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
                            const token = jwt.sign({id}, jwtSecret, {
                                expiresIn: 300,
                            })
                            req.session.user = result;

                            res.json({auth: true, token: token, rrslt: result[0]});
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

app.get('/profile', (req,res) => {
    const id = req.respose.data.rrslt.id;
    res.json(id);
})


app.listen(3001, () => {
    console.log("Server started on port 3001");
});