$(document).ready(function(){

	var langSet='es';

	$('#englishIcon').click(
	function setEn(){
			$('.en').fadeIn(0);
			$('.es').fadeOut(0);
			$('#englishIcon').css('opacity', '1');
			$('#spanishIcon').css('opacity', '.3');
			langSet='en';
			});
	$('#spanishIcon').click(
	function setEs(){
			$('.en').fadeOut(0);
			$('.es').fadeIn(0);
			$('#englishIcon').css('opacity', '.3');
			$('#spanishIcon').css('opacity', '1');
			langSet='es';
			});
});