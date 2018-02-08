var DishItemController = function(view, model, state_controller) {

	view.container.click(function(e) {
	    var target = $(e.target);
	    var dish_id = target[0].id;
		state_controller.reloadDishDetailsView(dish_id);
		state_controller.route('showDishDetails');
	});


}