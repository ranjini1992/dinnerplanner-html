
var SidebarController = function(view, model, state_controller) {
	view.numGuests.click(function() {
		model.setNumberOfGuests(numGuests.value);
	});
	
	view.addGuest.click(function() {
		var num_of_guests = model.getNumberOfGuests();
  		model.setNumberOfGuests(num_of_guests+1);
	});

	view.removeGuest.click(function() {
		var num_of_guests = model.getNumberOfGuests();
		if(num_of_guests >= 1 ){
	  		model.setNumberOfGuests(num_of_guests-1);
	  	} 
	});

	view.recipeMenu.click(function(e) {
		var target = $(e.target);
		if(target[0].id && !isNaN(target[0].id)){
	  		model.removeDishFromMenu(target[0].id);
	  		$("#"+String(target[0].id)+"_row").remove();
	  	}
	});

	view.confirmDinner.click(function() {
		if(model.getTotalMenuPrice() != 0){
			state_controller.route('confirmDinner');
		}
	});

}