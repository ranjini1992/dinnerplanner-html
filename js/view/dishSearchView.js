/** DishSearchView Object constructor
 * 

 */ 
var DishSearchView = function (container, model, dish_item_view) {

	this.search_dropdown = container.find("#search_dropdown");
	
	function loadDropDownList(){
		var dish_types = model.getDishTypeList();
	    for(var i = 0; i < dish_types.length; i++){
	       var option = document.createElement('option');
	       option.text = option.value = dish_types[i];
	       search_dropdown.add(option, 0);
	    }
	}
	loadDropDownList();

	this.searchDish = container.find("#searchDish");
	searchDish.addEventListener("click", function() {
		var search_input = document.getElementsByName("search_input")[0].value;
		var search_category = search_dropdown.value;

		var filtered_dishes = model.getAllDishes(search_category,search_input);
		dish_item_view.createListOfAllDishes(filtered_dishes);

	});
}