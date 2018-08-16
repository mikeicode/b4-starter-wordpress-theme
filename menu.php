

<div class="header" style="background: #000">
	<a href="#menu"><span></span></a>
</div>

<nav id="menu">
	<?php /* mobile nav */ wp_nav_menu( array( 'theme_location' => 'mobile-menu') ); ?>
</nav>

<section class="header-surround">
	<header class="container">   
          <div class="row"> 
              <div class="col-xs-12 col-sm-3">
                  	<a href="<?php echo esc_url( home_url() ); ?>"><img src="<?php bloginfo('template_directory'); ?>/images/logo.png" class="logo" alt="<?php bloginfo('name'); ?>"></a>
              </div>
          
              <div class="col-xs-12 col-sm-9">
					<?php wp_nav_menu( array( 'theme_location' => 'primary-menu' , 'menu_class' => 'sf-menu') ); ?>
              </div>
          
          </div> 

	</header>
</section>