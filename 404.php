<?php
get_header(); 
get_template_part( 'menu', 'index' ); ?>

	<section class="main-404">
        <div class="container">
            <div class="row">
                <article id="post-<?php the_ID(); ?>" class="col-xs-12 mt50 mb50 align-center">
                    <p>Sorry, you are looking for something that isn't here.</p>
                    <p><a href="/" class="button">Visit Homepage</a></p>
                </article>
            </div>
        </div>
    </section>
        
<?php get_footer(); ?>