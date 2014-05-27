$(document).ready(function(){

var tempsetting;
var tempdif;
var temptop;

$('#slider').draggable({
        containment:'parent',
        axis:'y',
        drag:function(e,ui){
			tempsetting = $('#slider').position();
			temptop = tempsetting.top;
			tempdif = temptop/24;
			console.log (tempdif);
			$('#temp').html(30-tempdif);
        }
    });
    
    

});