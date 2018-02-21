var DishItemController = function(view, model, state_controller) {

	view.container.click(function(e) {
	    var target = $(e.target);
	    if(target[0].id && !isNaN(target[0].id)){
		    var dish_id = target[0].id;
			state_controller.reloadDishDetailsView(dish_id);
			state_controller.route('showDishDetails');
		}
	});


}