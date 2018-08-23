<?php
 	get_header();
	get_template_part( 'menu', 'index' ); 
?>  
    
    <?php while ( have_posts() ) : the_post(); ?><!--  the loop -->

		<section class="copy-section">
			<div class="container">
				<div class="row">

					<article id="post-<?php the_ID(); ?>" class="col-sm-12">
						<?php the_content(); ?>
					</article>

				</div><!-- /.row -->
			</div><!-- /.container -->
		</section><!-- .copy-section -->
    
	<?php endwhile; ?><!-- /the loop -->
      
<?php get_footer(); ?>  