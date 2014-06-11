$(document).ready(function(){

	//console initialization
	console.log('thermostat js initialized');
	
	$('#sliderElement').slider(
		{animate: true}, 
		{orientation: 'vertical'}, 
		{min:10}, 
		{max: 30}, 
		{step: 1}, 
		{value: 20}
	);

	//tempUpdate
	function tempUpdate(){
		tempSet = $('#sliderElement').slider('value');
		fTempSet = (((tempSet*9)/5)+32);
		fTempSet = Math.round(fTempSet);
		$('.cTemp').html(tempSet + '&degC');
		$('.fTemp').html(fTempSet + '&degF');
	}
	
	//ticker
	setInterval(tempUpdate, 100);
	
}); //close document ready