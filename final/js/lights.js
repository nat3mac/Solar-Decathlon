$(document).ready(function(){

	//console initialization
	console.log('lights js initialized');
	
	//light functions
		
		//light tick function
		function lightTick(){
			if(light1on==true){
				timeLight1++;
			};
			if(light2on==true){
				timeLight2++;
			};
			if(light3on==true){
				timeLight3++;
			};
			if(light4on==true){
				timeLight4++;
			};
			if(light5on==true){
				timeLight5++;
			};
			$('.timeLight1').html(((timeLight1-(timeLight1%60))/60) + ' min. ' + (timeLight1%60) + ' s.');
			$('.timeLight2').html(((timeLight2-(timeLight2%60))/60) + ' min. ' + (timeLight2%60) + ' s.');
			$('.timeLight3').html(((timeLight3-(timeLight3%60))/60) + ' min. ' + (timeLight3%60) + ' s.');
			$('.timeLight4').html(((timeLight4-(timeLight4%60))/60) + ' min. ' + (timeLight4%60) + ' s.');
			$('.timeLight5').html(((timeLight5-(timeLight5%60))/60) + ' min. ' + (timeLight5%60) + ' s.');

		};
		
		//total count function
		function lightTotalCheck(){
			lightOnCount=0;
			lightOffCount=5;
			if(light1on==true){
				lightOnCount++;
			};
			if(light2on==true){
				lightOnCount++;
			};
			if(light3on==true){
				lightOnCount++;
			};
			if(light4on==true){
				lightOnCount++;;
			};
			if(light5on==true){
				lightOnCount++;
			};
			lightOffCount = 5-lightOnCount;
			$('#onCount').html('x' + lightOnCount);
			$('#offCount').html('x' + lightOffCount);
		};
	

	
	//initial light tick
	lightTick();
	lightTotalCheck();
	
	//light ticker
	setInterval(lightTick, 1000);
	
	
	
	//light control
	$('#light1').click(
		function(){
			if(light1on==false){
				$('#light1icon').attr('src', 'img/lightfilled.svg');
				light1on=true;
			}else if(light1on==true){
				$('#light1icon').attr('src', 'img/lighticon.svg');
				light1on=false;
			};
			lightTotalCheck();
		}
	);
	$('#light2').click(
		function(){
			if(light2on==false){
				$('#light2icon').attr('src', 'img/lightfilled.svg');
				light2on=true;
			}else if(light2on==true){
				$('#light2icon').attr('src', 'img/lighticon.svg');
				light2on=false;
			}
			lightTotalCheck();
		}
	);
	$('#light3').click(
		function(){
			if(light3on==false){
				$('#light3icon').attr('src', 'img/lightfilled.svg');
				light3on=true;
			}else if(light3on==true){
				$('#light3icon').attr('src', 'img/lighticon.svg');
				light3on=false;
			}
			lightTotalCheck();
		}
	);
	$('#light4').click(
		function(){
			if(light4on==false){
				$('#light4icon').attr('src', 'img/lightfilled.svg');
				light4on=true;
			}else if(light4on==true){
				$('#light4icon').attr('src', 'img/lighticon.svg');
				light4on=false;
			}
			lightTotalCheck();
		}
	);
	$('#light5').click(
		function(){
			if(light5on==false){
				$('#light5icon').attr('src', 'img/lightfilled.svg');
				light5on=true;
			}else if(light5on==true){
				$('#light5icon').attr('src', 'img/lighticon.svg');
				light5on=false;
			}
			lightTotalCheck();
		}
	);

}); //close document ready