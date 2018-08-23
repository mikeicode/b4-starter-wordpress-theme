<?php

//======================================================================
// Imports
//====================================================================== 

get_template_part( 'inc/custom-fields' );

//======================================================================
// Load CSS and JS
//====================================================================== 

function add_theme_scripts() {
	
	// Load CSS
 	wp_enqueue_style( 'output', get_template_directory_uri() . '/css/output.css', array(), '1.0', 'all' );
	wp_enqueue_style( 'font-awesome-free', '//use.fontawesome.com/releases/v5.2.0/css/all.css' );
	
	// Load JS
	 wp_enqueue_script( 'scripts', get_template_directory_uri() . '/js/build/production.min.js', array( 'jquery'), '1.0', true);
	    
}
add_action( 'wp_enqueue_scripts', 'add_theme_scripts' );


//======================================================================
// Register Fun Things
//====================================================================== 

//--------------------------------------------------------------
// Register and set post thumbnail sizes
//--------------------------------------------------------------

add_theme_support( 'post-thumbnails' );
//set_post_thumbnail_size( 50, 50, true ); // Normal post thumbnails
add_image_size( 'banner_image_size', 1600, 445, true ); //banner image
add_image_size( 'blog_image_size', 600, 360, true ); //blog images
add_image_size( 'acf_full_height_display_size', 200, 9999, false ); //used to display images in advanced custom fields
add_image_size( 'acf_full_width_display_size', 9999, 200, false ); //used to display images in advanced custom fields


//--------------------------------------------------------------
// Register Navigations
//--------------------------------------------------------------

function add_theme_menus() {
	register_nav_menus(
		array(
			'primary-menu' => __( 'Primary Menu' ),
			'mobile-menu' => __( 'Mobile Menu' )
		)
	);
}
add_action( 'init', 'add_theme_menus' );


//--------------------------------------------------------------
// Register Widget Areas
//--------------------------------------------------------------

//widget support for a right sidebar
/*
register_sidebar(array(
  'name' => 'Right SideBar',
  'id' => 'right-sidebar',
  'description' => 'Widgets in this area will be shown on the right-hand side.',
  'before_widget' => '<div id="%1$s">',
  'after_widget'  => '</div>',  
  'before_title' => '<h3>',
  'after_title' => '</h3>'
));
*/


//======================================================================
// Setup things WordPress should do by default
//======================================================================

//--------------------------------------------------------------
// Allow shortcodes in widgets
//--------------------------------------------------------------

add_filter('widget_text', 'do_shortcode');

//--------------------------------------------------------------
// Remove Generator for Security
//--------------------------------------------------------------

remove_action( 'wp_head', 'wp_generator' );

//--------------------------------------------------------------
// Change WordPress howdy text
//--------------------------------------------------------------

function wp_admin_bar_change_howdy_text($wp_admin_bar) {
	$user_id = get_current_user_id();
	$current_user = wp_get_current_user();
	$profile_url = get_edit_profile_url($user_id);
	if (0 != $user_id)
		{
		/* Add the "My Account" menu */
		$avatar = get_avatar($user_id, 28);
		$howdy = sprintf(__('Welcome Back, %1$s') , $current_user->display_name);
		$class = empty($avatar) ? '' : 'with-avatar';
		$wp_admin_bar->add_menu(array(
			'id' => 'my-account',
			'parent' => 'top-secondary',
			'title' => $howdy . $avatar,
			'href' => $profile_url,
			'meta' => array(
				'class' => $class,
			) ,
		));
		}
};
add_action('admin_bar_menu', 'wp_admin_bar_change_howdy_text', 11);


//--------------------------------------------------------------
// Remove admin WordPress logo
//--------------------------------------------------------------

function site_admin_bar_remove() {       
	global $wp_admin_bar;   
	$wp_admin_bar->remove_menu('wp-logo');
}
add_action('wp_before_admin_bar_render', 'site_admin_bar_remove', 0); 


//======================================================================
// Customize WordPress admin
//======================================================================

//--------------------------------------------------------------
// Replace default admin login logo and link
//--------------------------------------------------------------
 
