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
        
        <!-- left column -->   	
        <div class="col-xs-12 col-sm-9">
        
			<?php while ( have_posts() ) : the_post(); ?> <!--  the loop -->
                        
        	<article id="post-<?php the_ID(); ?>">
          		<div class="title">            
             		<?php the_title('<h3>', '</h3>'); ?>  <!--Post title-->
          		</div>
             
            	<?php the_content(); ?> <!--The Content-->
	 
             	<!-- the meta-->   
              	<div class="meta"> 
                    	Date posted: <?php echo get_the_date(); ?>
                  	| Author: <?php the_author_posts_link(); ?>
                  	| <?php comments_popup_link('No Comments &#187;', '1 Comment &#187;', '% Comments &#187;'); ?>
                  <p>Categories: <?php the_category(' '); ?></p>
              	</div><!-- /the meta--> 
                
                <?php /* Only load comments on single post/pages*/ ?>
        		<?php if(is_page() || is_single()) : comments_template( '', true ); endif; ?>
        
        	</article>

			<?php endwhile; ?><!-- /the loop -->

        	<?php /* Display navigation to next/previous pages when applicable */ ?>
  			<?php if (  $wp_query->max_num_pages > 1 ) : ?>
				
                <nav id="nav-below">
            		<hr>
            		<div class="nav-previous"><?php next_posts_link(); ?></div>
            		<div class="nav-next"><?php previous_posts_link(); ?></div>
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