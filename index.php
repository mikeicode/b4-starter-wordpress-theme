<?php
 	get_header();
	get_template_part( 'menu', 'index' );  
?>     
     
  
<?php if ( is_category() ) {
		echo'<section class="category-title"><div class="container"><div class="row"><div class="col-xs-12"><h2>';
		single_cat_title( '', true );
		echo'</h2></div></div></div></section>';
	}
?> 
     
    <?php while ( have_posts() ) : the_post(); ?> 
    <section class="post-wrap">
        <div class="container">
    
                <div class="row"> 
                
                    <div class="col-sm-4 col-md-5" id="sidebar">
                    
						<?php
                            if ( has_post_format( 'video' )) {
                              the_field( 'video_link' );
                            } elseif ((function_exists('has_post_thumbnail')) && (has_post_thumbnail())) {
                                    the_post_thumbnail('blog_image_size');
                             }
                        ?>
                        
                    </div>
                    
                    <div class="col-sm-8 col-md-7">
                        
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
    

        <?php /* Display navigation to next/previous pages when applicable */ ?>
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
        <?php endif; ?>
           
<?php get_footer(); ?>  