/** DishItemView Object constructor
 * 

 */ 
var DishItemView = function (container, model) {
	model.addObserver(this);

	this.container = container;
	var loading = container.find("#loading");

	var view = this;

    this.createListOfAllDishes = function(dishlist) {

    	var parent = container[0];
		while(parent.children.length > 1){
			parent.removeChild(parent.lastChild);
		}

    	for(var i = 0; i < dishlist.length; i++){

		    var div = document.createElement('div');
		    div.className ="col-md-3 gallery";
		    var fig = document.createElement('figure');
		    var img = document.createElement('img');
		    img.className = "image-box-sm";
		    img.src =  'https://spoonacular.com/recipeImages/' + dishlist[i].image;
		    var caption = document.createElement('figcaption');
		    var caption_text = document.createTextNode(dishlist[i].title);
		    div.id = fig.id =img.id =caption.id = dishlist[i].id;
		    //appending stuff in reverse order
		    caption.appendChild(caption_text);
		    fig.appendChild(img);
		    fig.appendChild(caption);
		    div.appendChild(fig);
		    parent.appendChild(div);

		}
    }
   
    this.update = function(message){
    	if(message == "change_guests" || message == "add_dish" || message == "remove_dish"){
    		return;
    	}
    	loading.addClass('spinner');
    	model.getAllDishes(null, null, function(dishes){
    		if(dishes.length > 0){
		 		view.createListOfAllDishes(dishes);
    		}else{
    			alert("Woops no recipe found");
    		}
		 	loading.removeClass('spinner');
		}, function(error) {
			 var parent = container[0];
			 alert("Woops no recipe found!");
			 loading.removeClass('spinner');
		});


    }


}