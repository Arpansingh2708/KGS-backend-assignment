const mongoose = require('mongoose');
require('dotenv').config();

const connectToDatabase = () => {
  mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

  const db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log('Database connected successfully');
  });

  return db;
};

module.exports = connectToDatabase;
