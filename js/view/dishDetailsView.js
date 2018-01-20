/** DishDetailsView Object constructor
 * 

 */ 
var DishDetailsView = function (container, model, side_bar_view) {

	this.load = function(id){
		var dish = model.getDish(id);
		var dish_total_price = model.getDishPrice(id);

		var div_heading = document.getElementById("dishname");
		div_heading.removeChild(div_heading.lastChild);
	    var h4 = document.createElement("h4");
		h4.textContent = dish.name;
	    div_heading.appendChild(h4);

	    var div_image = document.getElementById("dishpicture");
	    div_image.removeChild(div_image.lastChild);
	    var fig = document.createElement('figure');
	    var img = document.createElement('img');
	    img.style.width = img.style.height = '200px'
	    img.src = 'images/' + dish.image;
	    var caption = document.createElement('figcaption');
		var caption_text = document.createTextNode('Dish Type: ' + dish.type);
		caption.appendChild(caption_text);
	    fig.appendChild(img);
		fig.appendChild(caption);
	    div_image.appendChild(fig);

	    var div_steps = document.getElementById("dishprep");
	    div_steps.removeChild(div_steps.lastChild);
	    var steps = document.createTextNode(dish.description);
	    div_steps.appendChild(steps);

		this.ingredientsMenu = container.find("#ingredientsMenu");
		var tbl  = ingredientsMenu;
		while(tbl.rows.length > 1) {
		  tbl.deleteRow(1);
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

	    this.backButton = container.find("#backButton");
		backButton.addEventListener("click", function() {
	  		dishSearchView.style.display = "block"
	  		dishDetailsView.style.display = "none"
		});

		this.addtoMenu = container.find("#addtoMenu");
		addtoMenu.addEventListener("click", function() {
	  		model.addDishToMenu(dish.id);
	  		side_bar_view.refresh();
	  		dishSearchView.style.display = "block"
	  		dishDetailsView.style.display = "none"
		});
	}  

}