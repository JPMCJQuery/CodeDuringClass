(function($) {
	
	$.fn.helloWorld = function(message) {
		if (typeof message == "undefined"  || message == null)
			message = "Hello World!";
		
		return this.text(message);
		
		/*this.each(function() {
			 $(this).text(message + $(this).text());
		});
		return this;*/
	};
	
}(jQuery));
