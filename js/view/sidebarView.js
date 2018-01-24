/** SidebarView Object constructor
 * 

 */ 
var SidebarView = function (container, model, summary_view) {

	var numGuests = document.getElementsByName("numGuests")[0];
	this.numGuests = numGuests;
	numGuests.value = model.getNumberOfGuests();

	var selected_dishes;
	var totaltop = container.find("#totalSidebarTop");
	var totalbottom = container.find("#totalSidebarBottom");
	var total_price;

	sidebar = this;

	this.updateTable = function(){
		var draftMenu = document.getElementById("draftMenu");

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
	    var total_price = model.getTotalMenuPrice().toFixed(2);
		total_price_text = 'SEK ' + total_price;
		totaltop.html(total_price_text);
		totalbottom.html(total_price_text);
		
		this.confirmDinner = document.getElementById("confirmDinner");
		confirmDinner.addEventListener("click", function() {
			if(total_price != 0){

		  		sidebarView.style.display = "none";
		  		dishSearchView.style.display = "none";
		  		dishDetailsView.style.display = "none";
		  		summary_view.loadsummary();
		  		summaryView.style.display = "block";
		  	}
		});
		
	}

	numGuests.addEventListener("change", function() {
		model.setNumberOfGuests(numGuests.value);
	});
		

	this.addGuest = container.find("#addGuest");
	addGuest.addEventListener("click", function() {
		var num_of_guests = model.getNumberOfGuests();
  		model.setNumberOfGuests(num_of_guests+1);
  		sidebar.updateTable();
	});

	this.removeGuest = container.find("#removeGuest");
	removeGuest.addEventListener("click", function() {
		var num_of_guests = model.getNumberOfGuests();
		if(num_of_guests >= 1 ){
	  		model.setNumberOfGuests(num_of_guests-1);
	  	} 
	  	sidebar.updateTable(); 	

	});
	
}
 
