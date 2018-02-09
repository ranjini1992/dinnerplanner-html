/** DishSearchView Object constructor
 * 

 */ 
var DishSearchView = function (container, model) {
	model.addObserver(this);

	this.search_dropdown = container.find("#search_dropdown")[0];	
	this.searchDish = container.find("#searchDish");
	this.searchText = document.getElementsByName("search_input")[0];
	
	this.update = function(){
		var dish_types = model.getDishTypeList();
	    for(var i = 0; i < dish_types.length; i++){
	       var option = document.createElement('option');
	       option.text = option.value = dish_types[i];
	       search_dropdown.add(option, 0);
	    }
	}

	this.update();

}