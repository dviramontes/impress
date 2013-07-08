/*

			  /USERS RESTFUL API
			  ---------*--------

*/

var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/impress");

var userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

// Apply schema to database
var Users = mongoose.model('Users', userSchema);

// and here we go..
var User = {

	list : function(res){
		// display list of users

		// In the future ,this is where we
		// provide a callback here for 
		// checking in real time how many
		// users are being added every x interval 
		// this is why we need to split the
		// /get users logic
		// into multiple functions
		// **
		// also the other reason for constructing a
		// Users object is because we want to 
		// send as much of this logic to the client
		// to be contructed there and manipulated with
		// angular.js 

		Users.find({}, function(err, data) { 
			// query for all objects 
	    	return res.render('users/index', { users: data });
		}); 
	},
	createUserForm : function(res){
		return res.render("users/new");
	},
	addUser : function(req, res){
		var body = req.body;
		var newUser = new Users({
			name: body.name,
			email: body.email,
			password: body.password
		}).save(function (err, user){
			if (err) return res.json(err);
			return res.redirect('users/' + user.name);
		});
	},
	username : function(req, res, next, name){
	
		Users.find({name: name}, function(err, users) {
			next();
			return req.user = users[0];
			
		});
	},
	show : function(req, res){
		return res.render("users/show", { user: req.user } );
	}
};

// */users 

exports.list = function(req, res){
	User.list(res);
};

// */users/create

exports.createUserForm = function(req, res){
	User.createUserForm(res);
}

// */users/create/new

exports.createUser = function(req, res){
	User.addUser(req, res);
}

// */users/:name


exports.username = function(req, res, next, name){
	User.username(req, res, next, name);
}

// */users/show/:name 
exports.show = function(req, res){
	User.show(req, res);
}


// app.get('/users/:name', function (req, res) {
//   res.render("users/show", { user: req.user } );
// });

// app.param('name', function(req, res, next, name) {
//   Users.find({name: name}, function(err, docs) {
//     req.user = docs[0];
//     next();
//   });
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



// exports.list = function(req, res){
//   res.send("respond with a resource");
// };