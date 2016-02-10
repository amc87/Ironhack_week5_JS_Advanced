$(document).ready(function(){

	$("form").submit(function(e) {
		$.ajax({
			type: "GET",
			url: "https://api.spotify.com/v1/search?type=artist&query=" + $(".search_artist").val(),
			success: searchSuccess,
			error: function(){
				console.log("Error!!!");
			},
			dataType: "json"
		})
		e.preventDefault();
	});

	function showNames(artist_profile, index, ar){
		

		$(".artist_names").append("<li><a href='#' data-toggle='modal' data-target='#myModal' class='album' id='" + artist_profile.id + "''>" + artist_profile.name + "</a></li>");
		if (artist_profile.images.length > 0) {
			var last_image_of_profile = artist_profile.images[artist_profile.images.length-1].url;
			$(".artist_names").append("<img src='" + last_image_of_profile + "''>");
		}
	}

	$("ul").on( "click", ".album", function(e) {
		$(".modal-body").empty();
			$.ajax({
			type: "GET",
			url: "https://api.spotify.com/v1/artists/" + $(this).attr("id") + "/albums",
			success: albumSuccess,
			error: function(){
				console.log("Error!!!");
			},
			dataType: "json"
			})
		e.preventDefault();
	})

	function showAlbums(album_profile, index, ar){

		$(".modal-body").append("<p><a href='" + album_profile.external_urls.spotify + "' target='_blank'>" + album_profile.name + "</p>");

	}

	function searchSuccess(response){
		var artist_info = response.artists.items;
		artist_info.forEach(showNames);
	}

	function albumSuccess(response) {
		var artist_albums = response.items;
		artist_albums.forEach(showAlbums);
	}

// https://api.spotify.com/v1/search?type=album&query=Coldplay

})