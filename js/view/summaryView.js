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
		var guests = model.getNumberOfGuests();
		num_guests.html(guests); 
		var dishlist = model.getFullMenu();
		
		//remove other dishes previously added so that there is no repetitions
		while(view.lastChild){
    			view.removeChild(view.lastChild);
   		}

	    for(var i = 0; i < dishlist.length ; i++){

	    	var dish = dishlist[i];

		    var div = document.createElement('div');
		    div.className ="col-md-3 biggallery";
		    div.id = dishlist[i];
		    var fig = document.createElement('figure');
		    fig.className ="gallery"
		    var img = document.createElement('img');
		    img.className = "image-box-sm"
		    img.src =  dish.image;
		    var caption = document.createElement('figcaption');
		    var caption_text = document.createTextNode(dish.title);
		    var dish_total_price = guests*dish.pricePerServing;
		    var price_text = document.createTextNode('$ ' + dish_total_price.toFixed(2));

		    //appending stuff in reverse order
		    caption.appendChild(caption_text);
		    fig.appendChild(img);
		    fig.appendChild(caption);
		    fig.appendChild(price_text);
		    div.appendChild(fig);
		    
		    view.appendChild(div);

		}
	  	var div = document.createElement('div');
	    div.className ="col-md-3 biggallery float-right";
	   	var fig = document.createElement('figure');
		fig.className ="totalgallery"
		div.appendChild(fig);
		var total_price_text = document.createTextNode('Total: $ ' + model.getTotalMenuPrice().toFixed(2));
		div.appendChild(total_price_text);
		view.appendChild(div);

		
	}
    
}