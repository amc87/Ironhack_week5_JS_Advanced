$(function(){

	var Artist = window.Spotify.Artist = function(e){
		this.searchArtist(e);
		$(".js-modal").modal("show");
	}

	Artist.prototype.searchArtist = function(e){
		var artistId = e.currentTarget.id;
		var searchArtistUrl = "https://api.spotify.com/v1/artists/" + artistId;
		var promise = $.get(searchArtistUrl);
		promise.done(this.fetchArtistInfo.bind(this));
	}

	Artist.prototype.fetchArtistInfo = function(response){
		
		var artistName = response.name
		var artistSmallImageUrl = response.images[response.images.length - 1].url;
		var artistFollowers = response.followers.total;
		var artistGenres = response.genres;
		var artistPopularity = response.popularity;


		this.render(artistName, artistSmallImageUrl, artistFollowers, artistGenres, artistPopularity)
	}

	Artist.prototype.artistGenresRender = function(element, index, array){
		
		$(".modal-body ul").append("<li>" + element + "</li>");
	}

	Artist.prototype.render = function(artistName, artistSmallImageUrl, artistFollowers, artistGenres, artistPopularity){
		
		$(".modal-header h2").html(artistName);
		
		$(".modal-body").append("<img src='" + artistSmallImageUrl + "''>");
		$(".modal-body").append("<p>This artist has " + artistFollowers + " followers.</p>");
		$(".modal-body").append("<p>This artist has a " + artistPopularity + " % of popularity.</p>");

		if (artistGenres.length > 0){
			$(".modal-body").append("<p>This artist has this different genres:</p>");
			$(".modal-body").append("<ul class='artist_genres'></ul>");
			artistGenres.forEach(this.artistGenresRender);
		}

	}




});