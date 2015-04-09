<?php
/**
 * @package WordPress
 * 
 */
 	get_header();
	get_template_part( 'menu', 'index' );  
?>  

	<div class="container">

        <!-- left and right columns -->
      	<div class="row">
    	
        	<!-- main article - left column -->
        	<article class="col-xs-12 col-sm-9">
        		
				<?php if ( have_posts() ) : ?>
              
                   <h1 class="mb25"><?php printf( __( 'Search Results for: %s', 'mb' ), '<span>' . get_search_query() . '</span>' ); ?></h1>
                   
                   	<ul class="search-list">
                    	<?php while ( have_posts() ) : the_post(); ?>
                    	<li><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></li>
                    	<?php endwhile; ?>
                    </ul>
                    
					<?php else : ?>
                               <h1 class="title mb25"><?php printf( __( 'Search Results for: %s', 'mb' ), '<span>' . get_search_query() . '</span>' ); ?></h1>
                               <p style="font-size:15px">Sorry, but nothing matched your search criteria.<br>Please try again or use the navigation above.</p>
                    <?php endif; ?>
                        
        	</article><!-- /main article - left column --> 
        
        	<!-- right column sidebar -->
        	<div class="col-xs-12 col-sm-3">
          		<?php get_template_part( 'sidebar' ); ?>
        	</div><!-- /right column sidebar -->
        
      	</div><!-- /left and right columns -->

	</div> <!-- /container -->
    
<?php get_footer(); ?>