/** DishItemView Object constructor
 * 

 */ 
var DishItemView = function (container, model, dish_details_view) {

	var dishlist = model.getAllDishes();

    this.createListOfAllDishes = function() {


    	for(i = 0; i < dishlist.length; i++){

		    var view = document.getElementById("dishItemView");
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

		    div.addEventListener("click", function() {
				console.log(this.id);
				dish_details_view.load(this.id);
				dishSearchView.style.display = "none"
  				dishDetailsView.style.display = "block"
			});
		}
    }
    this.createListOfAllDishes();

}