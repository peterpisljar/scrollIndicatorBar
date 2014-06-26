(function ( $ ) {
 
	var res = 0;
	
	$.fn.scrollIndicatorBar = function (options) {
		var settings = $.extend({
            		// These are the defaults.
            		barColor: "#556b2f",
			markerColor: "red",
            		container: "document.body",
			topSpace: "0px",
			bottomSpace: "0px",
			clickable: true,
			hoverable: true,
			append: true
        	}, options );
		
		var page_height = get_height();
		var sbar = $("<div id='search_bar'></div>");
		sbar.css('top', settings.topSpace).css('bottom', settings.bottomSpace);
		sbar.css('background-color', settings.barColor);
		
		if (settings.append)
			$(settings.container).append(sbar);
		
		if (settings.clickable)
			sbar.on("click", ".marker", function() {
				var n = $(this).data("nr");
				markers[n].scrollIntoView();
			});
			
		if (settings.hoverable) {
			sbar.on("mouseenter", ".marker", function() {
				$(this).addClass("hover");
			});
			
			sbar.on("mouseleave", ".marker", function() {
				$(this).removeClass("hover");
			});		
		}
		
		var page_height = get_height();
		var cnt = 0;
		var markers = [];
		
		sbar.addMarker = function(element, options) {
			var cfg = $.extend({
				// These are the defaults.
				markerColor: settings.markerColor,
				clickable: settings.clickable,
				hoverable: settings.hoverable
			}, options );
			
			var results = $(element);
			$.each(results, function(result) {
				var pos = $(this).offset().top;
				markers.push(this);
				sbar.append("<div class='marker' data-nr='"+(cnt++)+"' style='color: "+cfg.markerColor+";top:"+(100*pos/page_height)+"%' />");
			});
		}
		
		return sbar;
	}
	
	function get_height()
	{
		var body = document.body,
		html = document.documentElement;

		var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
		return height;
	}
 
}( jQuery ));
