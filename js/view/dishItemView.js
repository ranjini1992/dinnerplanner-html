/** DishItemView Object constructor
 * 

 */ 
var DishItemView = function (container, model) {

	var dishlist = model.getAllDishes();

    this.createListOfAllDishes = function() {


    	for(i = 0; i < dishlist.length; i++){

		    var view = document.getElementById("dishItemView");
		    var div = document.createElement('div');
		    div.className ="col-md-3 gallery";
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
    this.createListOfAllDishes();
}