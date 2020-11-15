(function(window){
	var ramgreet = {};
	ramgreet.name = "ram";
	var greet = "Hi ";
	ramgreet.getage = function(){
			console.log(greet + ramgreet.name)
		}

	window.ramgreet = ramgreet;

})(window);
