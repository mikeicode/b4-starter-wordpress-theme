<?php 
/**
 * @package WordPress
 */
?>

<div class="header-surround">
	<div class="container">
		<div class="header">  
   
          <div class="row"> 
              <div class="col-xs-12 col-sm-3">
                  <a href="http://example.com"><img src="<?php bloginfo('template_directory'); ?>/images/logo.png" class="logo"></a>
              </div>
          
              <div class="col-xs-12 col-sm-9">
                  
                  <div>
                      <?php wp_nav_menu( array( 'theme_location' => 'primary-menu' , 'menu_class' => 'sf-menu') ); ?>
                      <?php wp_nav_menu( array( 'theme_location' => 'mobile-menu' ) ); ?>
                  </div>
          
              </div>
          
          </div> <!-- /.row -->

		</div> <!--  /.header -->
	</div><!--  /.container -->
</div><!-- /.header-surround -->
