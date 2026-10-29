const restaurantController = {
  init: function () {
    const showAllButton = document.querySelector("#showAll");
    const showTopRatedButton = document.querySelector("#showTopRated");
    const showInexpensiveButton = document.querySelector("#showInexpensive");
    const cuisineFilter = document.querySelector("#cuisineFilter");
    const filterCuisineButton = document.querySelector("#filterCuisine");

    showAllButton.addEventListener("click", function () {
      const restaurants = restaurantModel.getAllRestaurants();
      restaurantView.displayRestaurants(restaurants);
    });

    showTopRatedButton.addEventListener("click", function () {
      const restaurants = restaurantModel.getTopRatedRestaurants();
      restaurantView.displayRestaurants(restaurants);
    });

    showInexpensiveButton.addEventListener("click", function () {
      const restaurants = restaurantModel.getInexpensiveRestaurants();
      restaurantView.displayRestaurants(restaurants);
    });

    filterCuisineButton.addEventListener("click", function () {
      const selectedCuisine = cuisineFilter.value;

      if (selectedCuisine === "") {
        restaurantView.displayRestaurants(restaurantModel.getAllRestaurants());
        return;
      }

      const restaurants = restaurantModel.getRestaurantsByCuisine(selectedCuisine);
      restaurantView.displayRestaurants(restaurants);
    });

    restaurantView.displayRestaurants(restaurantModel.getAllRestaurants());
  }
};

restaurantController.init();
