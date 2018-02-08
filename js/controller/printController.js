var PrintController = function (view, model, state_controller) {

	view.backtoSummaryButton.click(function() {
		state_controller.route('backtoSummary');
	});
}