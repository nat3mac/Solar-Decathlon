$(document).ready(function(){

	console.log('ready');
	
	$('#selectThermo').click(
		function(){
			$('#selectThermo').addClass('selected');
			$('#selectLights, #selectFeedback').removeClass('selected');
			$('#thermostat').fadeIn();
			$('#energyUse').fadeOut(0);
			$('#roomSelect').fadeOut(0);
		}
	);
	
	$('#selectLights').click(
		function(){
			$('#selectLights').addClass('selected');
			$('#selectThermo, #selectFeedback').removeClass('selected');
			$('#roomSelect').fadeIn();
			$('#energyUse').fadeOut(0);
			$('#thermostat').fadeOut(0);
		}
	);
	
	$('#selectFeedback').click(
		function(){
			$('#selectFeedback').addClass('selected');
			$('#selectThermo, #selectLights').removeClass('selected');
			$('#energyUse').fadeIn();
			$('#roomSelect').fadeOut(0);
			$('#thermostat').fadeOut(0);
		}
	);
	
$('#config').click(
		function(){
			$('#configuration').fadeIn(200);
			$('.shade').fadeIn(400);
		}

	);



	
});
