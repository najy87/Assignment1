// -1
let str= "123"; 
console.log(Number(str) + 7); // 130 
// -2 
if (!0){ // !0 >> truthy 0 >> falsey 
    console.log("invalid");
}
else{
    console.log("not invalid");
}
// -3 
for (let i =0 ; i<10 ;i++ ){
    if( (i%2)!=0 ){
        console.log(i);
    }
}
// - 4
let arr = [1,2,3,4,5]
let newArr = arr.filter(function(element){
    if(element%2 === 0){
        return true
    }
    else{
        return false
    }
})
console.log(newArr)

// - 5 
let arr1 =[1,2,3]
let arr2=[4,5,6]
let arr3 = [...arr1,...arr2]
console.log(arr3);
// - 6
function weeks (day) {
switch(day){
    case 1 :
        console.log("sunday");
        break;
    case 2 :
        console.log("monday");
        break;
    case 3 :
        console.log("tuesday")
        break;
    case 4 :
        console.log("wednesday")
        break;
    case 5 : 
        console.log("thursday")
        break;
    case 6 :
        console.log("friday")    
        break;
    case 7 : 
        console.log("saturday") 
        break;         
}}
weeks(3);
// - 7
let words=["a","ab","abc"]
let arrLength = words.map(word => word.length)
console.log(arrLength)
// -8 
function divisible  (Number) {
    if(Number%3 === 0 && Number%5 ===0){
        console.log("Divisible by both");
    }else{
        console.log("Don't Divisible by both ");
    }
}
divisible(15)
// -9 
let squared = (Number)=>console.log(Number**2);
squared(10)

// - 10 
function destructures ({name , age }){
   return`${name} is ${age} years old `
}
console.log(destructures({name:"john",age:25}))

// - 11
function sum (a,b,c){
    console.log(a+b+c)
}
sum(1,2,3)
// - 12 
setTimeout(function(){
    console.log("Success")
},3000)
// - 13
function ifmaxValue (arr){
    let max = Math.max(...arr)
    console.log(max);
}
ifmaxValue([1,3,6,8,10])

// - 14 
function containing (obj){
  return Object.keys(obj)
}
console.log(containing({name:"john",age:30}))
// - 15
function splited (str){
    return str.split(" ")
}
console.log(splited("the quick brown fox"))

