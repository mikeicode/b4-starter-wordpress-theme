<?php
get_header(); 
get_template_part( 'menu' );  ?>

	<section class="main-404">
        <div class="container">
            <div class="row">
                <article id="post-<?php the_ID(); ?>" class="col mt50 mb50 align-center">
                    <?php if ( get_field( '404_page_content', 'option' ) ) {
							the_field( '404_page_content', 'option' );
						} else {
							echo "Sorry, you are looking for something that isnt here.";
						}
					?>
				</article>
            </div>
        </div>
    </section>
        
<?php get_footer(); ?>