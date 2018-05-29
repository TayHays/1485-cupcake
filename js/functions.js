// JavaScript Document

	// This is telling browser not to load til everything else is done
jQuery(document).ready(function($){
	
	// Smooth scroll home nav
		$('.smooth-scroll').on('click', 'a', function(e) {
			// prevent default anchor click behavior
   			e.preventDefault();
		
		   // store hash
		   var hash = this.hash;
			
			$('html, body').animate({
			   scrollTop: $(this.hash).offset().top-40
			 }, 1750, function(){
		
			   /* when done, add hash to url
			    (default click behaviour)*/
			   window.location.hash = hash;
			 });
		
		});

	
});