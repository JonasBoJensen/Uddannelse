// main.js
define(function (require) {
    var shirt = require("./shirt");
    var logger = require("./logger");

    //alert("Shirt color is: " + shirt.color);
    logger.logTheShirt();
	console.log("=> Shirt color is: " + shirt.color);
});