var amount=500;
if (amount<1000){
  alert("It's less than 1000");
}

var a= 5;
var b = "5";
if (a === b) {
alert("Yes, they’re equal");
} else {
alert("No, they’re not equal");
}

var foo=10;
var bar=20;
if(foo<bar){
  console.log("foo is less than bar");
  console.log(foo);
  console.log(bar);
}

function arbitraryName (x,y){
  var myVar= x * y;
  console.log(myVar);
}

var myResult = arbitraryName(6,9);


var myArray=[10,20,30,40,50]
console.log(myArray.length);

var foo = 5;
var bar = 5;
console.log(foo+bar);

var foo = "5";
var bar = "5";
console.log(foo+bar);

var x = 200.6;
var y = Math.round(x); //note captialization
console.log(x);
console.log(y);

var phrase = "This is a simple phrase.";
console.log(phrase.length);
console.log(phrase.toUpperCase);
console.log(phrase.toLowerCase);
var words = phrase.split(""); //could also pass in a comma

var today = new Date();
console.log(today);

var y2k = new Date(2000, 0, 1);

var myDate = new Date(1955, 1, 24);
console.log( "Steve Jobs was born on: ", myDate.getDay() );

var d = new Date();
var weekday = new Array(7);
weekday[0]=  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[d.getDay()];

var myDate = new Date(1955, 1, 24);
console.log( "Steve Jobs was born on: ", n );

var player1 = {name:"Fred", score: 10000, rank:1 };
var player2 = {name:"Sam", score: 8000, rank:5 };
console.log(player1.name);

function playerDetails() {
//display information about each player
console.log(this.name + " has a rank of: " + this.rank + " and a score of " + this.score);
}
player1.logDetails = playerDetails;
player2.logDetails = playerDetails;
player1.logDetails();
player2.logDetails();
