let obj1={"name":"John","age":30,"address":{"city":"Agra","state":"UP"}};
/*let name=obj1.name;
let age=obj1.age;
console.log(name);
console.log(age);
let {sname,sage}=obj1;
let {name,age}=obj1;  // This is called object destructuring. It allows us to extract the properties of an object and assign them to variables with the same name.
console.log(sname);
console.log(age);*/
//console.log(obj1.address.city);  // Agra
///let{name,age,address}=obj1;  // This is called nested destructuring. It allows us to extract the properties of a nested object and assign them to variables with the same name.
/*console.log(name);  // John
console.log(age);   // 30                           
console.log(address);  // Agra*/
let{city,state}=obj1.address;  // This is called nested destructuring. It allows us to extract the properties of a nested object and assign them to variables with the same name.
console.log(city);