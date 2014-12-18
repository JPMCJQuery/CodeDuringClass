(function($) {
	
	$.fn.helloWorld = function(settings, success) {
		settings = $.extend({
			message: 	"Hello World!",
			color:		"green"
		}, settings);
		
		this.text(settings.message).css("color", settings.color);
		
		/*this.each(function() {
			 $(this)
			 	.text(settings.message + $(this).text())
			 	.css("color", settings.color);
		});*/
		
		if ($.isFunction(success)) success.call(this);
		return this;
	};
	
}(jQuery));
