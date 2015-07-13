;(function($){
	$.lazyLoad = function(urlArr){
		$(window).ready(function(){
			if( (typeof urlArr)=="object" ){
				$(urlArr).each(function(){
					$("head").append( ($("<script></script>").attr("src",this)) );
				});
			}else{
				$("head").append( ($("<script></script>").attr("src",this)) );
			}
		});
	}
})(jQuery);