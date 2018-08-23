<?php

	/* get and store ID of page set to use for blog landing */
	$blogPageID = get_option( 'page_for_posts' );
	
	/* get banner images */
	$banner_image_Current = get_field( 'banner_image' ); // from current page or post
	$banner_image_BlogPage = get_field( 'banner_image', $blogPageID ); // from page set as blog landing
	$banner_image_ThemeOptions = get_field( 'default_banner_image', 'option' ); // from theme options
	$banner_image_Fallback = 'https://imageholdr.com/1000x300?text=Enter+Banner+Image'; // final fallback so it's not empty
	
	/* set banner image URLs with fallbacks */
	$banner_image_Current_URL = $banner_image_Current['sizes']['banner_image_size'];
	$banner_image_BlogPage_URL = $banner_image_BlogPage['sizes']['banner_image_size'];
	$banner_image_ThemeOptions_URL = $banner_image_ThemeOptions['sizes']['banner_image_size'];
	$banner_image_Fallback_URL = $banner_image_Fallback;
	
	/* set banner heading text */
	$banner_heading_Current = get_field( 'banner_heading' );
	$banner_heading_BlogPage = get_field( 'banner_heading', $blogPageID );
	
	/* set banner sub-heading text */
	$banner_subHeading_Current = get_field( 'banner_sub_heading' );
	$banner_subHeading_BlogPage = get_field( 'banner_sub_heading', $blogPageID );

?> 

<?php
	if ( is_single() ) { // single post
				 
		if (!empty($banner_image_Current)) { // set banner image URL with fallbacks
				$banner_image_URL =  $banner_image_Current_URL;
			} elseif (!empty($banner_image_BlogPage)) {
				$banner_image_URL =  $banner_image_BlogPage_URL;
			} elseif (!empty($banner_image_ThemeOptions)) {
				$banner_image_URL =  $banner_image_ThemeOptions_URL;
			} else {
				$banner_image_URL = $banner_image_Fallback_URL;
		}
		
		if (!empty($banner_heading_Current)) { // set banner heading text with fallbacks
				$banner_heading_TEXT = $banner_heading_Current;
			} elseif (!empty($banner_heading_BlogPage)) {
				$banner_heading_TEXT = $banner_heading_BlogPage;
		}
		
		if (!empty($banner_subHeading_Current)) { // set banner sub-heading text with fallbacks
				$banner_subHeading_TEXT = $banner_subHeading_Current;
			} elseif (!empty($banner_heading_BlogPage)) {
				$banner_subHeading_TEXT = $banner_subHeading_BlogPage;
		}
		
	}

	elseif ( is_home() ) { // page set as blog landing
				 
		if (!empty($banner_image_BlogPage)) { // set banner image URL with fallbacks
				$banner_image_URL =  $banner_image_BlogPage_URL;
			} elseif (!empty($banner_image_ThemeOptions)) {
				$banner_image_URL =  $banner_image_ThemeOptions_URL;
			} else {
				$banner_image_URL = $banner_image_Fallback_URL;
		}
		
		if (!empty($banner_heading_BlogPage)) {  // set banner heading text with fallbacks
				$banner_heading_TEXT = $banner_heading_BlogPage;
		}
		
		if (!empty($banner_heading_BlogPage)) { // set banner sub-heading text with fallbacks
				$banner_subHeading_TEXT = $banner_subHeading_BlogPage;
		}
		
	}

	else { // regular pages
		 
		if (!empty($banner_image_Current)) { // set banner image URL with fallbacks
				$banner_image_URL =  $banner_image_Current_URL;
			} elseif (!empty($banner_image_ThemeOptions)) {
				$banner_image_URL =  $banner_image_ThemeOptions_URL;
			} else {
				$banner_image_URL = $banner_image_Fallback_URL;
		}
			
		if (!empty($banner_heading_Current)) { // set banner heading text
				$banner_heading_TEXT = $banner_heading_Current;
		} 
		
		if (!empty($banner_subHeading_Current)) { // set banner sub-heading text
				$banner_subHeading_TEXT = $banner_subHeading_Current;
		} 
				
	}

?>

<?php /* don't show banner on homepage */ if ( !is_front_page() ) { ?>

	<section class="banner-section" style="background:url('<?php echo $banner_image_URL ?>')">
		<div class="container">
			<div class="row"> 
				<div class="col">
					<div class="banner-text">
						<?php
							if (!empty($banner_heading_TEXT)) {
								echo '<h1>'. $banner_heading_TEXT .'</h1>';
							} 
						?>
						<?php
							if (!empty($banner_subHeading_TEXT)) {
								echo '<div class="banner-sub-head">'. $banner_subHeading_TEXT .'</div>';
							} 
						?>
					</div>
				</div>
			</div>
		</div>
	</section>

<?php }?>