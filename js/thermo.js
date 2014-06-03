$(document).ready(function(){

var tempsetting;
var tempdif;
var temptop;
var tempUnit='cel';

$('#slider').draggable({
        containment:'parent',
        axis:'y',
        drag:function(e,ui){
			tempsetting = $('#slider').position();
			temptop = tempsetting.top;
			tempdif = temptop/24;
			
			if (tempUnit=='cel'){
			$('#temp').html(Math.round(30-tempdif));
			$('.far').fadeOut(0);
			$('.cel').fadeIn(0);
			}
			else if (tempUnit=='far'){
			$('#temp').html(Math.round(((30-tempdif)*1.8)+32));
			$('.far').fadeIn(0);
			$('.cel').fadeOut(0);
			}
        }
    });

	function setFar(){
			tempUnit='far';
			};
	function setCel(){
			tempUnit='cel';
			};
	$('#configFar').click(setFar);
	$('#configCel').click(setCel);
});

