/** SidebarView Object constructor
 * 

 */ 
var SidebarView = function (container, model) {

	this.confirmDinner = container.find("#confirmDinner");
		confirmDinner.addEventListener("click", function() {
	  		sidebarView.style.display = "none"
	  		dishSearchView.style.display = "none"
	});




	this.draftMenu = container.find("#draftMenu");

	function loadMenu(){
	    tbl  = draftMenu;
	    for(var i = 0; i < 3; i++){
	        var tr = tbl.insertRow();
	        for(var j = 0; j < 2; j++){
	            var td = tr.insertCell();
	            td.appendChild(document.createTextNode('Cell'));
	            
	        }
	    }
	}
	loadMenu();

	var numGuests = document.getElementsByName("numGuests")[0];
	this.numGuests = numGuests;
	numGuests.value = model.getNumberOfGuests();

	numGuests.addEventListener("change", function() {
		model.setNumberOfGuests(numGuests.value);
	});
	
}
 
