document.getElementById("demo").innerHTML="Hello Dolly";
document.getElementById("demo1").innerHTML="Hello Tanyasis";
 Displaying a simple text message
 alert(  "Hello World!"  );  // Outputs: Hello World!
 // Displaying a variable value
 var  x = 10;
 var  y = 20;
 var  sum = x + y;
 alert(sum);  // Outputs: 30

var  name = window.prompt(  "Enter your name: "  ); 
document.write(  "Your name is "  + x)

let  obj = {}; 
obj.x = 3; 
console.log(obj.x);  // Prints 3. 
console.log(obj);



const  key =  "y"  ; 
obj[key] = 5; 
console.log(obj[key]);  // Prints 5. 
console.log(obj);

var  foo = [  'one'  ,  'two'  ,  'three'  ];
var students = [['Nakayiza', 80], ['Ruth', 77], ['Tanya', 88], ['Isa', 95], ['Winfred', 68]];

var Avgmarks = 0;

for (var i=0; i < students.length; i++) {
        Avgmarks += students[i][1];
        var avg = (Avgmarks/students.length);
}

console.log("Average grade: " + (Avgmarks)/students.length);

        if (avg < 60){
          console.log("Grade : F");      
          } 
        else if (avg < 70) {
                console.log("Grade : D"); 
                  } 
        else if (avg < 80) 
             {
                console.log("Grade : B"); 
        } else if (avg < 90) {
                console.log("Grade : A-"); 
        } else if (avg < 100) {
                console.log("Grade : A"); 
}













<!-- <p id="demo">Hi</p>
<p id="demo1">Hello</p>
<h1>This is a heading</h1> 
<p>This is a paragraph of text.</p> 
<  button  type  =  "button"  onclick  =  "document.write('Hello World!')"  >Click Me</  button  >  -->

<!-- <p id=  "greet"  ></  p  > 
<p id=  "result"  ></  p  > 
<script> 
// Writing text string inside an element 
document.getElementById(  "greet"  ).innerHTML =  "Hello  World!"  ; 
<script src="index.js"></script> -->

