$(document).ready(function(){

	var Mapping = function(){
		this.createMap();
	}

	Mapping.prototype.createMap = function(){
		
		for (var i = 0; i <= 99; i++) {
			$("#map").append("<div class='square' id='" + i + "'></div>");
		}
	};

	var Snake = function(yx){
		this.yx = yx;

		this.initialPosition(this.yx);
	}




	Snake.prototype.initialPosition = function(yx){
		var positionId = "#" + yx;
		
		$(positionId).addClass("active-head");
		for (var i = yx - 1; i >= yx - 3; i--) {
			var id = "#" + i;
			$(id).addClass("active");
		}
	}

	var newMap = new Mapping();
	var anaconda = new Snake(55);
	

});