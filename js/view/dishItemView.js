/** DishItemView Object constructor
 * 

 */ 
var DishItemView = function (container, model) {

	var dishlist = model.getAllDishes();
	for (dish in dishlist){

	}

	/*
    var container = document.getElementById('thumbs_container'); 
    var img = document.createElement('img');
    img.src = this.src;
    img.alt = this.name;
    img.className = 'thumb';
    img.style.width = '200px';*/

    // no painting yet

    this.create = function() {
        container.appendChild(img);
    }
}