function custom_loginlogo() {
	// get logo from theme options ACF
	$admin_screen_login_logo = get_field( 'admin_screen_login_logo', 'option' );

echo '<style>
.login h1 a {
	background-image: url('. $admin_screen_login_logo['url'] .') !important;
	width:320px !important; 
	height:150px !important;
	background-size: contain !important; 
}
</style>';
}
add_action('login_head', 'custom_loginlogo');

function custom_loginlogo_url($url) {
	return '/';
}
add_filter( 'login_headerurl', 'custom_loginlogo_url' );

//--------------------------------------------------------------
// Replace admin footer text
//--------------------------------------------------------------

function remove_footer_admin () {
	echo 'Fueled by <a href="http://www.wordpress.org" target="_blank">WordPress</a> | Website by <a href="https://sonoradesignworks.com" target="_blank">Sonora DesignWorks</a></p>';
}
add_filter('admin_footer_text', 'remove_footer_admin'); 


//======================================================================
// Disable things not needed for this specific theme
//======================================================================

//--------------------------------------------------------------
// Remove Tags support for Posts
//--------------------------------------------------------------

function unregister_posts_tag() {
    unregister_taxonomy_for_object_type('post_tag', 'post');
}
add_action('init', 'unregister_posts_tag');

//--------------------------------------------------------------
// Remove Welcome screen from dashboard
//--------------------------------------------------------------

remove_action('welcome_panel', 'wp_welcome_panel');

//--------------------------------------------------------------
// Remove Dashboard Widgets
//--------------------------------------------------------------

function remove_dashboard_widgets() {
	global $wp_meta_boxes;
	//unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_activity']);
	unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_quick_press']);
	unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_incoming_links']);
	unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_right_now']);
	unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_plugins']);
	unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_recent_drafts']);
	unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_recent_comments']);
	//unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_primary']);
	//unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_secondary']);

}
add_action('wp_dashboard_setup', 'remove_dashboard_widgets' );

//--------------------------------------------------------------
// Disable default widgets 
//--------------------------------------------------------------

function Wps_unregister_default_widgets() {
    unregister_widget('WP_Widget_Pages');
    unregister_widget('WP_Widget_Calendar');
    unregister_widget('WP_Widget_Archives');
    unregister_widget('WP_Widget_Links');
    unregister_widget('WP_Widget_Meta');
    unregister_widget('WP_Widget_Search');
    //unregister_widget('WP_Widget_Text');
    unregister_widget('WP_Widget_Categories');
    unregister_widget('WP_Widget_Recent_Posts');
    unregister_widget('WP_Widget_Recent_Comments');
    unregister_widget('WP_Widget_RSS');
    unregister_widget('WP_Widget_Tag_Cloud');
}
add_action('widgets_init', 'Wps_unregister_default_widgets', 1);

//--------------------------------------------------------------
// Remove Admin Menus
//--------------------------------------------------------------

function remove_menus() {
	global $submenu;

	//remove_menu_page( 'edit.php' ); // Posts
	remove_menu_page( 'link-manager.php' ); // Links
	//remove_menu_page( 'edit-comments.php' ); // Comments
	//remove_submenu_page ( 'themes.php', 'widgets.php' ); // Appearance-->Widgets
	remove_submenu_page ( 'themes.php', 'theme-editor.php' ); // Appearance-->Editor
	
}
add_action('admin_menu', 'remove_menus', 102);


//======================================================================
// Shortcodes
//======================================================================

//--------------------------------------------------------------
// Clear line break
//--------------------------------------------------------------

add_shortcode('break', 'short_break');

function short_break () {
	return '<br class="clear">';
}


//======================================================================
// Customize TinyMce editor
//======================================================================

//--------------------------------------------------------------
// Enable font size & font family selects in the editor
//--------------------------------------------------------------

if ( ! function_exists( 'wpex_mce_buttons' ) ) {
	function wpex_mce_buttons( $buttons ) {
		array_unshift( $buttons, 'fontselect' ); // Add Font Select
		array_unshift( $buttons, 'fontsizeselect' ); // Add Font Size Select
		return $buttons;
	}
}
add_filter( 'mce_buttons_2', 'wpex_mce_buttons' );

//--------------------------------------------------------------
// Set font sizes
//--------------------------------------------------------------

