/** SidebarView Object constructor
 * 

 */ 
var SidebarView = function (container, model, summary_view) {

	var numGuests = document.getElementsByName("numGuests")[0];
	this.numGuests = numGuests;
	this.draftMenu = container.find("#draftMenu");
	var selected_dishes;
	var totaltop = container.find("#totalSidebarTop");
	var totalbottom = container.find("#totalSidebarBottom");
	var total_price;

	sidebar = this;

	var updateTable = function(){
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
	        td.appendChild(document.createTextNode(selected_dishes[i].name));

	        var td = tr.insertCell();
	        var dishPrice = model.getDishPrice(selected_dishes[i].id);
	        td.appendChild(document.createTextNode(dishPrice));     
	        
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

	this.refresh = function(){
		
		updateTable();

	    numGuests.addEventListener("change", function() {
			model.setNumberOfGuests(numGuests.value);
		});

		


		this.addGuest = container.find("#addGuest");
		addGuest.addEventListener("click", function() {
			var num_of_guests = model.getNumberOfGuests();
	  		model.setNumberOfGuests(num_of_guests+1);
	  		updateTable();
		});

		this.removeGuest = container.find("#removeGuest");
		removeGuest.addEventListener("click", function() {
			var num_of_guests = model.getNumberOfGuests();
			if(num_of_guests >= 1 ){
		  		model.setNumberOfGuests(num_of_guests-1);
		  	} 
		  	updateTable(); 	

		});

		

	}

	
	this.refresh();	
	
}
 
