// starting JS -> JavaScript
// var let const
//variable declaration
var a;// int string float , it can be anythhing

//variable initialization
a=10;
console.log(typeof(a));
console.log(a);

a ="hello";// reintialize of variable a
console.log(a);

//typeof operator-> it tells us the type  data stored in variable a;
a=true;
console.log(a);
console.log(typeof a)

a= null;
console.log(a);
console.log(typeof a);
//Number

var num = 10;
console.log(num);
num = 2.4;
console.log(num);
 //Boolean
 var t=true;
 var f=false;
 console.log(t);
 console.log(f)
 //Strings
 // "", '',``
 //single quotes ,double quotes, backtick
 var str = 'a';
 console.log(typeof str);
 var str1="How you doin ?\ni am fine.How about you ?"
 //backslash n("\n")
 var b=`hi hope you guys are able to 
 grasp the concept`;
 console.log(str1);
 console.log(b);
 var num = 200;
 console.log(`half of ${num} is ${num/2}`);
 // computing is done first inside the curly braces then string is printed.
 //var has some problem
 // 1) redeclaration is allowed
 var r ="hello"
 console.log(r);
 var r=100;
 console.log(r);
 //overcome karne ke liye
 // let keyword is used
 let l=100;
 console.log(l);
 //let l="200";//SyntaxError: Identifier 'l' has already been declared
 console.log(l);
 //we can reintialize a variable but we cannot redeclare it.
 l=300;
 console.log(l);
 //loops in JS
 var num =10;
 for(var i=0;i<num;i++){
     if(i%2==0){
     console.log("num is even");
     }
 }
 //const keyword
 const a=2;//na he redeclare na he reintialize
 console.log(a);
 //const a=5;
 //TypeError: Assignment to constant variable
 a=4;
