$(document).ready(function() {
	$("#submitbtn").click(function() {
	    	$.post('messages/', $('#form').serialize());
	    	return false;
	  });
});
