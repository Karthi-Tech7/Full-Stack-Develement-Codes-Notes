// console.log("welcome");
// alert("Accept me");
// alert("Hi,How are you");
// alert("I am learning javascript Course")

//variable
//var-initl

// var a = 10;
// console.log(a);
// b;
// console.log(b);

//var-reassig

// var b =10;
// console.log(b);
// b=20;
// console.log(b);

//var-redeclar

// var c =40;
// console.log(c);
// var c = 50;
// console.log(c);

//scope

// {
//     var c = 70;
//     console.log(c);
// }
// console.log(c);

// var e = 67;
// {
//     console.log(e);
// }
// console.log(e);

//let-init

// let a = 10;
// console.log(a);
// var d;
// console.log(d);

//let-reassig

// let b = 30;
// console.log(b);
// b = 50;
// console.log(b);

//let-redeclaar

// let c = 78;
// console.log(c);
// let c = 40;
// console.log(c); 

//let-scope

// {
//     let d=30;
//     console.log(d);
// }
// // console.log(d);
// let e =30;
// {
//     console.log(e);
// }
// console.log(e);

//const-init

// const a = 10;
// console.log(a);
// const b;
// console.log(b);

//const-reassig

// const c = 20;
// console.log(c);
// c=30;
// console.log(c);

//const-redeclar

// const d = 30;
// console.log(d);
// const d =40;
// console.log(d);

//const-scope

// {
//     const e = 20;
//     console.log(e);
// }
// // console.log(e);

// const e = 40;
// {
//     console.log(e);
// }
// console.log(e);

//variables ->primitive and numbers
//number
// let a = 10;
// let b=20;
// console.log(typeof(a));

// //string
// let c = "string";
// let d ='string also';
// console.log(typeof(c));
// console.log(typeof(d));

// //boolean
// let e=true;
// let f=false;
// console.log(typeof(e));
// console.log(typeof(f));

// //undefined
// let aa = 10;
// let bb;
// console.log(typeof(aa));
// console.log(typeof(bb));

// //null
// let cc = null;
// console.log(typeof(cc));

//non-primitive datatype to create object
// var details={
//     name:"max",
//     age:20,
//     qualif:"B.Tech IT",
//     address:{
//         dis:'chennai',
//         pin:12355,
//         location:'velachery'
//     },
//     course:'java fsd'
// };
// console.log(details);
//Using two methods to get values
//dot and bracket notation
// console.log(details.name);
// console.log(details['address']['dis']);

//print only keys
// console.log(Object.keys(details));
// //print only values
// console.log(Object.values(details));
//print only entries
// console.log(Object.entries(details));

//delete key 
// console.log(delete details.age);
// console.log(details);
// //add key
// console.log(details.age=21);
// console.log(details);
// //upadte key
// console.log(details.name="liley");
// console.log(details);

//operators
//arithmetic oper
// let a = 10;
// let b = 2;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);

// //increase
// var c = 1;
// console.log(c++);
// console.log(c);
// console.log(++c);
// console.log(c);

// //decrease
// var d = 5;
// console.log(d--);
// console.log(d);
// console.log(--d);
// console.log(d);

//assignment oper
var a = 20;
var b = 10;
console.log(a=b);
console.log(a+=b);
console.log(a-=b);
console.log(a*=b);
console.log(a/=b);
console.log(a%=b);
