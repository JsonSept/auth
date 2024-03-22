const express = require("express");
const bcrypt = require('bcrypt')
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const mysql = require('mysql2');
const path = require('path');
const app = express();
// import jwt from 'jsonwebtoken'
const jwt = require('jsonwebtoken')


const UserModel = require('./models/user.js')
const connection = mysql.createConnection({
host:'localhost',
port:3306,
user:'root',
password:'Jayce2605!!!',
database:'mydb'
})

const options = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Jayce2605!!!',
    database: 'mydb'
};

// const sessionStore = MySQLStore(options);
// connection.connect((error) => {
//     if (error) {
//         console.error('Error connecting to MySQL database:', error);
//     } else {
//         console.log('Connected to MySQL database!');
//     }
// });

connection.end();


app.use(
    session({
    secret: 'key that will sign cookie',
    // store: sessionStore,
    resave: false,
    saveUninitialized: false
})
);
// sessionStore.onReady().then(() => {
//     console.log('MySQLStore is ready');
// }).catch(error => {
//     console.error(error)
// });

// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');

// app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'views')))
app.use(express.urlencoded({ extended: true}));

app.get("/", (req,res) => {
    req.session.isAuth = true;
    console.log(req.session);
    console.log(req.session.id);
    res.send("hello Sessions Tut")
});

app.get('/', (req, res) => {
    res.render(path.join(__dirname, 'views', 'landing.html'))
});

app.get('/login', (req, res) => {
    // res.render('login')
    res.render(path.join(__dirname, 'views', 'login.html'))
});

app.post('/login', (req, res) => {})

app.get('/register', (req,res) => {
    // res.render('register');
    res.render(path.join(__dirname, 'views', 'register.html'))
});

app.post('/register', async (req,res) => {
    const { username , email , password} = req.body;

    let user = await  UserModel.findOne({email});

    if(user) {
        return res.redirect('/register');
    }

    const hashedPsw = await bcrypt.hash(password, 12);
    user = new UserModel({
        username,
        email,
        password : hashedPsw
    });
    await user.save();

    res.redirect('/login')
});

app.get('/dahsboard', (req,res) => {
    // res.render('dashboard')
    res.render(path.join(__dirname, 'views', 'dashboard.html'))
})

app.listen(9000, console.log("server running on http://localhost:9000"));
