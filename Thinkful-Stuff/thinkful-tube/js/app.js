$(document).ready(function(){

	$(function(){
	  $('#query').focus();
	  $('#search-form').submit(function(event){
	    event.preventDefault();
	    var searchTerm = $('#query').val();
	    getRequest(searchTerm);
	    clearInput();
	  });
	});
	
	function getRequest(searchTerm){
	  var params = {
	    q: searchTerm,
	  	key: 'AIzaSyAXlFbKbwwuOvSruAZ_q8KaEFq5SwT5PeA',
	    part: 'snippet',
	  };
	  url = 'https://www.googleapis.com/youtube/v3/search';
	  $.getJSON(url, params, function(data){
	    showResults(data.items);
	  });
	}


  function showResults(results){
	  var displayArea = $('#search-results');
	  displayArea.empty();
	  $(results).each(function(index, value) {
	    displayArea.append(formatSnippet(value));
	  });
	}

	var formatSnippet = function(vid) {
	  var html = "";
	  html+="<a target='_blank' href='https://www.youtube.com/watch?v="+ vid.id.videoId + "'>"
	  html+="<img src='" +vid.snippet.thumbnails.medium.url +"'/>";
	  html+="</a>";
	  html+="<h3>"+vid.snippet.title+"</h3>";
	  html+="<p>"+vid.snippet.description+"</p>";
	  return html;
	}

	function clearInput(){
	  $('#query').val('');
	}

});