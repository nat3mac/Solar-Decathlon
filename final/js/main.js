$(document).ready(function(){

	//console initialization
	console.log('main js initialized');
	
	//variables
	
		//lights
		var light1on = false;
		var light2on = false;
		var light3on = false;
		var light4on = false;
		var light5on = false;
		
		//language
		var langSet = 'en';
		
		//units
		var unitSet = 'far';
		
		//thermostat
		var tempSet = 20;
	
	//general functions
		
		//state refresh
		function stateRefresh(){
			//language
			if(langSet=='en'){
				$('.es').hide(0);
				$('.en').show(0);
			}else if(langSet=='es'){
				$('.en').hide(0);
				$('.es').show(0);
			};
		};
	
	//state first run
	stateRefresh();
	
	//language code
	
	//unit code
	
	//developer buttons
	$('#englishDevButton').click(function(){
		langSet='en';
		stateRefresh();
	});
	$('#spanishDevButton').click(function(){
		langSet='es';
		stateRefresh();
	});
	
}); //close document ready