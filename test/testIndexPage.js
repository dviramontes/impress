/*

					request the index page 
					of the app,this is a 
					local http request.
					We'll do the authenticated 
					request next.
	
*/
var should = require('chai').should(),
	http = require("http");

var options_1 = {
	hostname : "127.0.0.1",
	port : "3000",
	path : "/index",
	method : "GET"
}

/*

					request index.html test
					-----------------------

*/

var requestIndexPage_noAuth = http.request(options_1, function(res){

	describe("Gets index.html from server", function(res){
		it("should repond with status code 200", function(res){

		})
		it("should repond with content-type == 'text/html'", function(){
			// checks myme-type
			res.should.be.html;
		})
	})

})

requestIndexPage_noAuth.on("error", function(err){
	if(err) throw err;
})

requestIndexPage_noAuth.on("data", function(datum){
	console.log(data);
})

requestIndexPage_noAuth.end();