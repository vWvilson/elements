const express = require("express");
const app = express();
const morgan = require('morgan')
const port = 5000;


// logger
app.use(morgan('dev'))



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes')(app);

app.get('/', (req, res) => {
	res.send('PORT 5000');
})


app.listen(port, (err) => {
	if(err) { console.log(err) };
	console.log('Listening on port ' + port);
})