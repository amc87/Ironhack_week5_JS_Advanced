

$(document).ready(function(){

		var phrases = [
		"I like pie",
		"Add some of your own phrases",
		"Hola que ase!"
		];

		var random_phr = phrases[Math.floor(Math.random()*phrases.length)];
		$(".container").prepend("<p class='phrase'>" + random_phr + "</p>");

		$(".btn-random_phrase").click(function() {
			var random_phr = phrases[Math.floor(Math.random()*phrases.length)];
			$("p").html("<p class='phrase'>" + random_phr + "</p>");
		});
		
		$(".textform").keypress(function(e) {
			if (e.keyCode === 13) {
				push_phrase($("input").val());
				$("ul").empty();
				for (var i = 0; i < phrases.length; i++) {
				$('ul').append('<li>' + phrases[i] + "<button class='eraser'> X</button>" +'</li>');
				};
				$("li").last().css( "color", "red");
			}
		});
			
		var push_phrase = function(new_phrase) {
			var new_array = phrases.push(new_phrase);
			return new_array;
		}

		$(".show-hide").click(function(){
			$("ul").toggle();
		});

		$("button").click(function(){
			
		});

});

