var DishDetailsController = function (view, model, state_controller) {

	view.backButton.click(function() {
		state_controller.route('showDishItems');
  		
	});

	view.addtoMenu.click(function() {
		model.addDishToMenu(view.dish_id);
		state_controller.route('addDish');
	});
}