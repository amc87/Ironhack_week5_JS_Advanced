if (typeof window.Spotify === 'undefined') {
	window.Spotify = {};
}
Spotify.init = function() {
	$(".btn-play").on("click", function(e){
		e.preventDefault();
		var newPlayer = new Spotify.Player(e);
	});

	$("form").on("submit", function(e){
		e.preventDefault();
		var newSearch = new Spotify.Search(e);
	});
}

$(document).on("ready",	Spotify.init);