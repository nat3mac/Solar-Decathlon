$(document).ready(function(){

	var langSet='es';
	function setEn(){
			$('.en').fadeIn(0);
			$('.es').fadeOut(0);
			langSet='en';
			};
	function setEs(){
			$('.en').fadeOut(0);
			$('.es').fadeIn(0);
			langSet='es';
			};

	$('#englishIcon').click(
		function(){
			setEn();
			if(langSet=='es'){
				$('#englishIcon').css('opacity', '1');
				$('#spanishIcon').css('opacity', '.3');
				
	
			}
		}
	);
	
	$('#spanishIcon').click(
		function(){
			setEs();

			if(langSet=='en'){
				$('#englishIcon').css('opacity', '.3');
				$('#spanishIcon').css('opacity', '1');
				
			}
		}
	);

	$('#configEn').click(setEn);
		
	$('#configEs').click(setEs);

});