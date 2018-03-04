var request = require("request");
var fs = require("fs");

var options = {
	uri: "https://localhost:3443/",
	method: "GET",
	ca: fs.readFileSync("cert.crt")
};

request(options, function(err, response, body){
	if( err ){
		console.log(err);
	}else{
		console.log(response.statusCode);
		console.log(body);
	}
});