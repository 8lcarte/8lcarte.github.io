$(document).ready(function() {

//ADDING ITEMS WHEN BUTTON IS PRESSED
	$('#submit').click(function(){
		console.log("submit clicked")
		var txtbox = document.getElementById('input');
		var txtval = txtbox.value;
		event.preventDefault();

		if(!$.trim($('#item').val())) {
			$('<li class="items"></li>').appendTo('#list').html('<div class="check"></div><span class="item">' + txtval +'</span><img class="delete" src="images/delete.png">');

		document.getElementById('input').value = '';
		};
	});

//CROSSING OFF ITEMS WHEN CLICKED
  $('#list').on('click', 'li', function(){
  	console.log("clicked")
  	$(this).toggleClass('strike');
  	$(this).children('.check').toggleClass('Checked');
  // fires when any LIs are clicked on
  // including LIs that aren't on the page when it is initially loaded
	})


});