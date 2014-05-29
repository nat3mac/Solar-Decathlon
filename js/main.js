$(document).ready(function(){

	console.log('ready');

	var langSet='en';
	
	$('#selectThermo').click(
		function(){
			$('#selectThermo').fadeOut(0);
			$('#selectFeedback').fadeIn();
			$('#selectLights').fadeIn();
			$('#thermostat').fadeIn();
			$('#energyUse').fadeOut(0);
			$('#roomSelect').fadeOut(0);
		}
	);
	
	$('#selectLights').click(
		function(){
			$('#selectLights').fadeOut(0);
			$('#selectFeedback').fadeIn();
			$('#selectThermo').fadeIn();
			$('#roomSelect').fadeIn();
			$('#energyUse').fadeOut(0);
			$('#thermostat').fadeOut(0);
		}
	);
	
	$('#selectFeedback').click(
		function(){
			$('#selectFeedback').fadeOut(0);
			$('#selectThermo').fadeIn();
			$('#selectLights').fadeIn();
			$('#energyUse').fadeIn();
			$('#roomSelect').fadeOut(0);
			$('#thermostat').fadeOut(0);
		}
	);
	
	$('#englishIcon').click(
		function(){
			if(langSet=='es'){
				$('#englishIcon').css('opacity', '1');
				$('#spanishIcon').css('opacity', '.3');
				langSet='en';
	
			}
		}
	);
	
	$('#spanishIcon').click(
		function(){
			if(langSet=='en'){
				$('#englishIcon').css('opacity', '.3');
				$('#spanishIcon').css('opacity', '1');
				langSet='es';
			}
		}
	);
	
});
