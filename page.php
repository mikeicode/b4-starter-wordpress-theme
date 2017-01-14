<?php
 	get_header();
	get_template_part( 'menu', 'index' );  
?>  
    
    <?php while ( have_posts() ) : the_post(); ?> <!--  the loop -->
    
    <div class="container">

        <!-- left and right columns -->
      	<div class="row">
    	
        	<!-- main article - left column -->
        	<article id="post-<?php the_ID(); ?>" class="col-xs-12 col-sm-9">
        		<?php the_content(); ?>
                <?php edit_post_link(); ?> 
        	</article><!-- /main article - left column --> 
        
        	<!-- right column sidebar -->
        	<div class="col-xs-12 col-sm-3">
          		<?php get_template_part( 'sidebar' ); ?>
        	</div><!-- /right column sidebar -->
        
      	</div><!-- /left and right columns -->

	</div> <!-- /container -->
    
	<?php endwhile; ?><!-- /the loop -->
      
<?php get_footer(); ?>  