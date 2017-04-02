var express = require('express');
var consign = require('consign');

module.exports = function() {
	var app = express();
	
	app.use(express.static('./public'));
	app.set('view engine', 'ejs');
	app.set('views', './app/views');

	consign({cwd:'app'})
		.include('controllers')
		.then('routes')
		.into(app)

	return app;
}