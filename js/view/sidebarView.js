/** SidebarView Object constructor
 * 

 */ 
var SidebarView = function (container, model) {

	var numGuests = document.getElementsByName("numGuests")[0];
	this.numGuests = numGuests;
	this.draftMenu = container.find("#draftMenu");

	sidebar = this;

	this.refresh = function(){
		numGuests.value = model.getNumberOfGuests();
		var selected_dishes = model.getFullMenu();
		var tbl  = draftMenu;
		//delete existing rows in the menu because we need to update prices
		while(tbl.rows.length > 1) {
		  tbl.deleteRow(1);
		}
	    for(var i = 0; i < selected_dishes.length; i++){
	        var tr = tbl.insertRow();	        
	        var td = tr.insertCell();
	        td.appendChild(document.createTextNode(selected_dishes[i].name));

	        var td = tr.insertCell();
	        var dishPrice = model.getDishPrice(selected_dishes[i].id);
	        td.appendChild(document.createTextNode(dishPrice));     
	        
	    }
	}

	numGuests.addEventListener("change", function() {
		model.setNumberOfGuests(numGuests.value);
	});

	this.confirmDinner = container.find("#confirmDinner");
	confirmDinner.addEventListener("click", function() {
  		sidebarView.style.display = "none"
  		dishSearchView.style.display = "none"
  		dishDetailsView.style.display = "none"
  		summaryView.style.display = "block"
	});

	this.addGuest = container.find("#addGuest");
	addGuest.addEventListener("click", function() {
		var num_of_guests = model.getNumberOfGuests();
  		model.setNumberOfGuests(num_of_guests+1);
  		sidebar.refresh();
	});

	this.removeGuest = container.find("#removeGuest");
	removeGuest.addEventListener("click", function() {
		var num_of_guests = model.getNumberOfGuests();
		if(num_of_guests >= 1 ){
	  		model.setNumberOfGuests(num_of_guests-1);
	  	}  	
	  	sidebar.refresh();

	});

	this.refresh();	
	
}
 
