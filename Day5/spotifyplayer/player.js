$(function(){

	var Player = window.Spotify.Player = function(e){
		if ($(".btn-play").hasClass("playing")) {
			this.stopPlaying();
		} else {
			this.play();
		}
	}

	Player.prototype.play = function(){
		$('audio').on('timeupdate', this.printTime);
		$(".btn-play").addClass("playing");
		$('audio').trigger('play');

	}

	Player.prototype.stopPlaying = function(){
		$(".btn-play").removeClass("playing");
		$('audio').trigger('pause');
	}

	Player.prototype.printTime = function() {
		var current = $('audio').prop('currentTime');
		$("progress").attr("value", current);
	}

});