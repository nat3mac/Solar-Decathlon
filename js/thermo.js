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
			$('#temp').html(Math.round(30-tempdif));
        }
    });
});

/*if (tempUnit=='far'){
	$('#temp').html(Math.round(((30-tempdif)*1.8)+32))
}*/