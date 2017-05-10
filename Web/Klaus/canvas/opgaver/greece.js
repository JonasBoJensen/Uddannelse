function init(){
	createGreeceFlag();
	}

function createGreeceFlag(){
	var canvas = document.getElementById("greece");
	var wid = canvas.width;
	var hei = canvas.height;
	
	
	var context = canvas.getContext("2d");
		context.fillStyle = "#000080";
		context.fillRect(0,0,wid,hei);
	
	var lineHeight = hei/9;
	
	context.lineWidth = lineHeight;
	context.strokeStyle = "#ffffff";
	
	var offset = lineHeight/2;
	for(var i=1; i<8; i+=2){
		context.moveTo(0,i*lineHeight + offset);
		context.lineTo(wid,i*lineHeight+offset);
		context.stroke();
		
	}	
	
	context.fillRect(0,0,lineHeight*5,lineHeight*5);

	context.beginPath();
	context.moveTo(0, lineHeight*2.5);
	context.lineTo(lineHeight*5,lineHeight*2.5);
	context.moveTo(lineHeight*2.5,0);
	context.lineTo(lineHeight*2.5,lineHeight*5+1);
	context.stroke();

		
	addBorder(context,wid,hei);
}

function addBorder(context,wid,hei){
	context.lineWidth=1;
	context.strokeStyle = "#000000";
	context.beginPath();
	context.moveTo(0,0);
	context.lineTo(0,hei);
	context.lineTo(wid,hei);
	context.lineTo(wid,0);
	context.lineTo(0,0);
	context.closePath();
	context.stroke();
}
