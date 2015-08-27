$(document).ready(function() {

  
	$('#submit').click(function() {
	  $.ajax({
	    url: "http://api.forismatic.com/api/1.0/",
	    jsonp: "jsonp",
	    dataType: "jsonp",
	    data: {
	      method: "getQuote",
	      lang: "en",
	      format: "jsonp"
	    },
	    success: update
	  });
	});

	function update(response) {
	  $('#response').html(JSON.stringify(response.quoteText));
	  $('#author').html("~ " + response.quoteAuthor);
	} 
  
});
