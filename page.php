<?php
 	get_header();
	get_template_part( 'menu' ); 
	get_template_part( 'inc/parts/banner' );
?>  
    
    <?php while ( have_posts() ) : the_post(); ?><!--  the loop -->
    
		<?php /* display only if the default WP editor has content */
			$thecontent = get_the_content();
			if(!empty($thecontent)) { ?>

			<section class="copy-section">
				<div class="container">
					<div class="row">

						<article id="post-<?php the_ID(); ?>" class="col-sm-12">
							<?php the_content(); ?>
						</article>

					</div><!-- /.row -->
				</div><!-- /.container -->
			</section><!-- .copy-section -->

		<?php } ?>

		<?php /* ACF modules */ get_template_part( 'inc/modules/module-list' ); ?>
    
	<?php endwhile; ?><!-- /the loop -->
      
<?php get_footer(); ?>  