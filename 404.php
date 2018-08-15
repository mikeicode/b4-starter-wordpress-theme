<?php
get_header(); 
get_template_part( 'menu', 'index' ); ?>

	<section class="main-404">
        <div class="container">
            <div class="row">
                <article id="post-<?php the_ID(); ?>" class="col mt50 mb50 align-center">
                    <?php the_field( '404_page_content', 'option' ); ?>
                </article>
            </div>
        </div>
    </section>
        
<?php get_footer(); ?>