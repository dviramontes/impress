
var should = require('chai').should(),
	http = require("http");

/*
							 
					request index.html 
					---------*--------
					local request for 
					index.html from 
					server request
					with authentication 
					to follow..

*/

describe("Gets index.html from server", function(){
	var contentType = "";

	var options_1 = {
		hostname : "127.0.0.1",
		port : "3000",
		path : "/",
		method : "GET"
	};
	it("should repond with status code 200", function(){

		var requestIndexPage_noAuth = http.request(options_1, function(res){
			console.dir(res.headers);
			
			contentType = res.headers['content-type'];

			console.log("Status Code : " + res.statusCode);

			// reference to http status codes here :
			// http://httpstatus.es
		
			(res.statusCode).should.equal(200);

			res.on("data", function(data){
				console.log("Got data :: " + data.toString());
			});
		});

		requestIndexPage_noAuth.on("error", function(err){
			if(err) throw err;
		});

		requestIndexPage_noAuth.end();

	});

	it("should respond with correct content type", function(){
		contentType.should.be.html;
	});

});


