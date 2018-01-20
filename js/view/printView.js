/** PrintView Object constructor
 * 

 */ 
var PrintView = function (container, model) {

	var num_guests = container.find("#num_guests");
	num_guests.html(model.getNumberOfGuests()); 

	this.backtoSummaryButton = container.find("#backtoSummaryButton");
		backtoSummaryButton.addEventListener("click", function() {
  		printView.style.display = "none"
  		summaryView.style.display = "block"
	});
}