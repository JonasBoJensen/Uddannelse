
// constructor function
function TripList(tripName){  
	// attributes
	this.name = tripName;
	this.items = []; // what to bring in the trip
	
	// operations        
	this.toString = function(){
	   var st = '';
	   st += 'Trip **' + this.name + '**';
	   if (this.items.length>0){
			st += ';' + this.items.join(',');
	   }
	   return st;
	}
	
	this.bring = function(item){
		var item = item.toLowerCase();
		this.items.push( item );
	};
	
	this.clear = function(){
		this.items = [];
	};
	
}

/*
//	Example of usage ===================================================
var tripToVenice = new TripList( 'VeniceSummer2017' );
console.log( tripToVenice.toString() );
tripToVenice.bring('camera');
tripToVenice.bring('snacks');
tripToVenice.bring('5 pair socks');
tripToVenice.bring('2 shorts');
tripToVenice.bring('1 swimsuite');
tripToVenice.bring('300 euros');	
tripToVenice.bring('mobile charger');

//console.log( tripToVenice.toString() );
var lines = tripToVenice.toString().split(';');
console.log( lines[0] ); // the name of the trip
console.log( lines[1].split(',').join('\n') ); // list of items, with newlines

// or simply:
console.log( tripToVenice.items );
*/