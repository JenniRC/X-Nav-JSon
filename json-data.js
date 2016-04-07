// Get some JSON text via Ajax, and write it to the p HTML page
// Get new text when clicking on "third"
//
$(document).ready(function() {

	var name = function(tam){
	return Math.round((tam-1)*(Math.random()));
	};

    $("#clicker").click(function(){
	$.getJSON("json-data.json", function(data) {
	    $('#test').after('<p>' + data.begin[name(data.begin.length)] + data.middle[name(data.begin.length)] + data.end[name(data.begin.length)] + '</p>');
	});
    });
});

