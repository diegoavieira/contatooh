import express  from 'express';
import consign from 'consign';

module.exports = () => {
	let app = express();
	
	app.use(express.static('./public'));
	app.set('json spaces', 2);
	
	consign({cwd: process.cwd()+'/app'})
		.include('controllers')
		.then('routes')
		.into(app);

	return app;
}