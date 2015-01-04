<?php
/**
 * @package WordPress
 *
 */

get_header(); 
get_template_part( 'menu', 'index' ); ?>

	<div class="container">

      	<div class="row">
        	<article id="post-<?php the_ID(); ?>" class="col-xs-12 mt50 mb50 align-center">
				<p>Sorry, you are looking for something that isn't here. Please use the navigation above.</p>
			</article>
		</div>
	</div>
        

<?php get_template_part( 'sidebar', 'index' ); ?>
<?php get_footer(); ?>