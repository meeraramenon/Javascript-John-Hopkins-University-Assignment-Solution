var company = new Object();
company.name = "meera";
company.age = new Object();
company.age.birth = "Jan";
company.age.number = 21;
//company.stock of company = 110; wont work
company["stock of company"] = 110
//console.log(company);*/


var company = {
	name: "meera",
	age : {
		birth: "jan",
		number: 21
	},
	"stock of": 110
};

console.log(company["age"]["birth"]);
console.log(company["name"]);
console.log(company["stock of"]);

var a = { x: 7 };
var b=a;
// console.log(a);
// console.log(b);

b.x=5;
console.log(a);
console.log(b); //basicall a value of x also changes since it is ref

console.log(this);
this.myname = "Meera";

console.log(window.myname);
console.log(this.myname); 

function Circle(radius){
	this.radius = radius; //mycircle has an object with radius 10
}

Circle.prototype.getArea = {
	function(){
		return Math.PI * Math.pow(this.radius, 2);
	}
};


var myCircle = new Circle(10); //new obj
console.log(myCircle); //the neq Circle points to this, actually vice versa

var myCircle = new Circle(20); //new obj
console.log(myCircle); //the neq Circle points to this, actually vice versa

function Square(side){
	this.side = side; //mycircle has an object with radius 10
}

var mySquare = new Square(10); //new obj
console.log(mySquare); //the neq Circle points to this, actually vice versa*/

var literalCircle = {
	radius: 10,
	getArea: function(){
		var self = this;
		console.log(this); //referes to the entire object literalCircle

		var increase = function(){
			self.radius = 20; //this makes it point to glocbal whihc is 10 so we use self to remian within scope
		}; 

        increase(); //if u dont call cant use window.radius
		console.log(this.radius);

		return Math.pow(this.radius, 2);

	}
};

console.log(literalCircle.getArea()); //without console.log returen entire obj
//with console.log above and area as well