// class Student{
//     constructor(name,age,gender){
//       this.name=name
//       this.age=age
//       this.gender=gender
//     }
//   }
  
//   let studentTanya=new Student("Tanya" ,21,"Female");
//   console.log(studentTanya);

// //   Student.prototype.nationality="Kenyan"
//   Student.prototype.nationality= function(nationality){
//     return `I am ${nationality}`
//   }
//   console.log(studentTanya.nationality("Kenyan"));


function Student(name, age, gender){
    this.name=name
    this.age=age
    this.gender=gender

}

let student = new Student("Jane",23,"female")
console.log(student);