$(document).ready(function(){

	//console initialization
	console.log('selection js initialized');
		
	//click
	$('#selectThermo').click(function(){
		$('#thermostat').fadeIn(200);
		$('#lights').fadeOut(0);
		$('#feedback').fadeOut(0);
		$('#selectThermo').css('backgroundColor', '#303030');
		$('#thermoSelectedBlock').fadeIn(200);
		$('#selectLights').css('backgroundColor', '#404040');
		$('#lightsSelectedBlock').fadeOut(200);
		$('#selectFeedback').css('backgroundColor', '#404040');
		$('#feedbackSelectedBlock').fadeOut(200);
	});
	$('#selectLights').click(function(){
		$('#lights').fadeIn(200);
		$('#thermostat').fadeOut(0);
		$('#feedback').fadeOut(0);
		$('#selectLights').css('backgroundColor', '#303030');
		$('#lightsSelectedBlock').fadeIn(200);
		$('#selectThermo').css('backgroundColor', '#404040');
		$('#thermoSelectedBlock').fadeOut(200);
		$('#selectFeedback').css('backgroundColor', '#404040');
		$('#feedbackSelectedBlock').fadeOut(200);
	});
	$('#selectFeedback').click(function(){
		$('#feedback').fadeIn(200);
		$('#lights').fadeOut(0);
		$('#thermostat').fadeOut(0);
		$('#selectFeedback').css('backgroundColor', '#303030');
		$('#feedbackSelectedBlock').fadeIn(200);
		$('#selectLights').css('backgroundColor', '#404040');
		$('#thermoSelectedBlock').fadeOut(200);
		$('#selectThermo').css('backgroundColor', '#404040');
		$('#lightsSelectedBlock').fadeOut(200);
	});

}); //close document ready