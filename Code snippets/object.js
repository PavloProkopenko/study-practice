// Testing objects

let person = {
  name: "Some name",
  age: 100,
  printIntroduction: function () {
    console.log(`Hi, my name is ${this.name}. I'm ${this.age} years old`);
  },
};
console.log("Creating object with literal:");

console.log(person);

// .create - creates a new object, using an existing object as the prototype of the newly created object

let me = Object.create(person);

me.age = 19;
me.name = "Paul";

console.log("\nAfter .create:");
me.printIntroduction();

// .assign - copies all enumerable own properties from one
// or more source objects to a target object. It returns the modified target object.

let target = { a: 1, b: 2 };
let source = { b: 4, c: 5 };

let returnedTarget = Object.assign(target, source);

console.log("\nObject after assign: ", returnedTarget);
console.log("Equals of objects: ", returnedTarget === target);

// .keys - return keys of object

console.log("\nKeys of object me: ", Object.keys(me));

// .values - return values of object

console.log("\nValues of object me: ", Object.values(me));

// .entries - returns an array of a given object's own enumerable string-keyed property key-value pairs.

console.log("Result of .entries: ", Object.entries(me));

// .seal - prevents extensions and makes existing properties non-configurable.

const object1 = {
  property1: 42,
};

Object.seal(object1);
object1.property1 = 33;
console.log(object1.property1);
// Expected output: 33

delete object1.property1; // Cannot delete when sealed
console.log(object1.property1);
// Expected output: 33

// .isSealed - checking if object sealed

console.log("\nReturn of isSealed: ", Object.isSealed(object1))


// .freeze - freezes object
// .isFrozen - checks if object is frozen

Object.freeze(me)
console.log("Return of isFrozen: ", Object.isFrozen(me))

delete me // You also can't delete it
console.log(me)

// .is - compare two variables (more effective than ===)

console.log("\nReturn of .is: ", Object.is(1, 1))
console.log("Return of .is: ", Object.is(1, 2))
console.log("Return of .is: ", Object.is(returnedTarget, target))

// .preventExtensions - prevents new properties from ever being added to an object

Object.preventExtensions(target)