$(function () {
  var Spotify = function () {
    this.artists = [];
  };

  Spotify.prototype.fetchArtist = function(artist) {
    $.ajax({
      type: 'GET',
      url: 'https://api.spotify.com/v1/search?type=artist&query=' + artist,
      success: this.renderArtists,
      error: function () {
        console.log('Some error!');
      }
    });
  };

  Spotify.prototype.renderArtists = function (response) {
    debugger
  };

  Spotify.prototype.searchArtist = function (e) {
    e.preventDefault();
    var artist = $('[name=name]').val();
    this.fetchArtist(artist);
  };

  var spoti = new Spotify();

  $('form').on('submit', spoti.searchArtist.bind(spoti));
})
