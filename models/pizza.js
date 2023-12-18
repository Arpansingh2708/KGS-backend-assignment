const mongoose = require('mongoose');

const pizzaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['Veg', 'Non-veg'],
    required: true, 
  },
  amount: {
    type: Number,
    required: true,
  },
  times : {
    type: Number,
    required: true, 
  }
});

const Pizza = mongoose.model('Pizza', pizzaSchema);

module.exports = Pizza;