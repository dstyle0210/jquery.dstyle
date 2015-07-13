;(function($){
	$.fn.addIdx = function(s){
		this.each(function(n,m){
			m[((!s)?"idx":s)] = n;
		});
		return this;
	};
})(jQuery)