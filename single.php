<?php
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
          		<h1 class="post-title"><?php the_title(); ?></h1>
             
            	<?php the_content(); ?>
                 <?php edit_post_link(); ?> 
	 
             	<!-- the meta-->   
              	<div class="meta"> 
                    	Date posted: <?php echo get_the_date(); ?>
                  	| Author: <?php the_author_posts_link(); ?>
                  	| <?php comments_popup_link('No Comments &#187;', '1 Comment &#187;', '% Comments &#187;'); ?>
                  <p>Categories: <?php the_category(' '); ?></p>
              	</div><!-- /the meta--> 
                
        		<?php if(is_page() || is_single()) : comments_template( '', true ); endif; ?>
        
        	</article>

			<?php endwhile; ?><!-- /the loop -->

          
      	</div><!-- /left column -->
        
        	<!-- right column sidebar -->
        	<div class="col-xs-12 col-sm-3" id="sidebar">
          		<?php get_template_part( 'sidebar' ); ?>
        	</div><!-- /right column sidebar -->
        
      	</div><!-- /left and right columns -->

    </div> <!-- /container -->
           
<?php get_footer(); ?>  