let express = require('express');
let load = require('express-load');
let bodyParser = require('body-parser');

module.exports = function() {
	let app = express();
	
	app.use(express.static('./public'));
	app.set('view engine', 'ejs');
	app.set('views', './app/views');
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
	app.use(require('method-override')());
	
	load('models', {cwd:'app'})
		.then('controllers')
		.then('routes')
		.into(app);

	return app;
}