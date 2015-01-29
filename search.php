<?php
/**
 * @package WordPress
 * 
 */
 	get_header();
	get_template_part( 'menu', 'index' );  
?>  

       <div class="two-thirds column alpha">
              <?php if ( have_posts() ) : ?>
                   <h2 class="page-title"><?php printf( __( 'Search Results for: %s', 'mb' ), '<span>' . get_search_query() . '</span>' ); ?></h2>
                   
                      <?php get_template_part( 'loop', 'search' ); ?>
                   
						<?php else : ?>
                                <div id="post-0" class="post no-results not-found">
                                    <h2 class="entry-title"><?php _e( 'Nothing Found', 'mb' ); ?></h2>
                                    <div class="entry-content">
                                        <p><?php _e( 'Sorry, but nothing matched your search criteria. Please try again with some different keywords.', 'twentyten' ); ?></p>
                                        <?php get_search_form(); ?>
                                    </div><!-- .entry-content -->
                                </div><!-- #post-0 -->
                        <?php endif; ?>
                   
</div>

<?php get_template_part( 'sidebar', 'index' );  ?>
<?php get_footer(); ?>