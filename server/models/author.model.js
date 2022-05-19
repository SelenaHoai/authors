// import mongoose to build a model
const mongoose = require('mongoose');

// the schema - the rules that the entries in the db must follow
const AuthorSchema = new mongoose.Schema(
{
    firstName: {
        type: String,
        required: [true, "First Name is required"],
        minlength: [3, "First Name must be at least 3 characters long"]
    },
    lastName: {
        type: String,
        required: [true, "Last name is required"],
        minlength: [3, "Last name must be at least 3 characters long"]
    },
}, {timestamps: true});


// the model - this is what we use to make the actual queries to the DB
const Author = mongoose.model('Author', AuthorSchema);

// export the model
module.exports = Author;