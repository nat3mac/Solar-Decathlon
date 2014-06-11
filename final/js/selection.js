$(document).ready(function(){

	//console initialization
	console.log('selection js initialized');
		
	//click
	$('#selectThermo').click(function(){
		selectedState = 'thermo';
		$('#thermostat').fadeIn(200);
		$('#lights').fadeOut(0);
		$('#feedback').fadeOut(0);
		$('#selectThermo').css('backgroundColor', '#303030')
		$('#selectLights').css('backgroundColor', '#4d4d4d')
		$('#selectFeedback').css('backgroundColor', '#4d4d4d')
	});
	$('#selectLights').click(function(){
		selectedState = 'lights';
		$('#lights').fadeIn(200);
		$('#thermostat').fadeOut(0);
		$('#feedback').fadeOut(0);
		$('#selectLights').css('backgroundColor', '#303030')
		$('#selectThermo').css('backgroundColor', '#4d4d4d')
		$('#selectFeedback').css('backgroundColor', '#4d4d4d')
	});
	$('#selectFeedback').click(function(){
		selectedState = 'feedback';
		$('#feedback').fadeIn(200);
		$('#lights').fadeOut(0);
		$('#thermo').fadeOut(0);
		$('#selectFeedback').css('backgroundColor', '#303030')
		$('#selectLights').css('backgroundColor', '#4d4d4d')
		$('#selectThermo').css('backgroundColor', '#4d4d4d')
	});

}); //close document ready