/** DishItemView Object constructor
 * 

 */ 
var DishItemView = function (container, model) {
	model.addObserver(this);

	this.container = container;

    this.createListOfAllDishes = function(dishlist) {

    	var view = container[0];
		while(view.lastChild){
			view.removeChild(view.lastChild);
		}

    	for(var i = 0; i < dishlist.length; i++){

		    var div = document.createElement('div');
		    div.className ="col-md-3 gallery";
		    var fig = document.createElement('figure');
		    var img = document.createElement('img');
		    img.className = "image-box-sm";
		    img.src = 'images/' + dishlist[i].image;
		    var caption = document.createElement('figcaption');
		    var caption_text = document.createTextNode(dishlist[i].name);
		    div.id = fig.id =img.id =caption.id = dishlist[i].id;
		    //appending stuff in reverse order
		    caption.appendChild(caption_text);
		    fig.appendChild(img);
		    fig.appendChild(caption);
		    div.appendChild(fig);
		    view.appendChild(div);

		}
    }
   
    this.update = function(){
    	var all_dishes = model.getAllDishes();
    	this.createListOfAllDishes(all_dishes);
    }

    this.update();

}