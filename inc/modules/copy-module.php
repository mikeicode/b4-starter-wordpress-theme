

<section class="copy-section <?php the_sub_field( 'custom_css_classes' ); ?>" style="

<?php if ( have_rows( 'copy_module_padding' ) ) : ?>
	<?php while ( have_rows( 'copy_module_padding' ) ) : the_row(); ?>
        padding-top:<?php the_sub_field( 'padding_top' ); ?>px;
        padding-bottom:<?php the_sub_field( 'padding_bottom' ); ?>px;
    <?php endwhile; ?>
<?php endif; ?>

<?php if ( have_rows( 'copy_module_margin' ) ) : ?>
	<?php while ( have_rows( 'copy_module_margin' ) ) : the_row(); ?>
    	margin-top:<?php the_sub_field( 'margin_top' ); ?>px;
        margin-top:<?php the_sub_field( 'margin_bottom' ); ?>px;
    <?php endwhile; ?>
<?php endif; ?>

<?php if ( get_sub_field( 'copy_module_background_color' ) )  {
		echo 'background-color:';
		the_sub_field( 'copy_module_background_color' );
		echo ';';
	}
?>

<?php if ( get_sub_field( 'copy_module_background_image' ) )  {
	echo 'background-image:url(';
	the_sub_field( 'copy_module_background_image' );
	echo ');';
	}
?>

<?php if ( have_rows( 'copy_module_background_properties' ) ) : ?>
	<?php while ( have_rows( 'copy_module_background_properties' ) ) : the_row(); ?>
        background-position:<?php the_sub_field( 'background_image_position' ); ?>;
        background-size:<?php the_sub_field( 'background_image_size' ); ?>;
        background-repeat:<?php the_sub_field( 'background_image_repeat' ); ?>;
    <?php endwhile; ?>
<?php endif; ?>
">

<?php 
	if ( have_rows( 'layout' ) ) :
		while ( have_rows( 'layout' ) ) : the_row(); 
			$containerClasses =  get_sub_field( 'container_width' ); 
			$alignmentClasses =  get_sub_field( 'horizontal_alignment' ); 
		endwhile; 
	endif;
?>
	

	<div class="<?php echo $containerClasses ?>">
		<div class="row <?php echo $alignmentClasses ?>">
			<?php if ( have_rows( 'copy_columns' ) ) : ?>
				<?php while ( have_rows( 'copy_columns' ) ) : the_row(); ?>
					<div class="<?php the_sub_field( 'column_width' ); ?>">
						
						<?php the_sub_field( 'column_content' ); ?>
					</div>
				<?php endwhile; ?>
			<?php else : ?>
				<?php // no rows found ?>
			<?php endif; ?>
		</div>
	</div>
	
 </section>

