$(document).ready(function(){

	//console initialization
	console.log('feedback js initialized');

	var percentage = 64;
	updatePercent();
	
	function updatePercent() {
		$('#percentage').html(percentage + '%');
	}

	window.setInterval(deplete, 49382);
	window.setInterval(increase, 76947);

	function deplete() {
		--percentage;
		updatePercent();
	};
	function increase() {
		++percentage;
		updatePercent();
	};

}); //close document ready