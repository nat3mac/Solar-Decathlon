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
	
	//liveclock
		//ticking
		setInterval(clockTick, 500);
		//tick function
		function clockTick(){
			//vars
			var currentTime = new Date();
			var currentMonth = currentTime.getMonth();
			var currentDay = currentTime.getDate();
			var currentHour = currentTime.getHours();
			var currentMin = currentTime.getMinutes();
			var currentSec = currentTime.getSeconds();
			var monthsEn = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
			var monthTextEn = monthsEn[currentMonth];
			var monthsEs = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'deciembre'];
			var monthTextEs = monthsEs[currentMonth];
			//convert to 12hr format
			currentMin =(currentMin < 10 ? '0' : '') + currentMin;
			currentSec = (currentSec < 10 ? '0' : '') + currentSec;
			var amPm = (currentHour < 12) ? 'AM' : 'PM';
			currentHour = (currentHour > 12) ? currentHour - 12 : currentHours;
			currentHour = (currentHour == 0) ? 12 : currentHour;
			//write time
			var enDate = monthTextEn + ' ' + currentDay;
			var esDate = monthTextEs + ' ' + currentDay;
			var currentTimeString = currentHour + ':' + currentMin + ':' + currentSec+ ' ' + amPm;
			$('#clockText').html(currentTimeString);
			$('#dateText .en').html(enDate);
			$('#dateText .es').html(esDate);
		}
	
	//config code
	
	
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