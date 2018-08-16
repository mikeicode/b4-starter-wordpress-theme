<!DOCTYPE html>
<html <?php language_attributes(); ?>> 
    
<head>

<meta charset="<?php bloginfo( 'charset' ); ?>" />
        
<!--[if lt IE 7 ]><html class="ie ie6" lang="en"> <![endif]-->
<!--[if IE 7 ]><html class="ie ie7" lang="en"> <![endif]-->
<!--[if IE 8 ]><html class="ie ie8" lang="en"> <![endif]-->
<!--[if gte IE 9 ]><html class="no-js ie9" lang="en"> <![endif]-->
    
	<!-- Mobile Specific Metas
  ================================================== -->
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <title><?php wp_title(); ?></title>

	<!-- Favicon
	==================================================  -->
   	<?php $site_favicon = get_field( 'site_favicon', 'option' ); ?>
	<?php if ( $site_favicon ) { ?>
		<link rel="shortcut icon" href="<?php echo $site_favicon['url']; ?>">
	<?php } ?>
  
    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="https://cdn.jsdelivr.net/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://cdn.jsdelivr.net/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

<?php wp_head(); ?>  
<?php the_field( 'header_code', 'option' ); ?>   
</head>

<body <?php body_class(); ?>>
<?php the_field( 'body_code', 'option' ); ?> 
<div id="page-wrap"><!-- this ID is for mmenu mobile nav -->