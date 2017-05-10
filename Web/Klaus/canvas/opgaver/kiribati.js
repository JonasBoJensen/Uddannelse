var can = document.getElementById('canvas1');
var ctx = can.getContext('2d');

//var svg = document.getElementById('mySVG');

var img = new Image();
img.onload = function() {
ctx.drawImage(img, 0, 0);
}
img.src = "https://upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Kiribati.svg"; 