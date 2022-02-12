// 3 types of function
//Normal function
//function defination
//function function_name(param1,param2){
    //do something
//}
//function invoke
//function_name(arg1,arg2)
function add(a,b){
    return a+b;
}
let ans = add(2,6);
console.log(ans);
//functions are treated as first class citizens in javascript
//->function can be returned
//->functions can be passes as parameters
 //function expression
function calculator(str,a,b){
    if(str=='add'){
        return function add(){
            console.log(a+b);
        }

    }
    //else if(str=='sub'){

   // }
}
let returnedfunc=calculator('add',2,3);
console.log(returnedfunc);
returnedfunc();
let sayHi=function(){
    console.log("Hello guys");
}
console.log(""+sayHi);
sayHi();
//IIFE-> Immediately invoke function expression
function add(a,b){
   return a+b;

}
add(2,3);
let additionIIFE=(function(a,b){
    console.log(a+b);

})(20,30);
//console.log(additionIIFE);
//console.log(additionIIFE(20,30))