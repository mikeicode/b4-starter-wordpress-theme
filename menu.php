<?php 
/**
 * @package WordPress
 */
?>

<section class="header-surround">
	<header class="container">   
          <div class="row"> 
              <div class="col-xs-12 col-sm-3">
                  	<a href="<?php echo esc_url( home_url() ); ?>"><img src="<?php bloginfo('template_directory'); ?>/images/logo.png" class="logo"></a>
              </div>
          
              <div class="col-xs-12 col-sm-9">
					<?php wp_nav_menu( array( 'theme_location' => 'primary-menu' , 'menu_class' => 'sf-menu') ); ?>
                    <?php wp_nav_menu( array( 'theme_location' => 'mobile-menu' ) ); ?>
              </div>
          
          </div> <!-- /.row -->

	</header><!--  /header -->
</section><!-- /.header-surround -->
