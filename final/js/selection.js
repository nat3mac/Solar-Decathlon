$(document).ready(function(){

	//console initialization
	console.log('selection js initialized');
		
	//click
	$('#selectThermo').click(function(){
		$('#thermostat').fadeIn(200);
		$('#lights').fadeOut(0);
		$('#feedback').fadeOut(0);
		$('#selectThermo').css('backgroundColor', '#303030')
		$('#selectLights').css('backgroundColor', '#404040')
		$('#selectFeedback').css('backgroundColor', '#404040')
	});
	$('#selectLights').click(function(){
		$('#lights').fadeIn(200);
		$('#thermostat').fadeOut(0);
		$('#feedback').fadeOut(0);
		$('#selectLights').css('backgroundColor', '#303030')
		$('#selectThermo').css('backgroundColor', '#404040')
		$('#selectFeedback').css('backgroundColor', '#404040')
	});
	$('#selectFeedback').click(function(){
		$('#feedback').fadeIn(200);
		$('#lights').fadeOut(0);
		$('#thermostat').fadeOut(0);
		$('#selectFeedback').css('backgroundColor', '#303030')
		$('#selectLights').css('backgroundColor', '#404040')
		$('#selectThermo').css('backgroundColor', '#404040')
	});

}); //close document ready