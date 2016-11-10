$(document).ready(function() {
    $('select').material_select();

	$("#submitbtn").click(function() {
    	$.post('users/', $('#form').serialize());
    	return false;
    });


  });