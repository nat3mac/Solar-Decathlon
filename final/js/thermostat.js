$(document).ready(function(){

	//console initialization
	console.log('thermostat js initialized');
	
	$('#sliderElement').slider(
		{animate: true}, 
		{orientation: 'vertical'}, 
		{min:0}, 
		{max: 100}, 
		{step: 1}, 
		{value: 50}
	);

}); //close document ready