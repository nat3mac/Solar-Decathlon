$(document).ready(function(){

	$('#englishIcon').click(
		function(){
			$('.en').fadeIn();
			$('.es').fadeOut(0);

			if(langSet=='es'){
				$('#englishIcon').css('opacity', '1');
				$('#spanishIcon').css('opacity', '.3');
				langSet='en';
	
			}
		}
	);
	
	$('#spanishIcon').click(
		function(){
			$('.en').fadeOut(0);
			$('.es').fadeIn();

			if(langSet=='en'){
				$('#englishIcon').css('opacity', '.3');
				$('#spanishIcon').css('opacity', '1');
				langSet='es';
			}
		}
	);
});