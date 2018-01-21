$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	// And create the instance of ExampleView
	var exampleView = new ExampleView($("#exampleView"));
	var summaryView = new SummaryView($("#summaryView"), model);
	var sidebarView = new SidebarView($("#sidebarView"), model, summaryView);
	var dishDetailsView = new DishDetailsView($("#dishDetailsView"), model, sidebarView);
	var dishItemView = new DishItemView($("#dishItemView"), model, dishDetailsView);
	var dishSearchView = new DishSearchView($("#dishSearchView"), model, dishItemView);
	var printView = new PrintView($("#printView"), model);

	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see exampleView.js).
	 */

});