/** PrintView Object constructor
 * 

 */ 
var PrintView = function (container, model) {
	model.addObserver(this);

	var num_guests = container.find("#num_guests");
	num_guests.html(model.getNumberOfGuests()); 
	this.backtoSummaryButton = container.find("#backtoSummaryButton");
	var view = container.find("#printMenu")[0]; 

	this.update = function() {
		num_guests.html(model.getNumberOfGuests()); 
		
		var dishlist = model.getFullMenu();

		//remove other dishes previously added so that there is no repetitions
		while(view.lastChild){
			view.removeChild(view.lastChild);
		}

		for(var i = 0; i < dishlist.length; i++){
			var dish = dishlist[i];

	    	var div = document.createElement('div');
		    div.className ="row buffer";

		    var div1 = document.createElement('div');
		    div1.className ="col-md-3 gallery buffer";
		    var img = document.createElement('img');
		    img.src = dish.image;
		    img.className = "image-box-md"

		    //appending stuff in reverse order
		    div1.appendChild(img);
		    div.appendChild(div1);

		    var div2 = document.createElement('div');
		    div2.className ="col-md-4 buffer";
		    var heading = document.createElement("H3")                
			var name = document.createTextNode(dish.title);     
			heading.appendChild(name)
			var time = document.createTextNode("Ready in " + dish.readyInMinutes + "minutes");     
			div2.appendChild(heading);
			div2.appendChild(time);
			div.appendChild(div2);

		   	var div3 = document.createElement('div');
		    div3.className ="col-md-5 buffer";
			div3.appendChild(document.createTextNode(dish.instructions))
			div.appendChild(div3);

			view.appendChild(div);

		}
	}
}