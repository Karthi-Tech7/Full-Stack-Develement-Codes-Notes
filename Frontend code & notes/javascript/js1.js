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
// var j = 1;
// do {
//     console.log(j);
//     j++;
// }while (j<=10);

//for in loop(index base)
//object
// var detail={
//     name:'arun',
//     age:20,
//     education:'b.tech',
//     dob:'19/2/2004'
// };
// for(const key in detail)
// {
//     // console.log(key);
//     console.log(detail[key]);
//     console.log(key+':'+detail[key]);
    
// }

//array
// var a=['html',300,'name',"value",2.30];
// for (const key in a) { 
//     // console.log(key);//p>rint an index value
//     console.log(a[key]);
    
// }

// for of loop
// var b =['name','age','edut','dob'];
// for (const element of b) {
//     console.log(element);
    
// }

//jumping statement
//break
// for (let i = 0; i <=10; i++) {
//    if (i==7) {
//     break;
//    }
//     console.log(i);  
// }

//continue
// for (let i = 0; i<=10; i++) {
//    if (i==5) {
//     continue;
//    }
// console.log(i);

// }

//array-is index base
// var a = ['name',400,6.7,"value",true];
// console.log(a[3]);// using get base index position

// //value add
// a[0]='age';
// console.log(a);

// //delete value
// delete a[3]
// console.log(a);//but memory still there

// //flat
// var b=[[1,2],[3,4],[5,6],[7,8]];//separate value add same line 
// console.log(b.flat());

// //toString-convert values into String
// console.log(b.toString());

//corret to add and delete in array elememts
// add has a three ways
//push
// console.log(a.push("hello")); //this push add value in array last order

//unshift-its adda starting array
// console.log(a.unshift(77));

//splice-its add manully order
// console.log(a.splice(4,0,"world"));// using splice (add index,delete count,add value n-words or numbers)
// console.log(a);

//delete-is also same as add formate
//pop
// console.log(a.pop());//its delete last value in array

//shift
// console.log(a.shift());//its delete the fist value of index

//splice-this using add and delete with manully
// console.log(a.splice(3,1));//its formate (del index,delete count,)
// console.log(a);

//remove all value in array
// var a=[10,20,30,40,50];
// a=[];//--set autovaraiable a using empty array and erase inside a array value also
// console.log(a);

// //Splice
// var b=[10,20,30,40,50];
// b.splice(0,b.length);
// console.log(b);//--total of length in array

// //pop
// var c=[10,20,30,40,50];
// while (c.length>0) {
//    c.pop();
// }
// console.log(c);
// c.length=0;
// console.log(c);

// //combining array of values
// var a1 =[12,34,54];
// var a2=['hello','world',"javascript"];

// //concat
// console.log(a1.concat(a2));

// //spread
// console.log(...a1,...a2); //but its not print array format so add  array=[]

// //join
// console.log(a2.join("-"));//add anything in value inbetween

// //split
// var a3="iam learning java script";
// console.log(a3.split('a'));

// //finding the elements in array
// var i=[10,20,30,20,50];
// //indexof-find the element index value
// console.log(i.indexOf(20));

// //lastindexof-find same last index of value
// console.log(i.lastIndexOf(20));

// //includes-the value in index present or not to base on boolean 
// console.log(i.includes(90));

//function
//normal function
// function value(params) {
//     var name="arun";
//     var sm = 'hi'+name+'..';
//     console.log(sm);
    
// }
// value()

// function detail(a,b) {
//     console.log(a+b);
// }
// detail(5,5)

// //arraow function
// var na=(a,b)=>{
//     let n="Total";
//     console.log(n+' of '+':'+(a*b));
    
// }
// na(4,5)

// //array of object
// var ob=[{roll:1,name:'ram',mark:30},{roll:2,name:'jai',mark:30},{roll:2,name:'ram',mark:90}];
// //find
// let result=ob.find(function (re) {
//     return re.name==='ram';
// })
// console.log(result);

// //findlast
// let r2=ob.findIndex(function (res) {
//     return res.name==='ram';
// })
// console.log(r2);

// //filter
// let r3=ob.filter(function (ret) {
//     return ret.name==='ram';
// })
// console.log(r3);

//extracting the value in array
//slice
var a =['arry','value','name','age'];
// console.log(a.slice(1,4));

// //forEach()
// a.forEach(a1 => { console.log(a1+" ");});

// //for loop array
// for(var i=0;i<a.length;i++){
//     console.log(a[i]);
    
// }

//for in loop
// for(const key in a){
//     console.log(a[key]);

// }

//for of loop
// for(const element of a){
//     console.log(element);
    
// }

//sorting 
// var a =[2,3,5,1,4,7,9,8];
// console.log(a.sort());
// var b =[20,400,30,5,78,7,3];
// // console.log(b.sort());
// console.log(b.sort(function (a,b) {return a-b}));//ascending
// console.log(b.sort((a,b)=>{return b-a}));//descending

//array of object
//base no number 
// var st = [{id:1,name:'karthi',mark:67},{id:2,name:'arun',mark:100},{id:3,name:'jai',mark:56}];
// console.log(st.sort((a,b)=>{return a.mark-b.mark}));//array of asce
// console.log(st.sort((a,b)=>{return b.mark-a.mark}));//array of desce 

//base on string ascii
// var val=st.sort((a,b)=>{//ascending 
//     if (a.name<b.name) {
//         return -1;
//     }
//     else if (a.name>b.name) {
//         return 1;
//     }
// });
// console.log(val);

// var val=st.sort((a,b)=>{//descending 
//     if (a.name<b.name) {
//         return 1;
//     }
//     else if (a.name>b.name) {
//         return -1;
//     }
// });
// console.log(val);

//reverse
// var a = [1,2,3,4,5,6];
// console.log(a.reverse());

// //every--this every like AND operator 
// console.log(a.every((b)=>{return b>7}));//true or false

// //some-this same like OR oper 
// console.log(a.some(function (c) {
//     return c>3;
// }));

//array in object level
// every
// var st = [{id:1,name:'karthi',mark:67},{id:2,name:'arun',mark:100},{id:3,name:'jai',mark:56}];
// console.log(st.every((a)=>{return a.mark>70}));
// //some
// console.log(st.some((b)=>{return b.mark>70}));

//map -to using all arithmetic oper
var a=[1,2,3,4,5];
console.log(a.map((add)=>{return add*2}));
//map-object level
var st = [{id:1,name:'karthi',last:'keyan'},{id:2,name:'arun',last:'kumar'},{id:3,name:'jai',last:'bala'}];
console.log(st.map((name)=>{return name.name+" "+name.last}));

