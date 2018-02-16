//DinnerModel Object constructor
var DinnerModel = function() {
 
	//TODO Lab 1 implement the data structure that will hold number of guest
	// and selected dishes for the dinner menu
	var menu = {
		num_guests: 1,
		selected_dishes: []
	};

	var observers = [];
	var dishes;
	var dish_types = ["main course", "side dish", "dessert", "appetizer", "salad", "bread", "breakfast", "soup", "beverage", "sauce", "drink"];


	var API_KEY = "Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB";

	this.addObserver = function(observer) { 
		observers.push(observer);
	}

	var notifyObservers = function() { 
		for(var i = 0; i < observers.length; i++){	
            observers[i].update();
        }
	}

	this.setNumberOfGuests = function(num) {
		//TODO Lab 1
		menu.num_guests = num;
		notifyObservers();
	}
	
	this.getNumberOfGuests = function() {
		//TODO Lab 1
		return menu.num_guests;
	}

	//Returns the dish that is on the menu for selected type 
	this.getSelectedDish = function(type) {
		//TODO Lab 1
		for(var i = 0; i < menu.selected_dishes.length; i++){
			if(menu.selected_dishes[i].type == type) {
				return menu.selected_dishes[i];
			}
		}
	}

	//Returns all the dishes on the menu.
	this.getFullMenu = function() {
		//TODO Lab 1
		return menu.selected_dishes;
	}

	//Returns all ingredients for all the dishes on the menu.
	this.getAllIngredients = function() {
		//TODO Lab 1
		var ingredients = []
		for(var i = 0; i < dishes.length; i++){
			for (var j = 0; j < dishes[i].ingredients.length; j++){
				ingredients.push(dishes[i].ingredients[j]);
			}
		}
		return ingredients;
	}

	//function that returns a dish of specific ID
	this.getDish = function(id, callback, errorCallback) {
	  	var GET_RECIPE_INFO = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/"+ id +"/information";
	 	$.ajax( {
		   url: GET_RECIPE_INFO,
		   type: "GET",
           dataType: 'json',
		   headers: {
		     'X-Mashape-Key': API_KEY
		   },
		   success: function(data) {
		   	 dish = data;
		     callback(dish);
		   },
		   error: function(error) {
		     errorCallback(error);
		   }
	 	}) 
	}

	//Returns the total price of the menu (all the ingredients multiplied by number of guests).
	this.getTotalMenuPrice = function() {
		//TODO Lab 1
		var total_menu_price = 0;
		for(var i = 0; i < menu.selected_dishes.length; i++){
			var dish = menu.selected_dishes[i];
			total_menu_price += dish.pricePerServing * menu.num_guests;
		}
		return total_menu_price;

	}

	this.getDishTypeList = function(){
		return dish_types;
	}

	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.
	this.addDishToMenu = function(selectedDish) {
		//TODO Lab 1
		menu.selected_dishes.push(selectedDish);
		notifyObservers();
	}

	//Removes dish from menu
	this.removeDishFromMenu = function(id) {
		//TODO Lab 1
		for (var key = menu.selected_dishes.length - 1; key >= 0; key --) {
    		if (menu.selected_dishes[key].id === id) {
        		menu.selected_dishes.splice(key, 1);
        		break;       
    		}
		}
		notifyObservers(); 
	}

	this.getAllDishes = function (query, type, callback, errorCallback) {
		var GET_RECIPES_URL = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search";
		if(type && type.indexOf("All") == -1){
			type = type.replace(/ /g,"+");
			GET_RECIPES_URL += "?type="+ type;
			if(query){
				query = query.replace(/ /g,"+");
				GET_RECIPES_URL += "&query=" + query;
			}
		}
		else if(query){
			query = query.replace(/ /g,"+");
			GET_RECIPES_URL += "?query=" + query;
		}
		$.ajax( {
		   url: GET_RECIPES_URL,
		   type: "GET",
           dataType: 'json',
		   headers: {
		     'X-Mashape-Key': API_KEY
		   },
		   success: function(data) {
		   	 dishes = data.results;
		     callback(dishes);
		   },
		   error: function(error) {
		     errorCallback(error);
		   }
	 	}) 
	}

}
