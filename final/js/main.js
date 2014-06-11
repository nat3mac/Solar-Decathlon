$(document).ready(function(){

	//console initialization
	console.log('main js initialized');
	
	//general functions
		
		//state refresh
		function stateRefresh(){
			//language
			if(langSet=='en'){
				$('.es').hide();
				$('.en').show();
				$('#configEn').css('backgroundColor', '#4FC48F');
				$('#configEs').css('backgroundColor', '#4d4d4d');
			}else if(langSet=='es'){
				$('.en').hide();
				$('.es').show();
				$('#configEs').css('backgroundColor', '#4FC48F');
				$('#configEn').css('backgroundColor', '#4d4d4d');
			};
			//temperature toggles
			if(unitSet=='far'){
				$('.cel').hide();
				$('.far').show();
				$('#configFar').css('backgroundColor', '#4FC48F');
				$('#configCel').css('backgroundColor', '#4d4d4d');
			}else if (unitSet=='cel'){
				$('.far').hide();
				$('.cel').show();
				$('#configCel').css('backgroundColor', '#4FC48F');
				$('#configFar').css('backgroundColor', '#4d4d4d');
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
			currentHour = (currentHour > 12) ? currentHour - 12 : currentHour;
			currentHour = (currentHour == 0) ? 12 : currentHour;
			//write time
			var enDate = monthTextEn + ' ' + currentDay;
			var esDate = currentDay + ' de ' + monthTextEs;
			var currentTimeString = currentHour + ':' + currentMin + ' ' + amPm;
			$('#clockText').html(currentTimeString);
			$('#dateText .en').html(enDate);
			$('#dateText .es').html(esDate);
		}
	
	//config code
		//show config menu
		$('#configButton').click(function(){
			$('#config').fadeIn(200);
		});
		//hide config menu
		$('#configClose').click(function(){
			$('#config').fadeOut(200);
		});
		$('#closeButton').click(function(){
			$('#config').fadeOut(200);
		});
		//toggles
			//language
			$('#configEn').click(function(){
				langSet = 'en';
				stateRefresh();
			});
			$('#configEs').click(function(){
				langSet = 'es';
				stateRefresh();
			});
			//units
			$('#configFar').click(function(){
				unitSet = 'far';
				stateRefresh();
			});
			$('#configCel').click(function(){
				unitSet = 'cel';
				stateRefresh();
			});
			
}); //close document ready