function init(){
	createGreeceFlag();
	}

function createGreeceFlag(){
	var canvas = document.getElementById("greece");
	var wid = canvas.width;
	var hei = canvas.height;
	var context = canvas.getContext("2d");
    
		context.fillStyle = "#000099";
		context.fillRect(0,0,wid,hei);
		
    for (var i = 1; i < 9; i+=2){
        context.fillStyle = "#FFFFFF";
        context.fillRect(0,i * (hei/9),wid,hei/9);
    }

	   context.fillStyle = "#000099";
       context.fillRect(0,0,hei/9*5,hei/9*5);
    
       context.fillStyle = "#FFFFFF";
       context.fillRect(hei/9*2,0,hei/9,hei/9*5+1)
       context.fillRect(0,hei/9*2,hei/9*5,hei/9)
	
	
		 	
	}

	




