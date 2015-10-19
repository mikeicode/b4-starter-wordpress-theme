<?php

// Comments styling cheatsheet

//======================================================================
// CATEGORY LARGE FONT
//======================================================================

//-----------------------------------------------------
// Sub-Category Smaller Font
//-----------------------------------------------------



//======================================================================
// Register and Load Scripts and Stylesheets
//====================================================================== 

function skeleton_scripts()  
    {  
         
        // Register scripts
		wp_register_script( 'scripts', get_template_directory_uri() . '/js/build/production.min.js', array( 'jquery'), '1.0', true);
		
        // Enqueue scripts 
		wp_enqueue_script( 'scripts' );
		
    }  
add_action( 'wp_enqueue_scripts', 'skeleton_scripts' );  

function skeleton_styles()  
	{
	
		// Register styles
		wp_register_style( 'output', get_template_directory_uri() . '/css/output.css', array(), '1.0', 'all' );

		// Enqueue styles 
		wp_enqueue_style( 'output' );
	
	}
add_action( 'wp_enqueue_scripts', 'skeleton_styles' );


//======================================================================
// Register Fun Things
//====================================================================== 

//-----------------------------------------------------
// Register and set post thumbnail sizes
//-----------------------------------------------------

add_theme_support( 'post-thumbnails' );
set_post_thumbnail_size( 50, 50, true ); // Normal post thumbnails
add_image_size( 'banner_image', 933, 9999 ); // New size for ...


//-----------------------------------------------------
// Register Navigations
//-----------------------------------------------------

add_action( 'init', 'my_custom_menus' );
function my_custom_menus() {
    register_nav_menus(
        array(
            'primary-menu' => __( 'Primary Menu' ),
			'mobile-menu' => __( 'Mobile Menu' )
        )
    );
}

//<?php wp_nav_menu (array('theme_location' => 'primary-menu','menu_class' => 'nav')); ? > //
//<?php wp_nav_menu (array('theme_location' => 'secondary-menu','menu_class' => 'nav')); ? > // 


//-----------------------------------------------------
// Register Widget Areas
//-----------------------------------------------------

//widget support for a right sidebar
register_sidebar(array(
  'name' => 'Right SideBar',
  'id' => 'right-sidebar',
  'description' => 'Widgets in this area will be shown on the right-hand side.',
  'before_widget' => '<div id="%1$s">',
  'after_widget'  => '</div>',  
  'before_title' => '<h3>',
  'after_title' => '</h3>'
));


//======================================================================
// Setup things WordPress should do by default
//======================================================================

//-----------------------------------------------------
// Allow shortcodes in widgets
//-----------------------------------------------------

add_filter('widget_text', 'do_shortcode');

//-----------------------------------------------------
// Remove Generator for Security
//-----------------------------------------------------

remove_action( 'wp_head', 'wp_generator' );

//-----------------------------------------------------
// Change wordpress howdy text
//-----------------------------------------------------

add_action( 'admin_bar_menu', 'wp_admin_bar_my_custom_account_menu', 11 );

function wp_admin_bar_my_custom_account_menu( $wp_admin_bar ) {
$user_id = get_current_user_id();
$current_user = wp_get_current_user();
$profile_url = get_edit_profile_url( $user_id );

if ( 0 != $user_id ) {
/* Add the "My Account" menu */
$avatar = get_avatar( $user_id, 28 );
$howdy = sprintf( __('Welcome Back, %1$s'), $current_user->display_name );
$class = empty( $avatar ) ? '' : 'with-avatar';

$wp_admin_bar->add_menu( array(
'id' => 'my-account',
'parent' => 'top-secondary',
'title' => $howdy . $avatar,
'href' => $profile_url,
'meta' => array(
'class' => $class,
),
) );
}
};

//-----------------------------------------------------
// Remove admin WordPress logo
//-----------------------------------------------------

function site_admin_bar_remove() 
        {       
         global $wp_admin_bar;   
             /* Remove their stuff */ 
               $wp_admin_bar->remove_menu('wp-logo');
        }
add_action('wp_before_admin_bar_render', 'site_admin_bar_remove', 0); 


//======================================================================
// Customize WordPress admin
//======================================================================

//-----------------------------------------------------
// Replace default admin login logo and link
//----------------------------------------------------- 
 
