(function($) {
	
	$.fn.helloWorld = function() {
		this.text("Hello World!");
		
		/*this.each(function() {
			 $(this).text("Hello World!" + $(this).text());
		});*/
	};
	
}(jQuery));
