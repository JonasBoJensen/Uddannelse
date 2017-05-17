
// constructor function
function ShoppingCart(){
	// attributes
	this.items = [];
    this.prices = [];
	
	// operations        
	this.toString = function(){
	   var st = '';
	   st += 'ShoppingCart: '
	   if (this.items.length>0){
          for (var i=0;i<this.items.length;i++){
             st += this.items[i] + ',' + this.prices[i];
             if (i+1<this.items.length){
                st += ';'
             }
          }
	   } else {
          st += 'empty'
       }
	   return st;
	}
	
	this.addToCart = function(item,price){
		var item = item.toLowerCase();
		this.items.push( item );
        this.prices.push( price );
	};
	
	this.clear = function(){
		this.items = [];
        this.prices = [];
	};
   
	this.computeTotal = function(){
       var sum = 0;
       for (var i=0;i<this.items.length;i++){
          sum += this.prices[i];
       }
       return sum;
	};
   
}