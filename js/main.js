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
| Superfish
|--------------------------------------------------------------------------
|
|
|
*/	

	myTheme.Navigation = function () {
		
		$('#menu-main-nav').superfish({
		});
	
	};
	

/*
|--------------------------------------------------------------------------
| Search field placeholder text
|--------------------------------------------------------------------------
|
|
|
*/		

	myTheme.SearchPlaceholder = function () {
		
		$("#s").watermark("Search..");
	
	};	
	

/*
|--------------------------------------------------------------------------
| Mobile Nav
|--------------------------------------------------------------------------
|
|
|
*/	

	myTheme.MobileNav = function () {
		
		$("#menu-mobile-nav").tinyNav({
  			header: 'Navigation' 
		});
	
	};		
	
	
/*
|--------------------------------------------------------------------------
| Fitvids Responsive Videos
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
| Fancybox
|--------------------------------------------------------------------------
|
|
|
*/		

	myTheme.Fancybox = function () {
		
		$(".popup").fancybox({
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
		
		
		
		var thumbnails = 'a[href$=".gif"],a[href$=".jpg"],a[href$=".jpeg"],a[href$=".png"],a[href$=".GIF"],a[href$=".JPG"],a[href$=".JPEG"],a[href$=".PNG"]';
		$(thumbnails).addClass("fancybox");
		$('.fancybox').fancybox();
	
	};


/*
|--------------------------------------------------------------------------
| isotope
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
| Same height columns
|--------------------------------------------------------------------------
|
|
|
*/	
	
	  myTheme.Matchheight = function () {
		  $('.matchheight').matchHeight();
		  $('.footer-col').matchHeight();
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
	myTheme.SearchPlaceholder();
	myTheme.MobileNav();
	myTheme.FitVids();
	myTheme.TrimP();
	myTheme.Fancybox();
	myTheme.Isotope();
	myTheme.Isotope2();
	myTheme.Matchheight();
	
	

});