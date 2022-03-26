const express = require("express");
const mysql = require("mysql");
const dotenv = require('dotenv');
const cors = require("cors");

dotenv.config({path: './.env'});

const app = express();

app.use(express.json());
app.use(cors());

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
    

    db.query(
        "INSERT INTO users (username, password, email) VALUES (?,?,?)", 
        [username, password,email], 
        (err, result) => {
            if (err) throw err;
    })
});

app.post('/login', (req,res) => {

    const username = req.body.username;
    const password = req.body.password;
    

    db.query(
        "SELECT * FROM users where username = ? AND  password = ?", 
        [username, password], 
        (err, result) => {
            if (err) {
                throw err;
            }
                if (result.lenght > 0){
                    res.send(result) 
                    }else{
                        res.send({ message: "Wrong credencials"});
                    }
                }
    );
});


app.listen(3001, () => {
    console.log("Server started on port 3001");
});