;(function($){
	$.fn.radioClass = function(cn){
		this.addClass(cn).siblings().removeClass(cn);
		return this;
	};
})(jQuery)