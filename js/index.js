
// global. currently active menu item 
var current_item = 0;

// show content settings
var section_hide_time = 500;
var section_show_time = 500;

// jQuery stuff
jQuery(document).ready(function($) {
	// Switch section
	$("a", '.mainmenu').click(function() 
	{
		if( ! $(this).hasClass('active') ) { 
			current_item = this;
			// close all visible divs with the class of .section
			$('.section:visible').fadeOut( section_hide_time, function() { 
				$('a', '.mainmenu').removeClass( 'active' );  
				$(current_item).addClass( 'active' );
				var new_section = $( $(current_item).attr('href') );
				new_section.fadeIn( section_show_time );
			} );
		}
		return false;
	});		
});


//Gets Tooltipsters on My Music Section

$(document).ready(function() {
$('.tooltip-song1').tooltipster({
    content: $('<iframe width="450px" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/204861334&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>'),
    
    animation	     : 'grow',
    fixedWidth	   : 400,
    position	     : 'bottom',
    theme		       : 'tooltipster-light',
    interactive    : true,
    offsetX        : 150,
   });
   
   $('.tooltip-song2').tooltipster({
    content: $('<iframe width="450" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/203284985&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>'),
    
    animation	     : 'grow',
    fixedWidth	   : 400,
    position	     : 'bottom',
    theme		       : 'tooltipster-light',
    interactive    : true,
    offsetX        : 150,
   });
  
  
  $('.tooltip-song3').tooltipster({
    content: $('<iframe width="450" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/219296387&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>'),
    
    animation	     : 'grow',
    fixedWidth	   : 400,
    position	     : 'bottom',
    theme		       : 'tooltipster-light',
    interactive    : true,
    offsetX        : 150,
   });
  
  $('.tooltip-song4').tooltipster({
    content: $('<iframe width="450" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/219678066&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>'),
    
    animation	     : 'grow',
    fixedWidth	   : 400,
    position	     : 'bottom',
    theme		       : 'tooltipster-light',
    interactive    : true,
    offsetX        : 150,
   });
  });