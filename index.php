<?php
 	get_header();
	get_template_part( 'menu', 'index' );  
?>     
     
    
    <div class="container">

        <!-- left and right columns -->
      	<div class="row"> 
        
        <!-- left column -->   	
        <div class="col-xs-12 col-sm-9">
        
        	<!-- echo category name on category archive, blog page title otherwise -->
        	<p class="blog-title"><?php if ( is_category() ) {
				single_cat_title( '', true );
				} else {
				echo get_the_title( 35 ); // change that to the ID of the main blog page
				}
			?> </p>
        
			<?php while ( have_posts() ) : the_post(); ?> <!--  the loop -->
                        
        	<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

          		<h2 class="post-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
                
                	<?php
                            if ((function_exists('has_post_thumbnail')) && (has_post_thumbnail(17))) {
                                the_post_thumbnail('gallery_landing_image_size');
                            }
                        ?>
                
             
                        <?php the_excerpt(); ?>
	 
             	<!-- the meta-->   
              	<div class="meta"> 
                    	Date posted: <?php echo get_the_date(); ?>
                  	| Author: <?php the_author_posts_link(); ?>
                  	| <?php comments_popup_link('No Comments &#187;', '1 Comment &#187;', '% Comments &#187;'); ?>
                  <p>Categories: <?php the_category(' '); ?></p>
              	</div><!-- /the meta--> 
        	</article>

			<?php endwhile; ?><!-- /the loop -->

        	<?php /* Display navigation to next/previous pages when applicable */ ?>
  			<?php if (  $wp_query->max_num_pages > 1 ) : ?>
				
                <nav id="nav-below">
            		<div class="nav-next"><?php previous_posts_link('<i class="fa fa-angle-left"></i> Newer Posts'); ?></div>
                    <div class="nav-previous"><?php next_posts_link('Previous Posts <i class="fa fa-angle-right"></i>'); ?></div>
          		</nav><!-- #nav-below -->
          	
			<?php endif; ?>
          
      	</div><!-- /left column -->
        
        	<!-- right column sidebar -->
        	<div class="col-xs-12 col-sm-3" id="sidebar">
          		<?php get_template_part( 'sidebar' ); ?>
        	</div><!-- /right column sidebar -->
        
      	</div><!-- /left and right columns -->

    </div> <!-- /container -->
           
<?php get_footer(); ?>  