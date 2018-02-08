var DishSearchController = function(view, model, state_controller) {

	view.searchDish.click(function() {
		var search_input = view.searchText.value;
		var search_category = view.search_dropdown.value;

		var filtered_dishes = model.getAllDishes(search_category,search_input);
		state_controller.reloadDishItemView(filtered_dishes);

	});
}