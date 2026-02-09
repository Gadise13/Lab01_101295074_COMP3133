const express = require('express');
const router = express.Router();
const Restaurant = require('../models/Restaurant');

/**
 * GET /restaurants
 * - Return all restaurants
 * - Support sorting by restaurant_id with query param: ?sortBy=ASC|DESC
 * - Selected columns for this endpoint: _id, cuisine, name, borough, restaurant_id
 */
router.get('/', async (req, res) => {
  try {
    const sortBy = (req.query.sortBy || 'ASC').toUpperCase() === 'DESC' ? -1 : 1;

    const restaurants = await Restaurant.find({})
      .select('_id cuisine name borough restaurant_id')
      .sort({ restaurant_id: sortBy });

    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * GET /restaurants/cuisine/:type
 * - Return all restaurant details filtered by cuisine
 */
router.get('/cuisine/:type', async (req, res) => {
  try {
    const restaurants = await Restaurant.find({ cuisine: req.params.type });
    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * GET /restaurants/:cuisine
 * - Return restaurants where cuisine == :cuisine AND borough != Brooklyn
 * - Selected columns must include cuisines, name and city; exclude id
 *   (Using borough field as city/area field in the common NYC restaurants dataset)
 * - Sort by name ASC
 */
router.get('/:cuisine', async (req, res) => {
  try {
    const restaurants = await Restaurant.find({
      cuisine: req.params.cuisine,
      borough: { $ne: 'Brooklyn' },
    })
      .select('cuisine name borough -_id')
      .sort({ name: 1 });

    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
