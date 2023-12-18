const Pizza = require('../models/pizza');

const getTopzTenpizzas = async (req, res) => {
  try {
    // Getting top 10 pizza with highest number of ordered
    const pizza = await Pizza.find({}).sort({times:-1}).limit(10);
    res.send(pizza);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

module.exports = {
  getTopzTenpizzas,
};
