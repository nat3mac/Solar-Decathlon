$(document).ready(function(){

	console.log('ready');

	var langSet='en';
	
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
