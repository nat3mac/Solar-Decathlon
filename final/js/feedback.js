$(document).ready(function(){

	//console initialization
	console.log('feedback js initialized');

	var percentage = 64;
	$('#percentage').html(percentage + '%');

	window.setInterval(deplete, 10000);

	function deplete() {
		$('#percentage').val( function(i, percentage) {return --percentage;}
};

}); //close document ready