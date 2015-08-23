$(document).ready(function() {
  $('.ryu-container').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
    $('.ryu-ready').hide();
		$('.ryu-still').show();
  })
  .mousedown(function() {
    playHadouken();
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show()
  	.animate(
    	{'left': '1000px'},
    	500,
    	function() {
      	$(this).hide();
      	$(this).css('left', '539px');
    	}
  	);
	})
  .mouseup(function() {
    $('.ryu-throwing').hide();
  	$('.ryu-ready').show();
  });
  $(document).keydown(function(e) {
    if (e.which == 88) {      
      $('.ryu').hide();
      $('.ryu-cool').show();
    }
  })
	.keyup(function(e) {
		if (e.which == 88) {
			$('.ryu-still').show();
	  	$('.ryu-cool').hide();
		}
	});
})
function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}