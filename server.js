let app = require('./config/express')();

app.listen(3000, function() {
	console.log('Servidor escutando na porta 3000');
});