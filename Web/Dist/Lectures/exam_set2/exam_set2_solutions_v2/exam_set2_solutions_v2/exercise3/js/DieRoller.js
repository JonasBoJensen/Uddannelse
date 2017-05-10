
// constructor function
function DieRoller(numberOfFaces){  
	// attributes
	this.numberOfFaces = numberOfFaces;
	this.results = []; // contains results so far
	
	// operations        
	this.toString = function(){
	   var st = '';
	   st += 'DieRoller ' + this.numberOfFaces + ' faces';
	   if (this.results.length>0){
			st += ';' + this.results.join(',');
	   }
	   return st;
	}
	
	this.roll = function(howManyTimes){
		this.results = [];
		for (var i=0;i<howManyTimes;i++){
			this.results.push(  Math.round(Math.random()*6)+1  );
		}
	};
	
	this.totalSum = function(){
		var s = 0;
		for (var i=0;i<this.results.length;i++){
			s += this.results[i];
		}
		return s;
	};

	this.average = function(){
		return this.totalSum() / this.results.length;
	};
	
	this.reset = function(){
		this.results = [];
	};
}

/*
//	Example of usage ===================================================
var d = new DieRoller( 10 );

console.log( d.toString() ); // => empty
console.log( d.totalSum() ); // => 0
console.log( d.average() );  // => NaN

d.roll( 5 );
console.log( d.toString() );
console.log( d.toString() ); // => same as the previous line
console.log( d.totalSum() );
console.log( d.average() );

d.roll( 10 );
console.log( d.toString() );
console.log( d.totalSum() );
console.log( d.average() );

d.roll( 10 );
d.reset();
console.log( d.toString() ); // => empty
console.log( d.totalSum() ); // => 0
console.log( d.average() );  // => NaN
*/