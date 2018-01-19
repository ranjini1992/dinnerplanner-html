/** DishSearchView Object constructor
 * 

 */ 
var DishSearchView = function (container, model) {

	this.dropdown = container.find("#dropdown");
	
	function loadDropDownList(){
		var dish_types = model.getDishTypeList();
	    for(var i = 0; i < dish_types.length; i++){
	       var option = document.createElement('option');
	       option.text = option.value = dish_types[i];
	       dropdown.add(option, 0);
	    }
	}
	loadDropDownList();
}