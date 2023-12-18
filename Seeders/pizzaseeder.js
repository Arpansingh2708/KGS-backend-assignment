const Pizza = require('../models/pizza');
const connectToDatabase = require('../Database/db');
const db = connectToDatabase();

// Function to generate random pizza data
function generateRandomPizza() {
  const types = ['Veg', 'Non-veg'];

  return {
    name: `Pizza ${Math.floor(Math.random() * 1000)}`,
    type: types[Math.floor(Math.random() * types.length)],
    amount: Math.floor(Math.random() * (900 - 600 + 1)) + 600, // Random amount between 600 and 900
    times: Math.floor(Math.random() * (1900 - 1500 + 1)) + 1500, // Random times between 1500 and 1900
  };
}

// Function to seed the database with 30 dummy pizzas
async function seedDatabase() {
  try {
    // Remove existing documents from the Pizza collection
    await Pizza.deleteMany();

    // Generate and insert 30 dummy pizzas
    const pizzasData = Array.from({ length: 30 }, () => generateRandomPizza());
    await Pizza.insertMany(pizzasData);

    console.log('Database seeded successfully');
    return true
  } catch (error) {
    console.error('Error seeding database:', error);
    return false
  }
}

// Run the seed function
seedDatabase();