if ( ! function_exists( 'wpex_mce_text_sizes' ) ) {
	function wpex_mce_text_sizes( $initArray ){
		$initArray['fontsize_formats'] = "9px 10px 12px 13px 14px 15px 16px 18px 20px 22px 24px 25px 28px 32px 36px";
		return $initArray;
	}
}
add_filter( 'tiny_mce_before_init', 'wpex_mce_text_sizes' );

//--------------------------------------------------------------
// Set fonts
//--------------------------------------------------------------
/*
if ( ! function_exists( 'wpex_mce_google_fonts_array' ) ) {
	function wpex_mce_google_fonts_array( $initArray ) {
	    $initArray['font_formats'] = 'Arial=arial,helvetica,sans-serif;latohairline=latohairline;';
            return $initArray;
	}
}
add_filter( 'tiny_mce_before_init', 'wpex_mce_google_fonts_array' );
*/

//======================================================================
// Gravity Forms
//======================================================================

//--------------------------------------------------------------
// Fix Gravity Form Tabindex Conflicts
//--------------------------------------------------------------

function gform_tabindexer( $tab_index, $form = false ) {
    $starting_index = 1000; 
    if( $form )
        add_filter( 'gform_tabindex_' . $form['id'], 'gform_tabindexer' );
    return GFCommon::$tab_index >= $starting_index ? GFCommon::$tab_index : $starting_index;
}
add_filter( 'gform_tabindex', 'gform_tabindexer', 10, 2 );

//--------------------------------------------------------------
// Hide labels on Gravity forms when using placeholders
//--------------------------------------------------------------

add_filter( 'gform_enable_field_label_visibility_settings', '__return_true' );

//--------------------------------------------------------------
// Stop Gravity Forms jumping on submit
//--------------------------------------------------------------

// (single form - replace _1 with form ID) add_filter( 'gform_confirmation_anchor_1', '__return_false' );
// (disable sitewide) add_filter( 'gform_confirmation_anchor', '__return_false' );

//======================================================================
// Advanced Custom Fields
//======================================================================

//--------------------------------------------------------------
// Hide ACF field group menu item
//--------------------------------------------------------------

//add_filter('acf/settings/show_admin', '__return_false');

//--------------------------------------------------------------
// Theme Options - ACF
//--------------------------------------------------------------

if( function_exists('acf_add_options_page') ) {
	
	acf_add_options_page(array(
		'page_title' 	=> 'Theme General Settings',
		'menu_title'	=> 'Theme Settings',
		'menu_slug' 	=> 'theme-general-settings',
		'capability'	=> 'edit_posts',
		'redirect'		=> false
	));
	
	acf_add_options_sub_page(array(
		'page_title' 	=> '404 Page Settings',
		'menu_title'	=> '404 Page',
		'parent_slug'	=> 'theme-general-settings',
	));
	
	acf_add_options_sub_page(array(
		'page_title' 	=> 'Header Settings',
		'menu_title'	=> 'Header',
		'parent_slug'	=> 'theme-general-settings',
	));
	
	acf_add_options_sub_page(array(
		'page_title' 	=> 'Footer Settings',
		'menu_title'	=> 'Footer',
		'parent_slug'	=> 'theme-general-settings',
	));
	
	acf_add_options_sub_page(array(
		'page_title' 	=> 'Banner Settings',
		'menu_title'	=> 'Banner',
		'parent_slug'	=> 'theme-general-settings',
	));
	
}

//======================================================================
// Include PHP file in Content using shortcode, examples:
// [include slug="form"] [include slug="folder/filename_no_extension"]
//======================================================================

function include_file($atts) {
     $a = shortcode_atts( array(
        'slug' => 'NULL',
       ), $atts );

      if($slug != 'NULL'){
        ob_start();
        get_template_part($a['slug']);
        return ob_get_clean();
      }
 }
 add_shortcode('include', 'include_file');

//======================================================================
// Blog Post Types
//======================================================================

//--------------------------------------------------------------
// Add Video post type
//--------------------------------------------------------------

add_theme_support( 'post-formats', array( 'video' ) );

add_filter('next_posts_link_attributes', 'posts_link_attributes');
add_filter('previous_posts_link_attributes', 'posts_link_attributes');

function posts_link_attributes() {
    return 'class="button"';
}



?>