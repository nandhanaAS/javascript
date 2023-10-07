console.log('hello')
// alert('warning')
// variables
var a=9;
var a=10;
console.log(a);// block1

{
    
var a=20;
console.log(a); //block2   

}
let b=23;
console.log(b);
{
    let b=34;
   console.log(b);
}
console.log(b);
//const
const t=30;
console.log(t);
{
    const t=90;
    console.log(t)

}
console.log(t);
//date type
var nam='nandhana'
console.log(typeof(nam));
//numbers
var count=10;
console.log(typeof(count));
var count=10;
console.log(typeof(count));
//boolean
var bb=true;
console.log(typeof(bb));
var gttype;
console.log(typeof(gttype));
//arrays
let arr=['blue','red','white',10]
console.log(arr[1]);
console.log(arr.length);
arr.push('violet');
console.log(arr);
arr.pop()
console.log(arr);
//javascripts objects
let car={
    mileage:100,
    model:'110',
    colour:'red'
}
console.log('car');
console.log(car.model);
console.log(car.mileage);
let person=new Object();
person.gender='male';
person.height=100;
console.log(person);
//variables
var A=7,c=5;
console.log(A+c);
var a=7, c=5;
console.log(a-c)

var a=10
var d=++(a);
console.log(b);
console.log(a);
//if else
if(a==b && a==10) {
    console.log (' a is equal to b')
}else{
    console.log('a is not equal to b and a is not 10')
}
 if (c==b){
    console.log(' c equal to d')
 }else{
    console.log('c not egual to d')
 }
 if (c==d){
    console.log('c equal to d')
 }else{
    console.log('c not equal to d')
 }
 var e=10;
 var f=20
if(e==f && e==20){
     console.log('e is great than b')
}else {
    console.log('e is smiler than f')
}     
var add=6;
add+=3;
console.log(add);

var add=6;
add-=3;
console.log(add);

var a=20;
var c=30;
var d=40;
console.log(add);
var exp=a+b*(c-d)-7;
console.log(exp)

//function
function display(name){
    console.log( "hi"+name+' welcome to js');
}
display('NANDHANA');//FUNCTION CALL
function addition(a,n){
    var result=a+n;
    return result;
}
 var result =addition(10,10);
console.log('the sum is'+result);
  
 function subtraction(a,n){
    var result =a-n;
    return result;
 }
 subtraction(10,10);
 
 var result=subtraction(10,10)
 console.log('the sun is'+result);

