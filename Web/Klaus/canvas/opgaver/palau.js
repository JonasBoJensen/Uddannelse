function init(){
	createPalauFlag();
	}

function createPalauFlag(){
	var cnvPalau = document.getElementById("palau");
	var wid = cnvPalau.width;
	var hei = cnvPalau.height;
	
	var context = cnvPalau.getContext("2d");
		context.fillStyle = "#4AADD6";
		context.fillRect(0,0,wid,hei);
		
		context.fillStyle = "#FFDE00";
		context.arc(wid / 2.3, hei / 2, 40, 0, 2 * Math.PI, false);
		context.fill();
		
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
