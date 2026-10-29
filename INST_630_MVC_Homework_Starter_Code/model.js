const restaurantModel = {
  restaurants: [
    { name: "Milano's", cuisine: "Italian", rating: 4.5, priceRange: "$$" },
    { name: "Sakura Sushi", cuisine: "Japanese", rating: 4.2, priceRange: "$$$" },
    { name: "The Brass Elephant", cuisine: "American", rating: 4.8, priceRange: "$$$" },
    { name: "Pho Corner", cuisine: "Vietnamese", rating: 4.3, priceRange: "$" },
    { name: "Tandoor Palace", cuisine: "Indian", rating: 4.1, priceRange: "$$"}
  ],

/*
The model stores all of the restaurant data (which includes the price range), so priceRange 
to be kept in the model so the application can filter the data by price without
messing with view or controller logic.
*/
  getAllRestaurants: function () {
    return this.restaurants;
  },

  getTopRatedRestaurants: function () {
    return this.restaurants.filter(function (restaurant) {
      return restaurant.rating >= 4.5;
    });
  },
  getInexpensiveRestaurants: function () {
    return this.restaurants.filter(function (restaurant) {
      return restaurant.priceRange === "$";
    });
  },

  getRestaurantsByCuisine: function (cuisine) {
    return this.restaurants.filter(function (restaurant) {
      return restaurant.cuisine === cuisine;
    });
  }
};
