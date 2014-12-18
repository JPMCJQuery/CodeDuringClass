(function($) {
	
	$.fn.helloWorld = function() {
		return this.text("Hello World!");
		
		/*this.each(function() {
			 $(this).text("Hello World!" + $(this).text());
		});
		return this;*/
	};
	
}(jQuery));
