const Blog = require('../models/blogSchema');
// blog_create_get, blog_all, blog_get_id, blog_create


const blog_create_get = (req, res) => {
    console.log(`Request made, URL:${req.url}`);
    //res.send('<h1>Hello Express App</h1>')
    //res.sendFile('./views/index.html', {root : __dirname});
    res.render('create', {title: 'Blog create'}); // using ejs templating
}

const blog_all = (req, res) => {
    console.log(`Request made, URL:${req.url}`);
    //res.send('<h1>Hello Express App</h1>')
    //res.sendFile('./views/index.html', {root : __dirname});
    //res.render('index', {title: 'Home'}); // using ejs templating
    Blog.find()
        .then( (result) => {
            res.render('index', {title: 'Blogs Home Page', blogs: result});
        })
        .catch((err) => console.log(err));
};

const blog_get_id = (req, res) => {
    const ID = req.params.id;
    Blog.findById(ID)
        .then((result) => {
            console.log(result);
            res.render('details', {blog: result});
        })
        .catch((err)=> console.log(err));
}

const blog_create =  (req, res) => {
    const blog = new Blog(req.body);
    blog.save()
        .then( (result) => {
            res.redirect('/blogs')
        })
        .catch( (err) => console.log(err));
}

module.exports = {
    blog_all,
    blog_create_get,
    blog_get_id,
    blog_create
}
