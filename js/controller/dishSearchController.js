var DishSearchController = function(view, model, state_controller) {

	view.searchDish.click(function() {
		var search_input = view.searchText.value;
		var search_category = view.search_dropdown.value;

		//var filtered_dishes = model.getAllDishesType(search_category,search_input);		
		view.loading.addClass('spinner');
		model.getAllDishes(search_input, search_category, function(dishes){
		 	state_controller.reloadDishItemView(dishes);
		 	view.loading.removeClass('spinner');
		}, function(error) {
			 alert("Woops no recipe found!");
			 view.loading.removeClass('spinner');
		});   
		

	});
}