/** SidebarView Object constructor
 * 

 */ 
var SidebarView = function (container, model) {
	model.addObserver(this);

	var numGuests = document.getElementsByName("numGuests")[0];
	this.numGuests = numGuests;
	numGuests.value = model.getNumberOfGuests();

	var selected_dishes;
	var totaltop = container.find("#totalSidebarTop");
	var totalbottom = container.find("#totalSidebarBottom");
	var total_price = 0;
	var	total_price_text = 'SEK ' + total_price.toFixed(2);
	totaltop.html(total_price_text);
	totalbottom.html(total_price_text);

	sidebar = this;

	this.addGuest = container.find("#addGuest");
	this.removeGuest = container.find("#removeGuest");
	this.confirmDinner = container.find("#confirmDinner");
	var draftMenu = container.find("#draftMenu")[0];

	this.update = function(){

		numGuests.value = model.getNumberOfGuests();
		selected_dishes = model.getFullMenu();
		var tbl  = draftMenu;
		//delete existing rows in the menu because we need to update prices
		while(tbl.rows.length > 0) {
		  tbl.deleteRow(0);
		}
	    for(var i = 0; i < selected_dishes.length; i++){
	        var tr = tbl.insertRow();	        
	        var td = tr.insertCell();
	        var dish = model.getDish(selected_dishes[i]);
	        td.appendChild(document.createTextNode(dish.name));

	        var td = tr.insertCell();
	        var dishPrice = model.getDishPrice(selected_dishes[i]);
	        td.appendChild(document.createTextNode(dishPrice.toFixed(2)));     
	        
	    }
	    total_price = model.getTotalMenuPrice().toFixed(2);
		total_price_text = 'SEK ' + total_price;
		totaltop.html(total_price_text);
		totalbottom.html(total_price_text);	
	}
	
}
 
