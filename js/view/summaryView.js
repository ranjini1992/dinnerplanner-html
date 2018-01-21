/** SummaryView Object constructor
 * 

 */ 
var SummaryView = function (container, model, print_view) {

	this.backtoEditButton = container.find("#backtoEditButton");
	backtoEditButton.addEventListener("click", function() {
		sidebarView.style.display = "block"
  		dishSearchView.style.display = "block"
  		summaryView.style.display = "none"
	});
	this.printRecipe = container.find("#printRecipe");
	printRecipe.addEventListener("click", function() {
		print_view.printMenu();
		printView.style.display = "block"
		summaryView.style.display = "none"
	});

	this.loadsummary = function(){
		var num_guests = container.find("#num_guests");
		num_guests.html(model.getNumberOfGuests()); 

		var dishlist = model.getFullMenu();

		var view = document.getElementById("selectedDishMenu");
		//remove other dishes previously added so that there is no repetitions
		while(view.lastChild){
			view.removeChild(view.lastChild);
		}

	    for(i = 0; i < dishlist.length; i++){

		    var div = document.createElement('div');
		    div.className ="col-md-2";
		    div.id = dishlist[i].id;
		    var fig = document.createElement('figure');
		    fig.className ="gallery"
		    var img = document.createElement('img');
		    img.style.width = img.style.height = '100px'
		    img.src = 'images/' + dishlist[i].image;
		    var caption = document.createElement('figcaption');
		    var caption_text = document.createTextNode(dishlist[i].name);
		    var dish_total_price = model.getDishPrice(dishlist[i].id);
		    var price_text = document.createTextNode(dish_total_price.toFixed(2) + ' SEK');

		    //appending stuff in reverse order
		    caption.appendChild(caption_text);
		    fig.appendChild(img);
		    fig.appendChild(caption);
		    div.appendChild(fig);
		    div.appendChild(price_text);
		    div.style.textAlign = "center";
		    view.appendChild(div);

		}
	  	var div = document.createElement('div');
	    div.className ="col-md-2";
		var total_price_text = document.createTextNode('Total: ' + model.getTotalMenuPrice().toFixed(2) + ' SEK');
		div.appendChild(total_price_text);
		div.style = "float: right";
		view.appendChild(div)
	}
    
}