$(document).ready(function() {

//ADDING ITEMS WHEN BUTTON IS PRESSED
	$('#submit').click(function(e){
		var txtbox = document.getElementById('input');
		var txtval = txtbox.value;
		e.preventDefault();

		if(!$.trim($('#item').val())) {
			$('<li class="items"></li>').appendTo('#list').html('<div class="check"></div><span class="item">' + txtval +'</span><img class="delete" src="images/delete.png">');

		document.getElementById('input').value = '';
		};
	});
//DELETING ITEMS OFF THE LIST
	$('#list').on('click', '.delete', function(e){
		e.preventDefault(); 
		$(this).parent().remove()
	});
//SORTABLE LIST 
	$('#list').sortable({ 
		options: {
		axis: "y", 
		distance: 500 //why isn't my second option working
	}
	});


//CROSSING OFF ITEMS WHEN CLICKED
  $('#list').on('click', 'li', function(){
  	$(this).toggleClass('strike');
  	$(this).children('.check').toggleClass('Checked');
  // fires when any LIs are clicked on
  // including LIs that aren't on the page when it is initially loaded
	})
//USING ENTER TO ENTER AN ITEM
$('#input').keyup(function(e){
		if(e.keyCode == 13) {
			e.preventDefault();
			$('#submit').click();
		};
	});	



});