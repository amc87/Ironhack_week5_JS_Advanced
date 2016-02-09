

$(function() {
	console.log("hello");
	var myVar = 100;
	console.log(myVar);
	var title = $('.title');
	title.fadeOut();
	var p = $('<p>Hola que ase</p>');
	$('#root').append(p);
	var h3 = $('<h3>Buenaaaaas</h3>');
	$('#root').append(h3);
	$('p').addClass('my-class');
	$('h1').removeClass('title');
	
	$(".container").append("Hola que ase!");
	var pre = "<p>Using prepend</p>";
	$(".container").prepend(pre);
	$(".container").after("<p>Using after</p>");
	$(".container").before("<p>Using before</p>");

	$(".hide").on("click", function() {
		$("div, p").fadeOut();
	});
});
