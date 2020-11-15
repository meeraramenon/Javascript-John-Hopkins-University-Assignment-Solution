(function(window){
	var meeragreet = {}; //if i dont use a nampaspace that is an obj in this case the variable will get assigned same values from script 2
	meeragreet.name = "meera";
	var greet = "Hello "; //if i use just like this greet will get overwritten in the sript 2
	meeragreet.getage = function(){
		console.log(greet + meeragreet.name);
	};

	window.meeragreet = meeragreet; //expose it to the outsdie do that we can call from app.js
	
})(window);
