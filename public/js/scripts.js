
  var degrees = 90;

function rotateCrazyCat(){

  $(".crazycat").animate({  borderSpacing: degrees }, {
    step: function(now,fx) {
      $(this).css('transform','rotate('+now+'deg)');
    },
    duration:'500',
    complete: function(){
      degrees += 90;
      if(degrees > 360 ){
        degrees = 0;
      }
      console.log(degrees);
      rotateCrazyCat();
    }
  },'linear');
}

function crazycat(){

  var width = $("body").width();
  var height = $("body").height();

  $(".crazycat").animate({
    bottom: "+="+(height-200)
  }, 5000, function() {
    $(".crazycat").animate({
      right: "+="+(width-200)
    }, 5000, function() {
      // $(".crazycat").css("top","");
      // $(".crazycat").css("bottom",$(".crazycat").css("bottom"));
      $(".crazycat").animate({
        bottom: "-="+(height-200)
      }, 5000, function() {
        // $(".crazycat").css("left","");
        $(".crazycat").animate({
          right: "-="+(width-200)
        }, 5000, function() {
          crazycat();
        });
      });
    });
  });
}

$(document).ready(function() {

  rotateCrazyCat();
  crazycat();

  $('select').material_select();

	$("#submitbtn").click(function() {
    	$.post('users/', $('#form').serialize());
      $('#form').trigger('reset')
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
