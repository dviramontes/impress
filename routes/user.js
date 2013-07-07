
/*
			  
			  USERS RESTFUL API
			  ---------*-------

*/
// @jesse good job on this, 
// im changing the restful architecture 
// a little bit to simplifiy 
var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/impress");
var UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

//Apply schema to database
Users = mongoose.model('Users', UserSchema);


// //display list of users....INDEX
// app.get("/users", function(req, res ) {
//   Users.find({}, function(err, docs) { // query for all objects 
//     res.render('users/index', { users: docs });
//   }); 
// });

// // New user 
// app.get('/users/new', function(req, res) {
//   res.render("users/new");
// });

// // CREATE 
// app.post('/users', function (req, res) {
//   var b = req.body;
//   new Users({
//     name: b.name,
//     email: b.email,
//     password: b.password
//   }).save(function (err, user) {
//     if (err) res.json(err);
//     res.redirect('/users/' + user.name);
//   });
// });

// app.param('name', function(req, res, next, name) {
//   Users.find({name: name}, function(err, docs) {
//     req.user = docs[0];
//     next();
//   });
// });

// //SHOW
// app.get('/users/:name', function (req, res) {
//   res.render("users/show", { user: req.user } );
// });

// //update
// app.put('/users/:name', function(req,res) {
//   var b = req.body;
//   Users.update(
//     { name: req.params.name},
//     { name: b.name, password: b.password, email: b.email },
//     function ( err ) {
//       res.redirect("/users/" + b.name);
//     });
// });

// //Edit
// app.get('/users/:name/edit', function (req, res) {
//   res.render("users/edit", { user: req.user });
// });


// // Delete
// app.delete('/users/:name', function ( req, res ) {
//   Users.remove({ name: req.params.name}, function (err) {
//     res.redirect('/users/');
//   });
// });



exports.list = function(req, res){
  res.send("respond with a resource");
};