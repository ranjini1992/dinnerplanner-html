
var SidebarController = function(view, model, state_controller) {
//	console.log(view);
	view.numGuests.click(function() {
		model.setNumberOfGuests(numGuests.value);
	});
	
	view.addGuest.click(function() {
		var num_of_guests = model.getNumberOfGuests();
  		model.setNumberOfGuests(num_of_guests+1);
  		view.update();
	});

	view.removeGuest.click(function() {
		var num_of_guests = model.getNumberOfGuests();
		if(num_of_guests >= 1 ){
	  		model.setNumberOfGuests(num_of_guests-1);
	  	} 
	  	view.update(); 	

	});

	view.confirmDinner.click(function() {
		if(model.getTotalMenuPrice() != 0){
			state_controller.route('confirmDinner');
		}
	});

}