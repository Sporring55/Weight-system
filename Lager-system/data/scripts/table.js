
/*This code i used to sort mysql data.
The code sorts data and outputs the latest data sorted after a location/date.
It has history properties wich saves the data, and can be retrived by clicking on a table row.
Fell free to ask "Threemusketeerz", "Sporring55" if you have any questions about the code*/


// $(document).ready(function(){	
$.getJSON("scripts/results.json", function(data) {
	var finArr = jsonSorter(data);
	// console.log(finArr);
	htmlTable(".container", finArr);
	$("table").addClass("table table-responsive table-striped table-hover");
	
});
/*All credit to agershun for the htmlTable() function,  
*2nd answer on http://stackoverflow.com/questions/27681838/create-table-with-javascript-array-and-object
*/

function htmlTable(selector, data, columns) {
	var sel = document.querySelector(selector);
	var tbe = document.createElement('table');
	tbe.id = "myTable";
	var thead = document.createElement('thead');
	var tre = document.createElement('tr');
	var tbody = document.createElement('tbody');
	tbody.className = "myTable";
	var Class = "clicked";

	if(!sel) {
		throw new Error('Selected HTML element is not found');
	};	
	// console.log(data);
	if((!columns) || columns.length == 0) {
        columns = Object.keys(data[0]);
	}
	tbe.appendChild(thead);
    for (var i = 0; i < columns.length; i++){
        var the = document.createElement('th');
		the.className = "head";
		
		if (columns[i] !== "Historik"){
        	the.textContent = columns[i];
		}
        tre.appendChild(the);
    }
    thead.appendChild(tre);

	tbe.appendChild(tbody);
	for (var j = 0; j < data.length; j++){
		var d = data[j]["Historik"];
		var tre = document.createElement('tr');
		tre.className = "hidden" + j;
		for (var i = 0; i < columns.length - 1; i++){
			var the = document.createElement('td');
			the.textContent = data[j][columns[i]];
			tre.appendChild(the);
		}
		tbody.appendChild(tre);
		//Own code for Historik
		if(columns[i] === "Historik" && data[j][columns[i]] !== undefined) {
			for (var k = 0; k < d.length; k++)  {
				var div = "<div></div>";				
				var subtr = document.createElement('tr');
				subtr.id = "hidden" + j;
				for(var z = 0; z < columns.length; z++) {
					var sub = document.createElement('td');
					sub.textContent = d[k][columns[z]];
					sub.id = 'sub' + j;
			
					subtr.appendChild(sub);	
			}			
				tbody.appendChild(subtr);

			}
		}	
	};
	// emptyDOMChildren(sel);
	sel.appendChild(tbe);	
	ShowMore();
	
};






