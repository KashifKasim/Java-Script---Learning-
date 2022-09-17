console.log("This is project RF150")
const _cl = console.log

/*

Alt+Shit+A = this should bring the opening and ending comment

testVariable =1;
VTT1 = typeof testVariable;
VTT2 = typeof (testVariable);

console.log(VTT1);              //out is number
console.log(VTT2);              //output is number irrespective of brackets or not

*/


/*  
var a = 123;
var b = "2"


console.log ("a " + typeof (a));
console.log ("b " + typeof (b));

//J.Script itself tries to convert the string to number and then performs the mathematical function
console.log (a * b)   //out would be 246

// here Jscript assume + sign as used for the concatenation since one number is sting and the other is number
console.log (a + b)     //here output would be 1232

*/

/* 
const _cl = console.log

let lang = "JavaScript"
let mesg = "Lets learn" + `${lang}`

_cl(mesg);

_cl(mesg);


console.log(mesg)

*/



/*

 //project exercise 2.3

var a =prompt()**2
var b =prompt()**2
var c = (a + b) **0.5

alert (c.toFixed(2))

 
*/


/* 

//Assignment Operator
let x = 4
x+=2

_cl(x)          //6

let y= 4
y-=2
_cl(y)          //2

*/


/* 


//Chaptter 2 Project

// miles to Kilometers converter


let mtk = 1.60934
let input = prompt("Enter mile to be converted to kilometers" , "enter miles for conversion" | Number) ;
let cv = (input * mtk).toFixed(4)

_cl("The distance of " + `${input}` + "kms is equal to "  +`${cv}` + " miles" );

*/


var a =prompt()
var b =prompt()
var c = ((a*a) + (b*b)) ** 0.5

alert (c.toFixed(2))



