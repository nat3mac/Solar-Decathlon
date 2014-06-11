$(document).ready(function(){

	//console initialization
	console.log('selection js initialized');
		
	//click
	$('#selectThermo').click(function(){
		$('#thermostat').fadeIn(200);
		$('#lights').fadeOut(0);
		$('#feedback').fadeOut(0);
		$('#selectThermo').css('background', '#303030')
		$('#selectLights').css('background', 'linear-gradient(#404040, #545454)')
		$('#selectFeedback').css('background', 'linear-gradient(#404040, #545454)')
	});
	$('#selectLights').click(function(){
		$('#lights').fadeIn(200);
		$('#thermostat').fadeOut(0);
		$('#feedback').fadeOut(0);
		$('#selectLights').css('background', '#303030')
		$('#selectThermo').css('background', 'linear-gradient(#404040, #545454)')
		$('#selectFeedback').css('background', 'linear-gradient(#404040, #545454)')
	});
	$('#selectFeedback').click(function(){
		$('#feedback').fadeIn(200);
		$('#lights').fadeOut(0);
		$('#thermostat').fadeOut(0);
		$('#selectFeedback').css('background', '#303030')
		$('#selectLights').css('background', 'linear-gradient(#404040, #545454)')
		$('#selectThermo').css('background', 'linear-gradient(#404040, #545454)')
	});

}); //close document ready