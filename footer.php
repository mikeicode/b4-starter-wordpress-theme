
	<footer class="footer-surround">
    	<div class="container">
    		<p>&copy; <?php echo date("Y") ?> Business Name</p>
        </div>
    </footer>

<?php edit_post_link(); ?> 

</div><!-- /#page-wrap -->
               
<a href="#" id="to-top" title="Scroll to top"><i class="fas fa-chevron-up"></i></a>
                           
<?php wp_footer(); ?>
<?php the_field( 'footer_code', 'option' ); ?>
</body>
</html>