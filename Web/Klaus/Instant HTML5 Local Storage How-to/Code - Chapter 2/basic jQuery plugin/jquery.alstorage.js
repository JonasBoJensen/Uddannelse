(function($){
  $.alStorage = {
    setItem: function(key,value){
    	localStorage.setItem(key,value)
    },
    
    getItem: function(key) {
    	return localStorage.getItem(key)
    },

    removeItem: function(key) {
    	localStorage.removeItem(key)
    },

    clearItem: function(key) {
    	localStorage.clear()
    }
  }
})(jQuery);