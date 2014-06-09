$(document).ready(function(){

	toggleOn1=false;
	toggleOn2=false;
	toggleOn3=false;
	toggleOn4=false;
	toggleOn5=false;

	$('#roomIcon1').click(
		function(){
			if(toggleOn1==true){
				$(this).css('opacity', '.3');
				toggleOn1=false;
			}else{
				$(this).css('opacity', '1');
				toggleOn1=true;
			}
		}
	);
	
	$('#roomIcon2').click(
		function(){
			if(toggleOn2==true){
				$(this).css('opacity', '.3');
				toggleOn2=false;
			}else{
				$(this).css('opacity', '1');
				toggleOn2=true;
			}
		}
	);
	
	$('#roomIcon3').click(
		function(){
			if(toggleOn3==true){
				$(this).css('opacity', '.3');
				toggleOn3=false;
			}else{
				$(this).css('opacity', '1');
				toggleOn3=true;
			}
		}
	);
	
	$('#roomIcon4').click(
		function(){
			if(toggleOn4==true){
				$(this).css('opacity', '.3');
				toggleOn4=false;
			}else{
				$(this).css('opacity', '1');
				toggleOn4=true;
			}
		}
	);
	
	$('#roomIcon5').click(
		function(){
			if(toggleOn5==true){
				$(this).css('opacity', '.3');
				toggleOn5=false;
			}else{
				$(this).css('opacity', '1');
				toggleOn5=true;
			}
		}
	);

}); //close document ready