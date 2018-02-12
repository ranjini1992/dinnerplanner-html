/** SummaryView Object constructor
 * 

 */ 
var SummaryView = function (container, model) {
	model.addObserver(this);

	this.backtoEditButton = container.find("#backtoEditButton");
	this.printRecipe = container.find("#printRecipe");
	var view = container.find("#selectedDishMenu")[0];
	var num_guests = container.find("#num_guests");

	this.update = function(){
		
		num_guests.html(model.getNumberOfGuests()); 
		var dishlist = model.getFullMenu();
		
		//remove other dishes previously added so that there is no repetitions
		while(view.lastChild){
    			view.removeChild(view.lastChild);
   		}

	    for(var i = 0; i < dishlist.length ; i++){

	    	var dish = model.getDish(dishlist[i]);

		    var div = document.createElement('div');
		    div.className ="col-md-3 biggallery";
		    div.id = dishlist[i];
		    var fig = document.createElement('figure');
		    fig.className ="gallery"
		    var img = document.createElement('img');
		    img.className = "image-box-md"
		    img.src = 'images/' + dish.image;
		    var caption = document.createElement('figcaption');
		    var caption_text = document.createTextNode(dish.name);
		    var dish_total_price = model.getDishPrice(dish.id);
		    var price_text = document.createTextNode(dish_total_price.toFixed(2) + ' SEK');

		    //appending stuff in reverse order
		    caption.appendChild(caption_text);
		    fig.appendChild(img);
		    fig.appendChild(caption);
		    div.appendChild(fig);
		    div.appendChild(price_text);
		    view.appendChild(div);

		}
	  	var div = document.createElement('div');
	    div.className ="col-md-3 biggallery float-right";
	   	var fig = document.createElement('figure');
		fig.className ="totalgallery"
		div.appendChild(fig);
		var total_price_text = document.createTextNode('Total: ' + model.getTotalMenuPrice().toFixed(2) + ' SEK');
		div.appendChild(total_price_text);
		view.appendChild(div)

		
	}
    
}