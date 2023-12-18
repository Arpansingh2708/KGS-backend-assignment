const express = require('express');
const pizzarController = require('../Controllers/PizzaController');

const router = express.Router();
/**
 * @swagger
 * /pizzas-top-ten:
 *   get:
 *     summary: Get the top 10 pizzas with the highest times values
 *     tags: [Pizzas]
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               - _id: '6578af16d3bba7083ee8fdac'
 *                 name: 'Pizza 697'
 *                 type: 'Veg'
 *                 amount: 683
 *                 times: 1860
 *                 __v: 0
 *               - _id: '6578af16d3bba7083ee8fdad'
 *                 name: 'Pizza 213'
 *                 type: 'Non-veg'
 *                 amount: 771
 *                 times: 1732
 *                 __v: 0
 */
router.get('/pizzas-top-ten', pizzarController.getTopzTenpizzas);

module.exports = router;
