const express = require('express');
const Blog = require('../models/blogSchema');

const router = express.Router();

router.get('/', (req, res) => {
    console.log(`Request made, URL:${req.url}`);
    //res.send('<h1>Hello Express App</h1>')
    //res.sendFile('./views/index.html', {root : __dirname});
    //res.render('index', {title: 'Home'}); // using ejs templating
    Blog.find()
        .then( (result) => {
            res.render('index', {title: 'Blogs Home Page', blogs: result});
        })
        .catch((err) => console.log(err));
});

router.get('/create', (req, res) => {
    console.log(`Request made, URL:${req.url}`);
    //res.send('<h1>Hello Express App</h1>')
    //res.sendFile('./views/index.html', {root : __dirname});
    res.render('create', {title: 'Blog create'}); // using ejs templating
});

router.get('/:id', (req, res) => {
    const ID = req.params.id;
    Blog.findById(ID)
        .then((result) => {
            console.log(result);
            res.render('details', {blog: result});
        })
        .catch((err)=> console.log(err));
});


router.post('/', (req, res) => {
    const blog = new Blog(req.body);
    blog.save()
        .then( (result) => {
            res.redirect('/blogs')
        })
        .catch( (err) => console.log(err));
});

/* any ajax request (fetch api) we cant send redirect
you need to send response in json and client will convert json to object and use the redirect end point to move there
response.json() => will convert into javascript object
window.location.href = data.redirect
 */
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
        .then(()=> {
            res.json({redirect : '/blogs'});
        })
        .catch((err) => console.log(err));
})

module.exports = router;