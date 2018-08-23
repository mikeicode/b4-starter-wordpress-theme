jQuery(document).ready(function($) {


/*
|--------------------------------------------------------------------------
| Global myTheme Obj / Variable Declaration
|--------------------------------------------------------------------------
|
|
|
*/

	var myTheme = window.myTheme || {},
    $win = $( window );
		
	
/*
|--------------------------------------------------------------------------
| Main Navigation - Superfish plugin
|--------------------------------------------------------------------------
|
|
|
*/	

	myTheme.Navigation = function () {
		
		$('.menu-main-nav-container ul.sf-menu').superfish({
			
		});
	
	};
	

/*
|--------------------------------------------------------------------------
| Mobile Navigation - mmenu plugin
|--------------------------------------------------------------------------
|
|
|
*/	

	myTheme.MobileNav = function () {
		
		$("nav#mobile-menu").mmenu({
			 "extensions": [

				//"shadow-page",
				//"shadow-panels",
				 "multiline",
				 //"theme-white",
				 //"theme-dark",
				 "pagedim-black",
				 "border-offset",
				 "position-front"
			 ],

			//"slidingSubmenus": false,
			 "iconPanels": true,

		 });
	
	};		
	
	
/*
|--------------------------------------------------------------------------
| Responsive Videos - Fitvids plugin
|--------------------------------------------------------------------------
|
|
|
*/		

	myTheme.FitVids = function () {
		
		$(".container").fitVids();
	
	};	
	

/*
|--------------------------------------------------------------------------
| Trim empty P tags
|--------------------------------------------------------------------------
|
|
|
*/		

	myTheme.TrimP = function () {
		
		// Trimming white space
		$('p').filter(function () { return $.trim(this.innerHTML) == "" }).remove();

		// Without trimming white space
		$('p').filter(function () { return this.innerHTML == "" }).remove();
	
	};	
	

/*
|--------------------------------------------------------------------------
| Image / content popups - Fancybox plugin
|--------------------------------------------------------------------------
|
|
|
*/		

	myTheme.Fancybox = function () {
		
		var thumbnails = 'a[href$=".gif"],a[href$=".jpg"],a[href$=".jpeg"],a[href$=".png"],a[href$=".GIF"],a[href$=".JPG"],a[href$=".JPEG"],a[href$=".PNG"]';
		$(thumbnails).addClass("popup");
		
		$(".popup").fancybox({
			maxWidth	: 900,
			maxHeight	: 700,
			fitToView	: false,
			width		: '80%',
			height		: '80%',
			autoSize	: false,
			closeClick	: false,
			openEffect	: 'elastic',
			closeEffect	: 'fade'
		});
			
	};


/*
|--------------------------------------------------------------------------
| isotope plugin
|--------------------------------------------------------------------------
|
|
|
*/		

	myTheme.Isotope = function () {
	
		
		var isotopeContainer = $('.isotopeContainer');
		if( !isotopeContainer.length || !jQuery().isotope ) return;
		$win.load(function(){
			isotopeContainer.isotope({
				itemSelector: '.isotopeSelector',
				layoutMode: 'fitRows'
			});
			
		/* $('.isotopeFilters2').on( 'click', 'a', function(e) {
				$('.isotopeFilters2').find('.active').removeClass('active');
				$(this).parent().addClass('active');
				var filterValue = $(this).attr('data-filter');
				isotopeContainer.isotope({ filter: filterValue });
				e.preventDefault();
			}); */
		
		}); 
		
	
	};
	
	
	// for gallery page
	myTheme.Isotope2 = function () {
		
		var isotopeContainer = $('.gallery');
		if( !isotopeContainer.length || !jQuery().isotope ) return;
		$win.load(function(){
			isotopeContainer.isotope({
				itemSelector: '.gallery-item'
				//layoutMode: 'fitRows'
			});
		});
		
	
	};
	
	
/*
|--------------------------------------------------------------------------
| Same height columns - matchheight plugin
|--------------------------------------------------------------------------
|
|
|
*/	
	
	  myTheme.Matchheight = function () {
		  $('.matchheight').matchHeight();		  
	  };
	
/*
|--------------------------------------------------------------------------
| Zebra stripe for blog
|--------------------------------------------------------------------------
|
|
|
*/	
	
	  myTheme.Zebra = function () {
		  $("section.post-wrap:odd").addClass("odd");
	  };
	

/*
|--------------------------------------------------------------------------
| Functions Initializers
|--------------------------------------------------------------------------
|
|
|
*/

	myTheme.Navigation();
	myTheme.MobileNav();
	myTheme.FitVids();
	myTheme.TrimP();
	myTheme.Fancybox();
	myTheme.Isotope();
	myTheme.Isotope2();
	myTheme.Matchheight();
	myTheme.Zebra();
	
	

});