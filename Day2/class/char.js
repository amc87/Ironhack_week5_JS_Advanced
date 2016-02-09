$(document).ready(function() {
	function onSaveSuccess(response){
		console.log("Success!", response );
		for(var obj = 0; obj < response.length; obj++) {
			p = "<p>" + response[obj].name + "</p>";
			$(".container").append(p);
		}
	}

	function onError(error) {
		console.log("Error!!");
	}

	$.ajax({
		type: "GET",
		url: 'https://ironhack-characters.herokuapp.com/characters',
		success: onSaveSuccess,
		error: onError,
		dataType: "json"
	})

	
	$("form").on("submit", function(e){

	})



	$.ajax({



	})

// var request = $.get('https://ironhack-characters.herokuapp.com/characters');
// request.done(onSaveSuccess);
// request.fail(onError);

})