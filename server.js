require('./config/config');
let {env}=require('./config/config');

const express = require('express');
const mongoose = require('mongoose');

const path = require('path');
const app = express();

if (env === "development") {
	app.use(express.static(path.join(__dirname, 'public')));
}

app.get('/', (req, res) => {
    res.sendFile('index.html');
});






app.listen(process.env.PORT, (err) => {
	if (err) {
		throw err;
	}
	else {
		console.log(`APP running on ${process.env.PORT}`);
	}
})
