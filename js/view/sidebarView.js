/** SidebarView Object constructor
 * 

 */ 
var SidebarView = function (container, model) {

	var numGuests = document.getElementsByName("numGuests")[0];
	this.numGuests = numGuests;
	numGuests.value = model.getNumberOfGuests();

	numGuests.addEventListener("change", function() {
		model.setNumberOfGuests(numGuests.value);
	});

	this.confirmDinner = container.find("#confirmDinner");
		confirmDinner.addEventListener("click", function() {
	  		sidebarView.style.display = "none"
	  		dishSearchView.style.display = "none"
	});

	this.addGuest = container.find("#addGuest");
		addGuest.addEventListener("click", function() {
			var num_of_guests = model.getNumberOfGuests();
	  		model.setNumberOfGuests(num_of_guests+1);
	  		numGuests.value = model.getNumberOfGuests();

	});

	this.removeGuest = container.find("#removeGuest");
		removeGuest.addEventListener("click", function() {
			var num_of_guests = model.getNumberOfGuests();
			if(num_of_guests >= 1 ){
		  		model.setNumberOfGuests(num_of_guests-1);
		  		numGuests.value = model.getNumberOfGuests();
		  	}

	});




	this.draftMenu = container.find("#draftMenu");
	this.selected_dishes = model.getFullMenu();

	    for(var i = 0; i < this.selected_dishes.length; i++){
	    	var tbl  = draftMenu;
	        var tr = tbl.insertRow();
	        
	        var td = tr.insertCell();
	        td.appendChild(document.createTextNode(this.selected_dishes[i].name));

	        var td = tr.insertCell();
	        console.log(this.selected_dishes[i].id);
	        var dishPrice = model.getDishPrice(this.selected_dishes[i].id);
	        td.appendChild(document.createTextNode(dishPrice));     
	        
	    }
	
	
}
 
