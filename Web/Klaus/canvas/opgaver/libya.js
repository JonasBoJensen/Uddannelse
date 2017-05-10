function init(){
	createLibyaFlag();
	}

function createLibyaFlag(){
	var cnvLibya = document.getElementById("libya");
	var context = cnvLibya.getContext("2d");
		context.fillStyle = "#009530";
		context.fillRect(0,0,cnvLibya.width,cnvLibya.height);
		
	addBoarder(context,cnvLibya.width,cnvLibya.height);
}

function addBoarder(context,wid,hei){
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
