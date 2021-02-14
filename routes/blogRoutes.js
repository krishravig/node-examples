const express = require('express');
const blogController = require('../controllers/blogController');
const Blog = require('../models/blogSchema');

const router = express.Router();

router.get('/', blogController.blog_all);
router.get('/create', blogController.blog_create_get);
router.get('/:id', blogController.blog_get_id);
router.post('/', blogController.blog_create);

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