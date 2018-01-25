/** ExampleView Object constructor
 * 
 */ 
var ExampleView = function (container, model) {

	//var numberOfGuests = container.find("#numberOfGuests");
	this.createDinner = container.find("#createDinner");
	createDinner.addEventListener("click", function() {
  		  exampleView.style.display = "none"
  		  sidebarView.style.display = "block"
  		  dishSearchView.style.display = "block"
	});
	
}
 
