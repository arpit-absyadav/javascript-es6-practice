class Person {
  constructor(person) {
    this.fname = person.fname;
    this.lname = person.lname;
    this.age = person.age;
  }
  hello() {
    return "Hello, I am " + this.name + ".";
  }
   fullinfo() {
    return `${this.fname} ${this.lname} ${this.age}`
  }
//   set age(years){
//       this.age = years
//   }
}
// Classes do not have explicit class variable declarations,
//  but you must initialize any variable in the constructor.

// class Actor Exetends the person
class Actor extends Person {
  hello() {
    return super.hello() + "I am an actor.";
  }
   fullinfo(){
      return super.fullinfo();
  }
}

// var sanjaydutt = new Actor("Sanjay Dutt");
// console.log(sanjaydutt.hello());

var sanjaydutt = new Actor({fname:'Sanjay', lname:'Dutt', age: 50})
console.log(sanjaydutt.fullinfo())