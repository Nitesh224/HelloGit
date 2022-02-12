//Array ->is a collection of elements
let cars=['BMW',"Audi","MG",1,2,3,true];
console.log(cars);
//in js we can store different values of different types
//accessing the elements of arrays
console.log(cars[0]);
console.log(cars[3]);
//replacing elements in array
cars[3]="Mahindra";
console.log(cars[3]);
//adding elements in an array
cars[7]="Honda"
console.log(cars);
//Methods of an Array
// pop method ->this method removes the element from the last of array
cars.pop();
console.log(cars);
//push method ->it pushes a element at thee end of array
cars.push("TATA");
console.log("after pushing an element");
console.log(cars);
//unshift method-->this adds element at the starting of array
cars.unshift("JLR");
console.log(cars);
cars.unshift("Mustang");
console.log(cars);
//shift->it removes element from 0th element of the array.
cars.shift();
cars.shift();
console.log(cars);
console.log(cars.length);
//2d array
let array2d=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log(array2d);
console.table(array2d);
console.log(array2d[1][2]);