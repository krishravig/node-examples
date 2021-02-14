const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema( {
    title : {
        type: String,
        required : true
        },
    createdby: {
        type: String,
        required : true
    }
},  {timestamps : true});

const Blog = mongoose.model('blogs', blogSchema);

module.exports = Blog;