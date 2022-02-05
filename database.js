const mongoose = require("mongoose");

const URL = 'mongodb+srv://adesholly:Harborllorryyaa11@cluster0.ae03x.mongodb.net/Comfort-Zone';

mongoose.connect(URL, {useUnifiedTopology : true, useNewUrlParser : true});

const connection = mongoose.connection;

connection.on('error', () => {
    console.log('Mongo DB connection Failed')
});

connection.on('connected', () => {
    console.log('Mongos DB connection Successfull')
});

module.exports = mongoose;
 