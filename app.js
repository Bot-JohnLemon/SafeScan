const session = require('express-session');
const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3000;

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const dotenv = require('dotenv');
dotenv.config({ path: './env/.env' });

app.use('/resources', express.static('public'));
app.use('/resources', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

const bcryptjs = require('bcryptjs');

app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

const connection = require('./database/db');
const { register } = require('module');
const { error } = require('console');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/register', (req, res) => {
  res.render('register');
});


app.post('/register', async (req, res) => {
  const email = req.body.email;
  const username = req.body.user;
  const password = req.body.password;
  let passwordHash = await bcryptjs.hash(password, 8);

  const userData = {
    email: email,
    username: username,
    password: passwordHash
  };

  connection.query('INSERT INTO users SET ?', userData, async (error, results) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error during registration');
    } else {
      res.render('register', {
        alert: true,
        alertTitle: "Registration",
        alertMessage: "Successful Registration :)",
        alertIcon: 'success',
        showConfirmButton: false,
        timer: 2500,
        ruta:''
      });
    }
  });
});

app.post('/auth', async (req, res) => {
  const username = req.body.usuario;
  const password = req.body.contrasena;
  let passwordHash = await bcryptjs.hash(password, 8);
  if(username && password){
    connection.query('SELECT * FROM users WHERE username = ?', [username], async (error,results) => {
      if(results.length == 0 || !(await bcryptjs.compare(password, results[0].password))){
        res.render('login',{
          alert: true,
          alertTitle: "Error",
          alertMessage: "User/Password wrong",
          alertIcon: 'error',
          showConfirmButton: true,
          timer: false,
          ruta:''
        });
      }else{
        req.session.loggedin = true;
        req.session.name = results[0].name
        res.render('login',{
          alert: true,
          alertTitle: "Connected",
          alertMessage: "",
          alertIcon: 'success',
          showConfirmButton: false,
          timer: 2500,
          ruta:'../../upload'
        });
        console.log(`>>> New connextion ----> [user:${username}] [password:${password}]`);
      }
    })
  }else{
    res.render('login',{
      alert: true,
      alertTitle: "Warning",
      alertMessage: "Insert the user/password...",
      alertIcon: 'warning',
      showConfirmButton: true,
      timer: false,
      ruta:''
    });
  }
  
})

app.get('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      console.log(err);
    } else {
      res.redirect('/login');
    }
  });
});

app.get('/upload', (req, res) => {
  const login = req.session.loggedin || false;

  if (!login) {
    res.render('upload', {
      login: false,
      name: "Debes iniciar sesión...",
      alert: true,
      alertTitle: "Access denied",
      alertMessage: "Please login",
      alertIcon: 'error',
      showConfirmButton: true,
      timer: false,
      ruta: '../../login'
    });
  } else {
    res.render('upload', {
      login: true,
      name: req.session.name || "Debes iniciar sesión..."
    });
  }
});


app.use((req, res, next) => {
  const error404 = {
    code: 'ENOENT',
    message: '404 Not Found :('
  };

  const error500 = {
    code: 'INTERNAL_ERROR',
    message: '500 Internal Server Error :('
  };

  res.handleError = (error) => {
    if (error.code === error404.code) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end(error.message);
    } else {
      res.writeHead(500, { 'Content-Type': 'text/html' });
      res.end(error.message);
    }
  };

  next();
});

app.use((req, res) => {
  const filePath = path.join(__dirname, 'public', req.url === '/' ? '/index' : req.url);
  const contentType = 'text/html';

  fs.readFile(filePath, 'utf-8', (error, content) => {
    if (error) {
      res.handleError(error);
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

app.listen(3000, () => {
  console.log(`>>> Server running on http://localhost:${port}`);
});