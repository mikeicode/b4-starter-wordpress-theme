<?php if ( have_rows( 'content_modules' ) ): ?>
	<?php while ( have_rows( 'content_modules' ) ) : the_row(); ?>

				<!-- copy module -->
				<?php if ( get_row_layout() == 'copy_module' ) : ?>
					<?php get_template_part( 'inc/modules/module', 'copy' ); ?> 

                      
         		<?php endif; ?>
        	<?php endwhile; ?>
    	<?php else: ?>
	<?php // no layouts found ?>
<?php endif; ?>