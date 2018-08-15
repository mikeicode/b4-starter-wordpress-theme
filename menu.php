

<div class="header" style="background: #000">
	<a href="#menu"><span></span></a>
</div>



<nav id="menu">
				<ul>
					<li><a href="/">Home</a></li>
					<li><span>About us</span>
						<ul>
							<li><a href="#about/history">History</a></li>
							<li><span>The team</span>
								<ul>
									<li><a href="#about/team/management">Management Team Name Here</a></li>
									<li><a href="/blog/">Blog</a></li>
									<li><a href="#about/team/development">Development</a></li>
								</ul>
							</li>
							<li><a href="#about/address">Our address</a></li>
						</ul>
					</li>
					<li><a href="/blog/">Blog</a></li>
					<li><a href="advanced.html">Advanced demo</a></li>
					<li><a href="onepage.html">One page demo</a></li>
				</ul>
			</nav>


<section class="header-surround">
	<header class="container">   
          <div class="row"> 
              <div class="col-xs-12 col-sm-3">
                  	<a href="<?php echo esc_url( home_url() ); ?>"><img src="<?php bloginfo('template_directory'); ?>/images/logo.png" class="logo" alt="<?php bloginfo('name'); ?>"></a>
              </div>
          
              <div class="col-xs-12 col-sm-9">
					<?php wp_nav_menu( array( 'theme_location' => 'primary-menu' , 'menu_class' => 'sf-menu') ); ?>
                    <?php wp_nav_menu( array( 'theme_location' => 'mobile-menu' ) ); ?>
              </div>
          
          </div> 

	</header>
</section>
	


