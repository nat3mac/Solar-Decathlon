$(document).ready(function(){

	//console initialization
	console.log('lights js initialized');
	
	//variables
		//lights
			var light1on = false;
			var light2on = false;
			var light3on = false;
			var light4on = false;
			var light5on = false;
	
	//light control
	$('#light1').click(
		function(){
			if(light1on==false){
				$('#light1icon').attr('src', 'img/lightfilled.png');
				light1on=true;
			}else if(light1on==true){
				$('#light1icon').attr('src', 'img/lighticon.png');
				light1on=false;
			}
		}
	);
	$('#light2').click(
		function(){
			if(light2on==false){
				$('#light2icon').attr('src', 'img/lightfilled.png');
				light2on=true;
			}else if(light2on==true){
				$('#light2icon').attr('src', 'img/lighticon.png');
				light2on=false;
			}
		}
	);
	$('#light3').click(
		function(){
			if(light3on==false){
				$('#light3icon').attr('src', 'img/lightfilled.png');
				light3on=true;
			}else if(light3on==true){
				$('#light3icon').attr('src', 'img/lighticon.png');
				light3on=false;
			}
		}
	);
	$('#light4').click(
		function(){
			if(light4on==false){
				$('#light4icon').attr('src', 'img/lightfilled.png');
				light4on=true;
			}else if(light4on==true){
				$('#light4icon').attr('src', 'img/lighticon.png');
				light4on=false;
			}
		}
	);
	$('#light5').click(
		function(){
			if(light5on==false){
				$('#light5icon').attr('src', 'img/lightfilled.png');
				light5on=true;
			}else if(light5on==true){
				$('#light5icon').attr('src', 'img/lighticon.png');
				light5on=false;
			}
		}
	);

}); //close document ready