function init(){
	createItalyFlag();
	}

function createItalyFlag(){
	var cnvItaly = document.getElementById("italy");
	var context = cnvItaly.getContext("2d");
		context.fillStyle = "#00ff00";
		context.fillRect(0,0,cnvItaly.width/3,cnvItaly.height);
		context.fillStyle = "#ffffff";
		context.fillRect(cnvItaly.width/3,0,cnvItaly.width/3,cnvItaly.height);
		context.fillStyle = "#ff0000";
		context.fillRect(2 * cnvItaly.width/3,0,cnvItaly.width/3,cnvItaly.height);
		
		
		
	addBorder(context,cnvItaly.width,cnvItaly.height);
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
