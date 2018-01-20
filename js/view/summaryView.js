/** SummaryView Object constructor
 * 

 */ 
var SummaryView = function (container, model, side_bar_view) {

	this.backtoEditButton = container.find("#backtoEditButton");
	backtoEditButton.addEventListener("click", function() {
		sidebarView.style.display = "block"
  		dishSearchView.style.display = "block"
  		summaryView.style.display = "none"
	});
	this.printRecipe = container.find("#printRecipe");
	printRecipe.addEventListener("click", function() {
		printView.style.display = "block"
		summaryView.style.display = "none"
	});

	var num_guests = container.find("#num_guests");
	num_guests.html(model.getNumberOfGuests()); 

	var dishlist = model.getFullMenu();

    for(i = 0; i < dishlist.length; i++){

	    var view = document.getElementById("selectedDishMenu");
	    var div = document.createElement('div');
	    div.className ="col-md-3 gallery";
	    div.id = dishlist[i].id;
	    var fig = document.createElement('figure');
	    var img = document.createElement('img');
	    img.style.width = img.style.height = '80px'
	    img.src = 'images/' + dishlist[i].image;
	    var caption = document.createElement('figcaption');
	    var caption_text = document.createTextNode(dishlist[i].name);

	    //appending stuff in reverse order
	    caption.appendChild(caption_text);
	    fig.appendChild(img);
	    fig.appendChild(caption);
	    div.appendChild(fig);
	    view.appendChild(div);

	}
    
}