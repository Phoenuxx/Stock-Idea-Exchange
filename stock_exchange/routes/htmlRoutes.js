
module.exports = function(app) {
    // Route for home
    app.get("/", (req, res) => {
        res.render('index');
    });
  
}