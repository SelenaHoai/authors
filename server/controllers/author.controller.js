// --- CONTROLLER -- is all CRUD
// making queries to the DB
const Author = require("../models/author.model");


module.exports = {

    // READ ALL
    findAll: (req, res) => {
        Author.find({})
        .then( (authors) => {
            return res.json(authors)
        })
        .catch(err => res.json({message: 'Something went wrong', error:err}));  
    },

    // CREATE
    create: (req, res) => {
        Author.create(req.body)
        .then( newAuthor => {
            console.log('DB Success created new Author');
            return res.json(newAuthor)
        })
        .catch(err => res.status(400).json(err));
    },

    // READ ONE
    findOne: (req, res) => {
        Author.findById(req.params.id)
        .then(oneSingleAuthor => res.json(oneSingleAuthor))
        .catch(err => res.json({ message: 'Error finding an Author', error: err }));
    },

    // UPDATE
    update: (req, res) => {
        Author.findByIdAndUpdate(req.params.id, req.body, {
            new: true, runValidators: true
        })
        .then(updatedAuthor => res.json(updatedAuthor))
        .catch(err => res.status(400).json(err))
    },

    // DELETE
    delete: (req, res) => {
        Author.findByIdAndDelete(req.params.id)
        .then(result => res.json(result))
        .catch(err => res.json({ message: 'Error unable to delete an Author', error: err }));
    }

}