const express = require("express");
const mysql = require("mysql");
const dotenv = require('dotenv');
const cors = require("cors");

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const bcrypt = require("bcrypt");
const saltRouts = 10;

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
    key: "userID",
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
    database: process.env.DATABASE
});

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
        })
    })
    
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
                            req.session.user = result;
                            console.log(req.session.user);
                            res.send(result);
                        }else{
                            res.send({ message: "Wrong credencials"});
                        }
                    });
                    }else{
                        res.send({ message: "Account doesn´t exist"});
                    }
                }
    );
});


app.listen(3001, () => {
    console.log("Server started on port 3001");
});