

<a class="mobile-menu-button" href="#mobile-menu"><i class="fas fa-bars"></i></a>

<nav id="mobile-menu">
	<?php /* mobile nav */ wp_nav_menu( array( 'theme_location' => 'mobile-menu') ); ?>
</nav>

<section class="header-surround">
	<header class="container">   
          <div class="row"> 
              <div class="col col-sm-3">
                  	<?php $site_logo = get_field( 'site_logo', 'option' ); ?>
					<?php if ( $site_logo ) { ?>
						<a href="<?php echo esc_url( home_url() ); ?>">
							<img src="<?php echo $site_logo['url']; ?>" alt="<?php echo $site_logo['alt']; ?>" class="logo">
						</a>
					<?php } ?>
              </div>
              <div class="col col-sm-9">
					<?php wp_nav_menu( array( 'theme_location' => 'primary-menu' , 'menu_class' => 'sf-menu') ); ?>
              </div>
          </div> 
	</header>
</section>