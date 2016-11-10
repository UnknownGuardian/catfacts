$(document).ready(function() {

  $('select').material_select();

	$("#submitbtn").click(function() {
    	$.post('users/', $('#form').serialize());
    	return false;
  });

  var songs = ["https://www.youtube.com/embed/k_5zELmun9E?autoplay=1",
    "https://www.youtube.com/embed/a5JySIRcPFs?autoplay=1"
  ];

  var min = 0;
  var max = songs.length -1;

  min = Math.ceil(min);
  max = Math.floor(max);
  var rand = Math.floor(Math.random() * (max - min + 1)) + min;

  $('#video').attr("src", songs[rand]);

  console.log(songs[rand]);

});
