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
// var a = 20;
// var b = 10;
// console.log(a=b);
// console.log(a+=b);
// console.log(a-=b);
// console.log(a*=b);
// console.log(a/=b);
// console.log(a%=b);

//comparison oper
//relational operator
// var a = 10;
// var b = 5;
// console.log(a<b);
// console.log(a<=b);
// console.log(a>b);
// console.log(a>=b);

// //equality oper
// var c = 5;
// console.log(c===5);
// console.log(c!==5);

// //strict equality === 
// console.log(1===1);
// console.log('1'===1); // to check the value keyword type and compare keyword type

// //lose equality oper
// console.log(1==1);
// console.log('1'==1);//  this is == called compare only to value 

// //string comparison
// console.log('name'>'age'); // to compare ascii value base

// //comparison diff types
// console.log('1'==1);
// console.log(true==1); // booolean true & false have base on value 1 & 0 to compare 1==1

// //logical oper
// //and
// console.log(true && true);
// console.log(true && false);
// console.log(false && false);

// //or
// console.log(true || true);
// console.log(true || false);
// console.log(false  || false);

// //not
// console.log(!true);
// console.log(!false);

// //ternary oper
// var mark = 35<40 ? "pass":"fail";
// console.log(mark);

// //bitwise oper->binary numb
// console.log(1&2);
// console.log(1|2);

// control Statements
// condition statements
//if & else
// var age=18;
// var type="student";
// if(age>=18 && type=="student"){
//     console.log('apply eligible');
// }else{console.log("not eligible");
// }

//else if
// let a=70;
// if(a>=35 && a<=40){
//     console.log("poor");
    
// }
// else if(a>=50 && a<=60){
// console.log('average');
// }
// else if (a>=70 && a<=80) {
//     console.log('good');
    
// }else if(a>=90 && a<=100){
//     console.log("Top grade");
// }else{
//     console.log('fail');
    
// }

//switch
// var weeks ="5";
// switch (weeks) {
//     case '1':{
//         console.log('Monday');
//          break;
//     }
//     case "2":{
//         console.log('Tuesday');
//         break;
//     }
//     case '3':{
//         console.log('Wednesday');
//         break;
//     }
//     case '4':{
//         console.log('Thursday');
//         break;
//     }
//     case '5':{
//         console.log('Friday');
//         break;
//     }
//     case '6':{
//         console.log('saturday');
//         break;
//     }
//     case '7':
//         {
//             console.log('Sunday');
//             break;
//         }
//     default:
//         break;
// }

//looping statement
//for
// for (let i= 0; i <=10; i++) {
//    console.log(i);
// }
// for(var i=10;i>=1;i--)
// {
//     console.log(i); //reverse
    
// }

//while
// var i = 1;
// while (i<=10) {
//     console.log(i);
//     i++;
// }

// do while
var j = 1;
do {
    console.log(j);
    j++;
}while (j<=10);