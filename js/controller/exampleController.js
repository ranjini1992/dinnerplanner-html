var ExampleController = function(view, state_controller) {

	view.createDinner.click(function() {
		state_controller.route("createDinner");
	});
}