// import mongoose to build a model
const mongoose = require('mongoose');

// the schema - the rules that the entries in the db must follow
const AuthorSchema = new mongoose.Schema(
{
    firstName: {
        type: String,
        required: [true, "First Name is required"],
        minlength: [1, "First Name must be ast least 2 characters long"]
    },
    lastName: {
        type: String,
        required: [true, "Description is required"],
        minlength: [1, "Description must be ast least 1 characters long"]
    },
}, {timestamps: true});


// the model - this is what we use to make the actual queries to the DB
const Author = mongoose.model('Author', AuthorSchema);

// export the model
module.exports = Author;