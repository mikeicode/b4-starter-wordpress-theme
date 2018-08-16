<?php
 	get_header();
	get_template_part( 'menu', 'index' ); 
?>
    
    <?php while ( have_posts() ) : the_post(); ?> <!--  the loop -->

<?php
	get_template_part( 'inc/parts/banner' );
?>
    
    <div class="container">
      	<div class="row">
    	
        	<article id="post-<?php the_ID(); ?>" class="col col-sm-12">
        		<?php the_content(); ?>
        	</article>
        
      	</div><!-- /.row -->
	</div> <!-- /.container -->
    
	<?php endwhile; ?><!-- /the loop -->
      
<?php get_footer(); ?>  