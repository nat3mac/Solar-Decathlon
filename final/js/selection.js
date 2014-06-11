$(document).ready(function(){

	//console initialization
	console.log('selection js initialized');
		
	//click
	$('#selectThermo').click(function(){
		$('#thermostat').fadeIn(200);
		$('#lights').fadeOut(0);
		$('#feedback').fadeOut(0);
		$('#selectThermo').css('background', '#303030');
		$('#selectLights').css('background', 'linear-gradient(#404040, #545454)');
		$('#selectFeedback').css('background', 'linear-gradient(#404040, #545454)');
		$('#thermoBlock').fadeIn(200);
		$('#lightsBlock').fadeOut(200);
		$('#feedbackBlock').fadeOut(200);
	});
	$('#selectLights').click(function(){
		$('#lights').fadeIn(200);
		$('#thermostat').fadeOut(0);
		$('#feedback').fadeOut(0);
		$('#selectLights').css('background', '#303030');
		$('#selectThermo').css('background', 'linear-gradient(#404040, #545454)');
		$('#selectFeedback').css('background', 'linear-gradient(#404040, #545454)');
		$('#lightsBlock').fadeIn(200);
		$('#thermoBlock').fadeOut(200);
		$('#feedbackBlock').fadeOut(200);
	});
	$('#selectFeedback').click(function(){
		$('#feedback').fadeIn(200);
		$('#lights').fadeOut(0);
		$('#thermostat').fadeOut(0);
		$('#selectFeedback').css('background', '#303030');
		$('#selectLights').css('background', 'linear-gradient(#404040, #545454)');
		$('#selectThermo').css('background', 'linear-gradient(#404040, #545454)');
		$('#feedbackBlock').fadeIn(200);
		$('#lightsBlock').fadeOut(200);
		$('#thermoBlock').fadeOut(200);
	});

}); //close document ready