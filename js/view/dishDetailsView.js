/** DishDetailsView Object constructor

 * Not adding this view as an observer since this view is not loaded until a dish is clicked

 */ 
var DishDetailsView = function (container, model, side_bar_view) {

	var view = this;
	var num_guests = container.find("#num_guests");
	this.backButton = container.find("#backButton");
	this.addtoMenu = container.find("#addtoMenu");
	var div_heading = container.find("#dishname")[0];
	var div_image = container.find("#dishpicture")[0];
	var div_steps = container.find("#dishprep")[0];
	var ingredientsMenu = container.find("#ingredientsMenu")[0];

	this.load = function(id){
		view.dish_id = id;
		view.update();
	}

	this.update = function(){

		num_guests.html(model.getNumberOfGuests()); 
		var dish = model.getDish(view.dish_id);
		var dish_total_price = model.getDishPrice(view.dish_id);


		div_heading.removeChild(div_heading.lastChild);
	    var h4 = document.createElement("h4");
		h4.textContent = dish.name;
	    div_heading.appendChild(h4);

	   
	    div_image.removeChild(div_image.lastChild);
	    div_image.className = "biggallery"
	    var fig = document.createElement('figure');
	    var img = document.createElement('img');
	    fig.style.height = '100px'
	    img.src = 'images/' + dish.image;
	    fig.className ="square-box"
	    var caption = document.createElement('figcaption');
		var caption_text = document.createTextNode('Dish Type: ' + dish.type);
		caption.appendChild(caption_text);
	    fig.appendChild(img);
		fig.appendChild(caption);
	    div_image.appendChild(fig);

	    div_steps.removeChild(div_steps.lastChild);
	    var steps = document.createTextNode(dish.description);
	    div_steps.appendChild(steps);

		var tbl  = ingredientsMenu;
		while(tbl.rows.length > 0) {
		  tbl.deleteRow(0);
		}
		for(var i = 0; i < dish.ingredients.length; i++){
	        var tr = tbl.insertRow();	        
	        var td = tr.insertCell();
	        td.appendChild(document.createTextNode(dish.ingredients[i].quantity + ' ' + dish.ingredients[i].unit));

	        td = tr.insertCell();
	        td.appendChild(document.createTextNode(dish.ingredients[i].name)); 
	        
	        td = tr.insertCell();
	 		td.appendChild(document.createTextNode('SEK')); 

	        td = tr.insertCell(); 
	        td.appendChild(document.createTextNode(dish.ingredients[i].price.toFixed(2)));    
	        
	    }

	    var total_price = container.find("#total_price");
	    total_price.html("Total : SEK " + dish_total_price.toFixed(2)); 

	}
	  
}