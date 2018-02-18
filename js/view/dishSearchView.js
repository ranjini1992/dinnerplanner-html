/** DishSearchView Object constructor
 
 * Not adding this view as an observer since this view has no dynamic data

 */ 
var DishSearchView = function (container, model) {

	this.search_dropdown = container.find("#search_dropdown")[0];	
	this.searchDish = container.find("#searchDish");
	this.searchText = document.getElementsByName("search_input")[0];
	this.loading = container.find("#loading");

	var dish_types = model.getDishTypeList();
	for(var i = 0; i < dish_types.length; i++){
       var option = document.createElement('option');
       option.text = option.value = dish_types[i];
       search_dropdown.add(option, 0);
	}

}