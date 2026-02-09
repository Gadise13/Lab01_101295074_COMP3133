const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema(
  {
    restaurant_id: { type: String, index: true },
    name: { type: String, index: true },
    borough: { type: String },
    cuisine: { type: String, index: true },
    address: {
      building: String,
      street: String,
      zipcode: String,
      coord: [Number],
    },
    grades: [
      {
        date: Date,
        grade: String,
        score: Number,
      },
    ],
  },
  { collection: 'restaurants' } // IMPORTANT: match Atlas collection name
);

module.exports = mongoose.model('Restaurant', RestaurantSchema);
