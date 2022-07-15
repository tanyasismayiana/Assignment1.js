// function sayname(){
//     var name= "Tanyasis";
//     console.log("my name is, ", name);
// }
// sayname()


// var name2 = "Mayiana"

// function sayHi(){
//     console.log(this.name2);
// }
// sayHi();


// function reverse(name){
//  let arrayName= name.split("");
//  let emptyArray = [];
//  for(let i =arrayName.length-1;i>=0; i--){
//     emptyArray.push(arrayName[i]);
//  }
//  return emptyArray.join("");
//  // ruth- length(4)
//  // ruth 0,1,2,3
//  // length -index = last index
//  // "r" "u" "t" "h"

// }

// console.log(reverse("w3resourse"));

// let numbers=[50,20,12,34,56,78,99];

// let left = 0;
// let right = numbers.length -1;

// while(left<right){
//     let swap=numbers[left]
//     numbers[left],numbers[right]=numbers[right],numbers[left];
//     left++
//     right--
//     numbers[right]=swap
//     console.log(numbers);
// }

// let a=[2,3,4,5,6,7]
// function reverseArray(){
//   if (a>1){
//       var left=0;
//      var right=a.length-1;
//  while (left< right){
//       [a[left],a[right]]=[a[right],a[left]]
//      left++;
//      right--;
//  }
//   console.log(a);
//  }
// }
// reverseArray()


// var is_array= function(input){
//     if ( toString.call(input)=="[object Array]")
//     return true;
//     return false;
// }
// console.log(is_array("tanya"))
// console.log(is_array(["tanya","winnie","Fred"]))


// let x = ["tanya","mayiana"]
// for(const a of x ){

// }
// console.log(x[1]);


// let names =["Tanyasis","Virginia","Clint","Mark"];
// names.shift();// remove the first element
//  names.unshift("Sakina")// Adds the first element 
//  names.pop()//remove the last index
// names.push()// adds the last elements
// names.push("Jeff")
// console.log(names)
// let new_x= x.split("");
// for(let i=0;i<new_x.length;i++){
//     if(new_x[i].toLowerCase()===new_x[i]){
//         new_x[i].toLowerCase();
//         new_x[i].toUpperCase
//         }
//         return new_x.join("");

//     }
//     console.log(new_x)

// let x = "The Quick Brown Fox";
// for(let i = 0; i < x.length;i++){
//     if(x[i].toUpperCase===x[i]){
//         console.log(x[i])
//     }
// }

 
// function foo(){
//     if(true){
//         var friuts= "Apple";
//         let f1="Mango";// exist inside the block scope
//         const f2="Kiwi";// exist inside the block scope
//     }
//     console.log(friuts);
//     console.log(f1);//undefined
//     console.log(f2);//undefined
    

// }
// foo();

// function split_sentence(sentence){
   

  //  function charSwap(string){
  //     let wordArray = string.split(" ")
  //     let result = [];
  //     wordArray.map(word => {
  //       let wordSplit = word.split("")
  //       for(let char in wordSplit){
  //         if(wordSplit[char] === wordSplit[char].toLowerCase()){
  //           wordSplit[char] = wordSplit[char].toUpperCase()
  //         } else {
  //           wordSplit[char] = wordSplit[char].toLowerCase()
  //         }
  //       }
  //       result.push(wordSplit.join(""))
  //     })
  //     return result.join(" ")
  //   }



    // let a = [2,4,7]
    // console.log({a});
    // let b=new Array(2,4,7,8,9,3)
    // let c= b.map(item=>item*2)
    // // console.log({a});
    // console.log(c);
    // a[1]=35//cghange values inside an array

  // let fruits=["mango","apple","orange"];
  // let new_fruits=fruits.map(item=> item.toLocoleLowerCase())
  // console.log(new_fruits);


  //  let person ={
  //   name:"John",
  //   age:28,
  //   gender:"Female",
  //   hobby: function(activity){
     
  //     return `My name is ${this.name} I love ${activity}`

  //    }
  //   //  hobby:(activity)=>`i love", ${activity}`// other method for hobby

  //  }
  //  console.log(person.gender);
  //  person.country="Uganda"
  //  person["nationality"]="Ugandan"
  
  
  //   console.log(person);
  
  //    console.log(person.hobby("coding"));

  //  let student= Object.create(person);
  //  student["name"]="Mary"
  //  student.age=25
  //  console.log(student.name);
  //  console.log(student.age);

fruits=new Array("Mango","Banana","Apple","Kiwi");//making aray using new key word
console.log(fruits)

var fruits={
  mango:20,
  Banana:30,
  orange:10,

}

















