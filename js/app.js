
jQuery(document).ready(function($) {

		/* Superfish
================================================== */
	
	var mainNav = $('#menu-main-nav').superfish({
		//add options here if required
	});
	
	
	/* Input placeholder text
================================================== */	
	jQuery("#s").watermark("Search..");
	
	
	/* Mobile Nav
================================================== */
	jQuery("#menu-mobile-nav").tinyNav({
  	
  	header: 'Navigation' // String: Specify text for "header" 
	});
	

	/* Fancybox Video
================================================== */

  jQuery(".various").fancybox({
		  maxWidth	: 900,
		  maxHeight	: 700,
		  fitToView	: false,
		  width		: '80%',
		  height		: '80%',
		  autoSize	: false,
		  closeClick	: false,
		  openEffect	: 'elastic',
		  closeEffect	: 'none'
  });

	/* Fitvids Responsive Videos
================================================== */

  jQuery(".container").fitVids();



});