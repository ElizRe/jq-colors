// good luck !

$(document).ready(function(){

	var buttons= $("[type='button']");

		for (var i = 0; i< buttons.length; i++) { 

	var indiv=$(buttons[i]); 
	var color=indiv.attr('data-color'); 
	indiv.css('background-color',color);

	}

			$(buttons).click(function(){
		  		var color=$(this).attr('data-color');


			if ( $("#modify-texte").is(':checked') )

				{
    		  
					$('body').css('color',color);

				}
				
			else { $('body').css('background-color',color);	}

	});

});

	

