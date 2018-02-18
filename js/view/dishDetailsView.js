/** DishDetailsView Object constructor

 * Not adding this view as an observer since this view is not loaded until a dish is clicked

 */ 
var DishDetailsView = function (container, model) {

	var view = this;
	var num_guests = container.find("#num_guests");
	this.backButton = container.find("#backButton");
	this.addtoMenu = container.find("#addtoMenu");
	var div_heading = container.find("#dishname")[0];
	var div_image = container.find("#dishpicture")[0];
	var div_steps = container.find("#dishprep")[0];
	var ingredientsMenu = container.find("#ingredientsMenu")[0];
	var total_price = container.find("#total_price");
	var loading = container.find("#loading");
	this.selectedDish;

	this.load = function(id){
		loading.addClass('spinner');

		div_heading.removeChild(div_heading.lastChild);
		div_image.removeChild(div_image.lastChild);
		div_steps.removeChild(div_steps.lastChild);
		var tbl  = ingredientsMenu;
		while(tbl.rows.length > 0) {
		  tbl.deleteRow(0);
		}
		total_price.html("");

		num_guests.html(model.getNumberOfGuests()); 
		model.getDish(id, function(dish){
			view.selectedDish = {};
			view.selectedDish.id = id;
			view.selectedDish.title = dish.title;
			view.selectedDish.readyInMinutes = dish.readyInMinutes;
			view.selectedDish.extendedIngredients = dish.extendedIngredients;
			view.selectedDish.instructions = dish.instructions;
			view.selectedDish.pricePerServing = dish.pricePerServing*0.01;
			view.selectedDish.image = dish.image;
		
		    var h4 = document.createElement("h4");
			h4.textContent = dish.title;
		    div_heading.appendChild(h4);
		   
		    div_image.className = "gallery"
		    var fig = document.createElement('figure');
		    var img = document.createElement('img');
		    img.src = dish.image;
		  	img.className = "image-box-md";
		    var caption = document.createElement('figcaption');
			var caption_text = document.createTextNode('Ready in ' + dish.readyInMinutes + ' minutes');
			caption.appendChild(caption_text);
		    fig.appendChild(img);
			fig.appendChild(caption);
		    div_image.appendChild(fig);
	    
		    var steps = document.createTextNode(dish.instructions);
		    div_steps.appendChild(steps);

			
			for(var i = 0; i < dish.extendedIngredients.length; i++){
		        var tr = tbl.insertRow();	        
		        var td = tr.insertCell();
		        td.appendChild(document.createTextNode(dish.extendedIngredients[i].amount.toFixed(1) + ' ' + dish.extendedIngredients[i].unit));

		        td = tr.insertCell();
		        td.appendChild(document.createTextNode(dish.extendedIngredients[i].name)); 
		        
		     	td = tr.insertCell();
		     	var img = document.createElement('img');
		     	img.src = dish.extendedIngredients[i].image;
		  		img.className = "image-box-xs";
		 		td.appendChild(img);    	        
		    }
  
		    total_price.html("Total : $ " + (dish.pricePerServing*0.01).toFixed(2)); 
		
			loading.removeClass('spinner');
	    }, function(error) {
			 alert("Woops no recipe found!");
			 loading.removeClass('spinner');
		});

	}
	  
}