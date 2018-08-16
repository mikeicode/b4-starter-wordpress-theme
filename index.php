<?php
 	get_header();
	get_template_part( 'menu', 'index' );  
?>     

<?php
	/* store blog or category title */
	if ( is_home() ) {
	  	$blogTitle = get_the_title( get_option('page_for_posts') );
	} elseif ( is_category() )  {
		$blogTitle = single_cat_title( '', false );
	}
?>

<!-- display blog or category title -->
<section class="category-title">
	<div class="container">
		<div class="row">
			<div class="col">
				<h2><?php echo $blogTitle ?></h2>
			</div>
		</div>
	</div>
</section><!-- /display blog or category title -->


    <?php while ( have_posts() ) : the_post(); ?> 
	
	<?php
		/* column width based on featured image / video */ 
		if ( has_post_format( 'video' )) {
			$leftClasses = 'col-md-5';
			$rightClasses = 'col-md-7';
		} elseif ((function_exists('has_post_thumbnail')) && (has_post_thumbnail())) {
			$leftClasses = 'col-md-5';
			$rightClasses = 'col-md-7';
		} else {
			$leftClasses = '';
			$rightClasses = 'col';
		}
	?>

    <section class="post-wrap">
        <div class="container">
    
                <div class="row"> 
                
                    <div class="<?php echo $leftClasses ?>">
                    
						<?php
                            if ( has_post_format( 'video' )) {
                            	the_field( 'video_link' );
                            } elseif ((function_exists('has_post_thumbnail')) && (has_post_thumbnail())) {
                                the_post_thumbnail('blog_image_size');
                            }
                        ?>
						
                    </div>
                    
                    <div class="<?php echo $rightClasses ?>">
                        
                        <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
            
                            <h2 class="post-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
                            
                            <?php the_excerpt(); ?>
                            
                            <p><a href="<?php the_permalink(); ?>" class="button read-more">Read More</a></p>
                 
                        </article>
                      
                    </div>
                        
                </div>
    
        </div> 
    </section>
    
    <?php endwhile; ?>

		<!-- pagination -->
        <?php if (  $wp_query->max_num_pages > 1 ) : ?>
        
        	<?php
				$linkText = 'Posts';
		   	?>
   
          	<div class="container mb50">
            	<div class="row"> 
                	<div class="col-xs-12">
                    	<div class="pagination-wrap">
                            <nav id="nav-below">
                                <div class="nav-next"><?php previous_posts_link('<i class="fas fa-long-arrow-alt-left" aria-hidden="true"></i> Newer '. $linkText.''); ?></div>
                                <div class="nav-previous"><?php next_posts_link('Previous '. $linkText.' <i class="fas fa-long-arrow-alt-right" aria-hidden="true"></i>'); ?></div>
                            </nav><!-- #nav-below -->
                        </div>
                    </div>
            	</div>
            </div>
        <?php endif; ?><!-- /pagination -->
           
<?php get_footer(); ?>  