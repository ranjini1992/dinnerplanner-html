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
	var	total_price_text = '$ ' + total_price.toFixed(2);
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

	    for(var i = 0; i < selected_dishes.length; i++){
	    	var dish = selected_dishes[i];
	        var find_dish_name = container.find("#"+ String(dish.id))[0];
	        if(find_dish_name){
				var find_dish_price = container.find("#"+ String(dish.id*2))[0];
	        	var total = numGuests.value*dish.pricePerServing;
	        	find_dish_price.innerHTML = total.toFixed(2);
	        }
	        else{
		        var tr = tbl.insertRow();	        
		        var td_name = tr.insertCell();
		        
		        td_name.appendChild(document.createTextNode(dish.title));
		        td_name.id = dish.id;

		        var td_price = tr.insertCell();
		        var total = numGuests.value*dish.pricePerServing;
		        td_price.appendChild(document.createTextNode(total.toFixed(2))); 
		        td_price.id = dish.id*2;   
		    }      
	    }
	    total_price = model.getTotalMenuPrice().toFixed(2);
		total_price_text = '$ ' + total_price;
		totaltop.html(total_price_text);
		totalbottom.html(total_price_text);	
	}
	
}
 
