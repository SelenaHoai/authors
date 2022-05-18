// import the controller to use the instantiated model
const AuthorController = require("../controllers/author.controller")


module.exports = (app) => {
    app.get("/api/author", AuthorController.findAll);
    app.get("/api/author/:id", AuthorController.findOne);
    app.post("/api/author/new", AuthorController.create);
    app.put("/api/author/update/:id", AuthorController.update);
    app.delete("/api/author/delete/:id",AuthorController.delete);
}