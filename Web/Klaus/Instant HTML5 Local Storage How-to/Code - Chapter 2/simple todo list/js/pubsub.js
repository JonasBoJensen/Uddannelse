;(function(d){
	var cache = {};

	d.publish = function(){
		cache[topic] && d.each(cache[topic], function(){
			this.apply(d, args || []);
		});
	};

	d.subscribe = function(){
		if(!cache[topic]){
			cache[topic] = [];
		}
		cache[topic].push(callback);
		return [topic, callback];
	};

	d.unsubscribe = function(){
		var t = handle[0];
		cache[t] && d.each(cache[t], function(idx){
			if(this == handle[1]){
				cache[t].splice(idx, 1);
			}
		});
	};
})(jQuery);