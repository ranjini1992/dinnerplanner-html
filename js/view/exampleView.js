/** ExampleView Object constructor

 * Not adding this view as an observer since it doesn't really need to observe anything for now

 */ 
 var ExampleView = function (container, model) {
	this.createDinner = container.find("#createDinner");
	this.update = function(message){
		//nothing for now
	}
}