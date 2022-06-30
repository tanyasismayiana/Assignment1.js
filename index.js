
for(let x=1; x<1000; x++){
    if(x%3==0 && x%5==0){
        console.log("FizzBuzz")
    }
    else if(x%3==0){
        console.log("Fizz")
    }
    else if(x%5==0){
        console.log("Buzz")
    }
    else{
        console.log(x)
    }
}


var sum=0
for(let n=0; n<1000; n++){
    if(n%3==0 || n%5==0){
        sum+=n
    }
}
console.log(sum)


for(let t=0; t<20; t++){
    if(t%2==0){
        console.log(t + " is even")
    }
    else{
        console.log(t+ " is odd")
    }
}

let num =[-2,4,-5,6,0];
largest=r[0];
for(let i=0; i<num.length; i++){
    if(r[i]>largest){
        largest=r[i];
    }
}
console.log(largest)

let num1=10
let num2=20
if(num1 > num2){
    console.log(num1 + " is greater than " + num1)
}
else if(num1<num2){
    console.log(num2 + " is greater than "+ num2)
}
else{
    console.log(num1 + " is equal to " + num2)
}

for(let year=2000; year<=2022; year++){
    if((year%400==0) || (year%4==0) && (year%100!=0)){
        console.log(year)
    }
}
function one(){
    var x="Tanyasis"
    

    function two(){
    var name="Mayiana"
    console.log(x)
    console.log(name)  
}
two()
}
one()


console.log(number);
var number=2;
console.log(number)
main();
function main(){
console.log("Hello")

}

