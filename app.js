const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

const app = express();



// db name - ravig ( connect to monbgo db)
//collection name - blogs
const dbURI = 'mongodb+srv://krishravig:test123@cluster0.xfhhz.mongodb.net/ravig?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then( ()=> {
        console.log('connected to mongo DB');
        listenServer();
    })
    .catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');
app.set('views', 'viewfiles');

app.use(logger('dev'));

app.use((req, res, next) => {
    console.log('Request made');
    next();
});

// static files will be accessed from browser using middleware function
// directory name will be public
app.use(express.static('public'));

// middleware to parse the requests. if you want to use req.body, need to register this middleware
app.use(express.urlencoded({entended : true}));

app.get('/', (req, res) => {
    res.sendFile('./views/index.html', {root: __dirname});
});

app.get('/about', (req, res) => {
    //res.sendFile('./views/about.html', {root : __dirname});
    res.render('about', {title: 'About'});
});

app.get('/about-me', (req, res) => {
    res.redirect('/about');
});

app.use('/blogs', blogRoutes);


// it should be at the end. if no rotes are met, this wil be executed
app.use((req, res) => {
    res.status(404);
    //res.sendFile('./views/404.html', {root : __dirname})
    res.render('404', {title: 'Not Found'});
});

// listen for requests
const listenServer = ()=> {
    app.listen(3000, ()=> {
        console.log('listening on port 3000');
    });
}