function custom_loginlogo() {
echo '<style type="text/css">
.login h1 a  {background-image: url('.get_bloginfo('template_directory').'/images/admin-logo.jpg) !important;
    background-size: 320px 80px !important; width:320px !important; height:80px !important }
</style>';
}
add_action('login_head', 'custom_loginlogo');
add_filter( 'login_headerurl', 'custom_loginlogo_url' );
function custom_loginlogo_url($url) {
	return 'http://example.com';
}

//-----------------------------------------------------
// Replace default admin login logo and link
//----------------------------------------------------- 

function remove_footer_admin () {
echo 'Fueled by <a href="http://www.wordpress.org" target="_blank">WordPress</a> | Website by <a href="http://sonoradesignworks.com" target="_blank">Sonora DesignWorks</a></p>';
    }

add_filter('admin_footer_text', 'remove_footer_admin'); 


//======================================================================
// Disable things not needed for this specific theme
//======================================================================

//-----------------------------------------------------
// Remove Dashboard Widgets
//----------------------------------------------------- 

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

//-----------------------------------------------------
// Disable default widgets 
//----------------------------------------------------- 

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

//-----------------------------------------------------
// Remove Admin Menus
//----------------------------------------------------- 

add_action('admin_menu', 'remove_menus', 102);
function remove_menus()
{
global $submenu;

//remove_menu_page( 'edit.php' ); // Posts
//remove_menu_page( 'upload.php' ); // Media
remove_menu_page( 'link-manager.php' ); // Links
//remove_menu_page( 'edit-comments.php' ); // Comments
//remove_menu_page( 'edit.php?post_type=page' ); // Pages
//remove_menu_page( 'plugins.php' ); // Plugins
//remove_menu_page( 'themes.php' ); // Appearance
//remove_menu_page( 'users.php' ); // Users
//remove_menu_page( 'tools.php' ); // Tools
//remove_menu_page(‘options-general.php’); // Settings

//remove_submenu_page ( 'index.php', 'update-core.php' );    //Dashboard->Updates
//remove_submenu_page ( 'themes.php', 'themes.php' ); // Appearance-->Themes
//remove_submenu_page ( 'themes.php', 'widgets.php' ); // Appearance-->Widgets
remove_submenu_page ( 'themes.php', 'theme-editor.php' ); // Appearance-->Editor
//remove_submenu_page ( 'options-general.php', 'options-general.php' ); // Settings->General
//remove_submenu_page ( 'options-general.php', 'options-writing.php' ); // Settings->writing
//remove_submenu_page ( 'options-general.php', 'options-reading.php' ); // Settings->Reading
//remove_submenu_page ( 'options-general.php', 'options-discussion.php' ); // Settings->Discussion
//remove_submenu_page ( 'options-general.php', 'options-media.php' ); // Settings->Media
//remove_submenu_page ( 'options-general.php', 'options-privacy.php' ); // Settings->Privacy
}


//======================================================================
// Shortcodes
//======================================================================

//-----------------------------------------------------
// Clear line break
//-----------------------------------------------------

add_shortcode('break', 'short_break');

function short_break () {
return '<br class="clear">';
}


//======================================================================
// Customize TinyMce editor
//======================================================================

//-----------------------------------------------------
// Enable font size & font family selects in the editor
//-----------------------------------------------------

if ( ! function_exists( 'wpex_mce_buttons' ) ) {
	function wpex_mce_buttons( $buttons ) {
		array_unshift( $buttons, 'fontselect' ); // Add Font Select
		array_unshift( $buttons, 'fontsizeselect' ); // Add Font Size Select
		return $buttons;
	}
}
add_filter( 'mce_buttons_2', 'wpex_mce_buttons' );

//-----------------------------------------------------
// Set font sizes
//-----------------------------------------------------

if ( ! function_exists( 'wpex_mce_text_sizes' ) ) {
	function wpex_mce_text_sizes( $initArray ){
		$initArray['fontsize_formats'] = "9px 10px 12px 13px 14px 15px 16px 18px 20px 22px 24px 25px 28px 32px 36px";
		return $initArray;
	}
}
add_filter( 'tiny_mce_before_init', 'wpex_mce_text_sizes' );

//-----------------------------------------------------
// Set fonts
//-----------------------------------------------------

if ( ! function_exists( 'wpex_mce_google_fonts_array' ) ) {
	function wpex_mce_google_fonts_array( $initArray ) {
	    $initArray['font_formats'] = 'Arial=arial,helvetica,sans-serif;Lato Regular=latoregular';
            return $initArray;
	}
}
add_filter( 'tiny_mce_before_init', 'wpex_mce_google_fonts_array' );




?>