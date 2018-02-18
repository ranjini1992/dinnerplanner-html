$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	var exampleView = new ExampleView($("#exampleView"), model);
	var printView = new PrintView($("#printView"), model);
	var summaryView = new SummaryView($("#summaryView"), model);
	var sidebarView = new SidebarView($("#sidebarView"), model);
	var dishDetailsView = new DishDetailsView($("#dishDetailsView"), model);
	var dishItemView = new DishItemView($("#dishItemView"), model);
	var dishSearchView = new DishSearchView($("#dishSearchView"), model);

	var exampleController = new ExampleController(exampleView, this);
	var sidebarController = new SidebarController(sidebarView, model, this);
	var dishSearchController = new DishSearchController(dishSearchView, model, this);
	var printController = new PrintController(printView, model, this);
	var summaryController = new SummaryController(summaryView, model, this);
	var dishDetailsController = new DishDetailsController(dishDetailsView, model, this);
	var dishItemController = new DishItemController(dishItemView, model, this);

	this.route = function(action){
		switch (action) {
 		case 'createDinner':
			document.getElementById("exampleView").style.display = "none"; 
			document.getElementById("sidebarView").style.display = "block";
			document.getElementById("dishSearchView").style.display = "block";
			document.getElementById("dishItemView").style.display = "block";
    		dishItemView.update();
			break;
		
		case 'confirmDinner':
			document.getElementById("sidebarView").style.display = "none";
	  		document.getElementById("dishSearchView").style.display = "none";
	  		document.getElementById("dishDetailsView").style.display = "none";
	  		document.getElementById("summaryView").style.display = "block";
			break;

		case 'backtoEdit':
			document.getElementById("sidebarView").style.display = "block";
  			document.getElementById("dishSearchView").style.display = "block";
  			document.getElementById("summaryView").style.display = "none";
			break;

		case 'showDishDetails':
			document.getElementById("dishSearchView").style.display = "none"
  			document.getElementById("dishDetailsView").style.display = "block"
  			break;

  		case 'showDishItems':
  			document.getElementById("dishSearchView").style.display = "block"
  			document.getElementById("dishDetailsView").style.display = "none"
  			break;

  		case 'addDish':
	  		document.getElementById("dishSearchView").style.display = "block"
	  		document.getElementById("dishDetailsView").style.display = "none"
  			break;

		case 'printRecipe':
			document.getElementById("printView").style.display = "block"
			document.getElementById("summaryView").style.display = "none"
			break;

		case 'backtoSummary':
			document.getElementById("printView").style.display = "none"
  			document.getElementById("summaryView").style.display = "block"
			break;
		}
	}

	this.reloadDishItemView = function(dishlist){
		dishItemView.createListOfAllDishes(dishlist);
	}

	this.reloadDishDetailsView = function(id){
		dishDetailsView.load(id);
	}

	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see exampleView.js).
	 */

});