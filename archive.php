<?php
 	get_header();
	get_template_part( 'menu' ); 
	get_template_part( 'inc/parts/banner' );
	get_template_part( 'inc/parts/content', 'posts' );
	get_footer();
?>