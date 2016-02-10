$(document).ready(function(){
	var Spotify = function(){
	};


	Spotify.prototype.fetchArtist = function(artist){
		$.ajax({
			type: "GET",
			url: "https://api.spotify.com/v1/search?type=artist&query=" + artist,
			success: searchSuccess,
			error: function(){
				console.log("Error!!!");
			},
			dataType: "json"
		})
	};

	function renderArtists(artist_profile, index, ar){
		$(".artist_names").append("<li><a href='#' data-toggle='modal' data-target='#myModal' class='album' id='" + artist_profile.id + "''>" + artist_profile.name + "</a></li>");
		if (artist_profile.images.length > 0) {
			var last_image_of_profile = artist_profile.images[artist_profile.images.length-2].url;
			$(".artist_names").append("<img src='" + last_image_of_profile + "''>");
		}
	}

	Spotify.prototype.fetchAlbum = function(e){
		e.preventDefault();
		var target = e.currentTarget;
		$(".modal-body").empty();
		$.ajax({
			type: "GET",
			url: "https://api.spotify.com/v1/artists/" + target.id + "/albums",
			success: albumSuccess,
			error: function(){
				console.log("Error!!!");
			},
			dataType: "json"
		})
	}

	function renderAlbums(album_profile, index, ar){
		$(".modal-body").append("<p><a class='spec_album' id='" + album_profile.id  + "'' href='#'>" + album_profile.name + "</p>");
	}

	Spotify.prototype.fetchTracks = function(e) {
		e.preventDefault();
		var target = e.currentTarget
		$(".modal-body").empty();
		$.ajax({
			type: "GET",
			url: "https://api.spotify.com/v1/albums/" + target.id + "/tracks",
			success: tracksSuccess,
			error: function(){
				console.log("Error!!!");
			},
			dataType: "json"
		});
	}

	function renderTracks(track_profile, index, ar){
		$(".modal-body").append("<p><a class='spec_track' target=”_blank” href='" + track_profile.preview_url + "' id='" + track_profile.id  + "'' href='#'>" + track_profile.name + "</p>");
	}

	function searchSuccess(response){
		var artist_info = response.artists.items;
		artist_info.forEach(renderArtists);
	}

	Spotify.prototype.searchArtist = function(e){
		$(".artist_names").empty();
		e.preventDefault();
		var artist = $(".search_artist").val();
		this.fetchArtist(artist);
	}

	function albumSuccess(response) {
		var artist_albums = response.items;
		artist_albums.forEach(renderAlbums);
	}

	function tracksSuccess(response){
		
		var albumTracks = response.items;
		albumTracks.forEach(renderTracks);
	}

	var spoti = new Spotify();
	
	$("form").on('submit', spoti.searchArtist.bind(spoti));

	$("ul").on( "click" , ".album", spoti.fetchAlbum.bind(spoti));

	$(".modal-body").on("click", ".spec_album", spoti.fetchTracks.bind(spoti));

})