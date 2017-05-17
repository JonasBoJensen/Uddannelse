function init(){
	createBahrainFlag();
	}

function createBahrainFlag(){
	var canvas = document.getElementById("bahrain");
	var wid = canvas.width;
	var hei = canvas.height;
	
	var context = canvas.getContext("2d");
		context.fillStyle = "#CE1126";
		context.fillRect(0,0,wid,hei);
		
	
	var baseX = wid*.25;
	context.fillStyle = "#ffffff";
	context.beginPath();
	context.lineTo(baseX,0);
	
	var zagHeight = hei/5;
	for(var i=0; i< 5; i++){
		context.lineTo(baseX +25 , (i+.5)*zagHeight);
		context.lineTo(baseX  , (i+1)*zagHeight);
		 	
	}

	context.lineTo(0,hei);
	context.lineTo(0,0);
	context.closePath();
	context.fill();

	addBoarder(context,wid,hei);

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
