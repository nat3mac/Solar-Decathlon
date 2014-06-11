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
	
	//readingUpdate
	function readingUpdate(){
		if (tempReading < tempSet){
			tempReading++;
		}else if (tempReading > tempSet){
			tempReading--;
		}else if (tempReading == tempSet){
			//do nothing
		};
		fTempReading = (((tempReading*9)/5)+32);
		fTempReading = Math.round(fTempReading);
		$('.cRead').html(tempReading + '&degC');
		$('.fRead').html(fTempReading + '&degF');
	}
	
	//initial tick
	readingUpdate();
	
	//ticker
	setInterval(tempUpdate, 100);
	setInterval(readingUpdate, 5000);
	
}); //close document ready