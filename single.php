<?php
 	get_header();
	get_template_part( 'menu' ); 
	get_template_part( 'inc/parts/banner' );
?>  
    <section class="copy-section">
		<div class="container">
			<div class="row"> 
				<div class="col">
					<?php while ( have_posts() ) : the_post(); ?><!--  the loop -->

						<article id="post-<?php the_ID(); ?>">
							<h1 class="post-title"><?php the_title(); ?></h1>

							<?php the_content(); ?>

							<!-- meta-->   
							<div class="meta"> 
								<p>Posted: <?php echo get_the_date(); ?> in: <?php the_category(', '); ?></p>
							</div><!-- /meta--> 

							<?php if(is_page() || is_single()) : comments_template( '', true ); endif; ?>

						</article>

					<?php endwhile; ?><!-- /the loop -->
				</div>
			</div><!-- /.row -->
		</div><!-- /.container -->
	</section><!-- /.copy-section -->
           
<?php get_footer(); ?>  