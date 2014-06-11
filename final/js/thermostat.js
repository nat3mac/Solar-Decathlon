$(document).ready(function(){

	//console initialization
	console.log('thermostat js initialized');
	
	//lookup table for color
	var colorLookup = ['#3daefd','#43b2f5','#49b5ec','#50bae4','#56bddc','#5cc0d3','#62c4cb','#69c9c3','#6fccbb','#74cfb3','#7ad3aa','#84d5a5','#8ed89f','#98db9b','#a1dd95','#abdf90','#b6e28b','#bee485','#c8e680','#d2e97a','#dcec75']
	var colorHex;
	
	//slider
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
	
	//colorUpdate
	function colorUpdate(){
		colorValue=(tempSet-10);
		colorHex = colorLookup[colorValue];
		$('#setReadOutFar h6').css('color', colorHex);
		$('#setReadOutCel h6').css('color', colorHex);
		$('#setReadOutFar p').css('color', colorHex);
		$('#setReadOutFar p').css('color', colorHex);
	};
	
	//initial tick
	readingUpdate();
	colorUpdate();
	
	//ticker
	setInterval(tempUpdate, 100);
	setInterval(colorUpdate, 100);
	setInterval(readingUpdate, 5000);
	
}); //close document ready