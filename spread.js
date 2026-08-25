/*let arr1=[1,2,3,4];
let arr2=arr1;
arr2.push(5);
console.log(arr1);  // [1, 2, 3, 4, 5] - arr1 is also modified because arr2 is a reference to the same array

// To create a new array that is a copy of arr1, we can use the spread operator
let arr3=[...arr1];
arr3.push(6);
console.log(arr1);  // [1, 2, 3, 4, 5] - arr1 is unchanged because arr3 is a new array
console.log(arr3);  // [1, 2, 3, 4, 5, 6]
// The spread operator can also be used to combine arrays
let arr5=[7,8,9];
let arr4=[...arr1, ...arr3,...arr5];
console.log(arr4);  // [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6] - arr4 is a new array that combines arr1 and arr3
let s="Javascript";
console.log(s.split(""));
console.log({...s});
*/
/*let arr1=[1,2];
function add(a,b){
    console.log(a+b);
}
//add(arr1[0],arr1[1]);
add(...arr1);  // The spread operator allows us to pass the elements of arr1 as individual arguments to the add function
*/
/*let obj1={name:"John",age:30};
console.log(obj1.name);
let obj2=obj1;
obj2.name="Jane";
console.log(obj1);  // "Jane" - obj1 is also modified because obj2 is a reference to the same object
console.log(obj2);  // "Jane"*/
/*let obj2={...obj1};
obj2.name="Jane";
console.log(obj1);  // "John" - obj1 is unchanged because obj2 is a new object
console.log(obj2);  // "Jane" - obj2 is a new object with the same properties as obj1, but with a different name property*/
/*let obj1={name:"John",age:30};
let obj2={class:"A",city:"Agra"};
let obj3={...obj1,...obj2};   
console.log(obj3);  // {name: "John", age: 30, class: "A", city: "Agra"} - obj3 is a new object that combines the properties of obj1 and obj2
obj3.age=35;
console.log(obj3);
console.log(obj1);
*/
///Rest operator
/*let arr1=[1,2,3,4,5];
function print(a,b,...c){
    console.log(a,b,c);
}
print(...arr1);  // The spread operator allows us to pass the elements of arr1 as individual arguments to the print function
//print(arr1[0],arr1[1],arr1[2]);  // This is equivalent to the above line, but less concise
*/
let obj1={"name":"John","age":30,"address":{"city":"Agra","state":"UP"}};
let{name,age,address:{city:mycity,state}}=obj1;  // The rest operator allows us to extract the properties of an object and assign them to variables with the same name, while also collecting the remaining properties into a new object called rest
console.log(mycity);  // "John" 30 "Agra" "UP" - name, age, city and state are extracted from obj1
