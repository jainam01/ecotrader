const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    firstname : { type: String ,  required: true},
    lastname :{ type: String ,  required: true},
    email : { type: String ,  required: true},
    number : { type: int ,  required: true},
    content : { type: String ,  required: true},
})

  module.exports = mongoose.model('Post' , postSchema);