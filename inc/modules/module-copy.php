
<?php 
	$custom_css_classes = get_sub_field( 'custom_css_classes');
				  
	if ( have_rows( 'copy_module_padding' ) ) :
		 while ( have_rows( 'copy_module_padding' ) ) : the_row(); 
			 $padding_top =  get_sub_field( 'padding_top' ); 
			 $padding_bottom =  get_sub_field( 'padding_bottom' ); 
		 endwhile; 
	endif; 

	if ( have_rows( 'copy_module_margin' ) ) :
		 while ( have_rows( 'copy_module_margin' ) ) : the_row(); 
			 $margin_top =  get_sub_field( 'margin_top' ); 
			 $margin_bottom =  get_sub_field( 'margin_bottom' ); 
		 endwhile; 
	endif;

	if ( get_sub_field( 'copy_module_background_color' ) )  {
		$copy_module_background_color = get_sub_field( 'copy_module_background_color' );
	}

	if ( get_sub_field( 'copy_module_background_image' ) )  {
		$copy_module_background_image = get_sub_field( 'copy_module_background_image' );
	}

	if ( have_rows( 'copy_module_background_properties' ) ) : 
		while ( have_rows( 'copy_module_background_properties' ) ) : the_row();
			$background_image_position = get_sub_field( 'background_image_position' ); 
			$background_image_size = get_sub_field( 'background_image_size' ); 
			$background_image_repeat = get_sub_field( 'background_image_repeat' ); 
		endwhile; 
	 endif; 

	if ( have_rows( 'layout' ) ) :
		while ( have_rows( 'layout' ) ) : the_row(); 
			$containerClasses =  get_sub_field( 'container_width' ); 
			$alignmentClasses =  get_sub_field( 'horizontal_alignment' ); 
		endwhile; 
	endif;
?>

<section class="copy-section <?php if (!empty($custom_css_classes)) {echo $custom_css_classes;}?>" style="

<?php
	if (!empty($padding_top)) {
		echo 'padding-top:'. $padding_top .'px;';
	} 
	if (!empty($padding_bottom)) {
		echo 'padding-bottom:'. $padding_bottom .'px;';
	}
	if (!empty($margin_top)) {
		echo 'margin-top:'. $margin_top .'px;';
	}
	if (!empty($margin_bottom)) {
		echo 'margin-bottom:'. $margin_bottom .'px;';
	}
	if (!empty($copy_module_background_color)) {
		echo 'background-color:'. $copy_module_background_color .';';
	}
	if (!empty($copy_module_background_image)) {
		echo 'background-image:url('. $copy_module_background_image .');';
	}
	if (!empty($background_image_position)) {
		echo 'background-position:'. $background_image_position .';';
	}
	if (!empty($background_image_size)) {
		echo 'background-size:'. $background_image_size .';';
	}
	if (!empty($background_image_repeat)) {
		echo 'background-repeat:'. $background_image_repeat .';';
	}
?>																						 
">

	<div class="<?php echo $containerClasses ?>">
		<div class="row <?php echo $alignmentClasses ?>">
			<?php if ( have_rows( 'copy_columns' ) ) : ?>
				<?php while ( have_rows( 'copy_columns' ) ) : the_row(); ?>
					<div class="<?php the_sub_field( 'column_width' ); ?>">
						<?php the_sub_field( 'column_content' ); ?>
					</div>
				<?php endwhile; ?>
			<?php endif; ?>
		</div><!-- /.row -->
	</div><!-- /.container -->
	
 </section>