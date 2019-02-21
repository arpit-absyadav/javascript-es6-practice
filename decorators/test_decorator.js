// function addStringToName(target, name, descriptor) {
//   const fn = descriptor.value;
//   //saving a reference to our decorated method so we can use it later

//   descriptor.value = wrestler => {
//     fn.call(target, wrestler + ' is a wrestler');
//   };
//   //replacing the decorated method (descriptor.value)
//   //this new function executes our original function (fn), that's why we saved the reference
//   //this new function adds some functionality (concatenating the string)
//   //we do this using call(), because we want to apply the right context (target)
// }

// class Wrestler {
//   @addStringToName
//   setName(name) {
//     this.name = name;
//   }
//   //set the decorator and everything works!

//   sayName() {
//     console.log(this.name);
//   }
// }

// const w = new Wrestler();
// w.setName('Macho Man');
// w.sayName(); //Macho Man is a wrestler

// need bable
