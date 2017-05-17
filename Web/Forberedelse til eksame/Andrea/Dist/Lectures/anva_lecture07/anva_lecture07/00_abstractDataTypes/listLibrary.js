
/* This is a possible implementation of the List ADT, 

   Another way would be to use an array inside the list object: myList = { values: [] };
   Some operations might be more difficult/easier in the second implementation, e.g. prepending/appending.
   
   Would the rest of the program still work, if the List ADT was implemented in the second way?
*/

exports = {
ListConstructor: function (){ // constructor
	// nodes are used inside the defintion of Lists 
	// but are not accessible from outside
	function Node(value,next){
		this.v = value;
		this.n = next;
	}
	
	// attribute
	this.listHead = null;

	this.isEmpty = function(){
		return (this.listHead == null);
	};
	
	this.getHead = function(){
		if (!this.isEmpty())
			return this.listHead.v;
		else 
			return null;
	};
	
	this.getTail = function(){
		if (this.isEmpty()){
			return new List();
		}
		
		var tail = new List();
		tail.listHead = this.listHead.n;
		return tail;
	};	
	
	// prepending is quite easy
	this.prepend = function(value){
		var n = new Node(value,this.listHead);
		this.listHead = n;
	};
	
	// appending instead is more difficult that it looks...
	this.append = function(value){
		if (this.isEmpty()){ // list is empty
			this.listHead = new Node(value,null);
		} else { // there is at least 1 node in the list
			var currentNode = this.listHead;
			var previousNode = null;
			while (currentNode!=null){
				previousNode = currentNode;
				currentNode = currentNode.n;
			}		
			previousNode.n = new Node(value,null);
		}
	};
	
	// to see how the list is growing...
	this.print = function(){
		if (this.isEmpty()){
			return '()';
		}

		var text = '(';
		var currentNode = this.listHead;
		text += currentNode.v;
		currentNode = currentNode.n;
		while (currentNode!=null){
			text += ',' + currentNode.v;
			currentNode = currentNode.n;
		}
		return text+')';
	};

	this.length = function(){
		var l = 0;
		if (this.isEmpty()){
			return l;
		}

		var currentNode = this.listHead;
		while (currentNode!=null){
			l++;
			currentNode = currentNode.n;
		}
		return l;
	};
	
}

/*
	The object created by the above constructor has the following structure:
	
	{ listHead: null,		-> reference to the first node of the list
	  isEmpty: function,	-> returns true if the list has no elements
	  getHead: function,	-> returns the first element of the list (i.e. the value of the first node) or null
	  getTail: function,	-> returns a list with all the elements after the first one (or an empty list)
	  prepend: function,	-> adds a new node at the first position in the list; all others will be shifted further
	  append: function,		-> adds a new node at the end of the list
	  print: function,		-> prints all elements of the list
	  length: function		-> returns the number of elements
	}
*/

};