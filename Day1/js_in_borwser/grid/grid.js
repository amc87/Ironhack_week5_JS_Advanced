$(function() {



	

	for (i = 0; i < 50; i++) {
		var div = $('<div class="cell"></div>');
		$('.container').append(div);

		if (i % 2 === 0) {
			$(div).addClass("active");
			
		}
	}

	

});