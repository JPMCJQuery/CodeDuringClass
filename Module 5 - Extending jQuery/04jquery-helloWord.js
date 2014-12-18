(function($) {
	
	$.fn.helloWorld = function(settings) {
		settings = $.extend({
			message: 	"Hello World!",
			color:		"green"
		}, settings);
		
		return this.text(settings.message).css("color", settings.color);
		
		/*this.each(function() {
			 $(this)
			 	.text(settings.message + $(this).text())
			 	.css("color", settings.color);
		});
		return this;*/
	};
	
}(jQuery));
