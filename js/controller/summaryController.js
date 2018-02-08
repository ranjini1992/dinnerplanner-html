var SummaryController = function(view, model, state_controller) {

	view.backtoEditButton.click(function() {
		state_controller.route('backtoEdit');
	});
	
	view.printRecipe.click(function() {
		state_controller.route('printRecipe');
	});
}