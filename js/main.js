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
	
	

});