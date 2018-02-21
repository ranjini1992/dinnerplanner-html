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
	this.recipeMenu = container.find("#recipe_menu");
	var tbl = container.find("#draftMenu")[0];

	this.update = function(message){

		numGuests.value = model.getNumberOfGuests();
		selected_dishes = model.getFullMenu();

	    for(var i = 0; i < selected_dishes.length; i++){  	
	    	if(message == "remove_dish"){return;}
	    	
	    	var dish = selected_dishes[i];
	        var find_dish_name = container.find("#"+ String(dish.id)+ "_name")[0];
	        if(find_dish_name){
				var find_dish_price = container.find("#"+ String(dish.id)+ "_price")[0];
	        	var total = numGuests.value*dish.pricePerServing;
	        	find_dish_price.innerHTML = total.toFixed(2);
	        }
	        else{
		        var tr = tbl.insertRow();	
		        tr.id = String(dish.id)+ "_row";
		        var td = tr.insertCell();
		        var btn = document.createElement("button");
		        btn.className = 'btn btn-xs';
		        var span = document.createElement("span");
		        span.className = 'glyphicon glyphicon-remove';
		        btn.id = span.id = dish.id;
		        btn.appendChild(span);
		        td.appendChild(btn);

		        var td_name = tr.insertCell();
		        td_name.appendChild(document.createTextNode(dish.title));
		        td_name.id = String(dish.id)+ "_name";

		        var td_price = tr.insertCell();
		        var total = numGuests.value*dish.pricePerServing;
		        td_price.appendChild(document.createTextNode(total.toFixed(2))); 
		        td_price.id = String(dish.id)+ "_price";
		    }      
	    }
	    total_price = model.getTotalMenuPrice().toFixed(2);
		total_price_text = '$ ' + total_price;
		totaltop.html(total_price_text);
		totalbottom.html(total_price_text);	
	}
	
}
 
