$(function(){

	var Search = window.Spotify.Search = function(e){
		
		this.search = e;
		this.fetchSearch(e);
	};

	Search.prototype.fetchSearch = function(e){
		var searchString = $("#artist").val();
		searchUrl = "https://api.spotify.com/v1/search?q=" + searchString + "&type=track&limit=20"
		var promise = $.get(searchUrl);
		promise.done(this.fetchSongInfo.bind(this));
	}

	Search.prototype.fetchSongInfo = function(response){
		var firstSong = response.tracks.items[0];
		var songTitle = firstSong.name;
		var artist = firstSong.artists[0].name;
		var coverUrl = firstSong.album.images[0].url;
		var previewUrl = response.tracks.items[0].preview_url;
		var artistId = response.tracks.items[0].artists[0].id
		
		this.render(songTitle, artist,coverUrl, previewUrl, artistId);
		
	}

	Search.prototype.render = function(songTitle, artist,coverUrl, previewUrl, artistId){
		$(".metadata").empty();
		$(".cover").empty();
		$(".modal-body").empty();
		$("audio").removeAttr("src");
		$(".see_more").remove();
		$(".metadata").append("<p class='title'>" + songTitle + "</p>");
		$(".metadata").append("<a href='#'><p class='author' id='" + artistId + "'>" + artist + "</p></a>");
		$(".metadata").append("<div class='seekbar'><progress value='0' max='30'></progress></div>");
		$(".cover").append("<img src='" + coverUrl + "'>");
		$("audio").attr("src", previewUrl);
		$(".btn-play").removeClass("disabled");
		$(".form-search").after("<button class='see_more'>See more results</button>")
		
		$(".author").on("click", function(e){
			
			e.preventDefault();
			var newArtist = new Spotify.Artist(e);
		});

		
	}

});