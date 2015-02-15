$(document).ready(function() {

//ADDING ITEMS WHEN BUTTON IS PRESSED
	$('#submit').click(function(){
		var txtbox = document.getElementById('input');
		var txtval = txtbox.value;
		event.preventDefault();

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
	//SORTABLE LIST ITEMS?  HOW DOES THIS WORK?
	//$('#list').sortable({ axis: "y" });


//CROSSING OFF ITEMS WHEN CLICKED
  $('#list').on('click', 'li', function(){
  	console.log("clicked")
  	$(this).toggleClass('strike');
  	$(this).children('.check').toggleClass('Checked');
  // fires when any LIs are clicked on
  // including LIs that aren't on the page when it is initially loaded
	})
//USING ENTER TO ENTER AN ITEM
$('#input').keyup(function(event){
		if(event.keyCode == 13) {
			event.preventDefault();
			$('#submit').click();
		};
	});	



});