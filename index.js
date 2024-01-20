// Dependencies and Modules
	const express = require('express');
	const mongoose = require('mongoose');
	const cors = require('cors');
	const helmet = require('helmet');
	require('dotenv').config();

// Server Setup and Middlewares
	const app = express();
		app.use(cors());
		app.use(helmet()); 
		app.use(express.json());
		app.use(express.urlencoded({ extended: true }));

// Database Connection
	const MONGO_URI = process.env.MONGO_URI;
		mongoose.connect(MONGO_URI, {
	    	useNewUrlParser: true,
	    	useUnifiedTopology: true
		})
		.then(() => {
	    	console.log('Connected to MongoDB');
		})
		.catch(err => {
	    	console.error('Could not connect', err); 
		});

// General Routing
	app.use('/', );
	app.use('/', );

// Error handling middleware (global)
	app.use((err, req, res, next) => {
	    console.error(err.stack); 
	    res.status(500).send('Something broke!');
	});

// Server Gateway Response
	const PORT = process.env.PORT || 4000;
	app.listen(PORT, () => {
	    console.log(`Server running on port ${PORT}`);
	});
