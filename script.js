// Person constructor
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Add greet() to Person prototype
Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

// Employee constructor (inherits from Person)
function Employee(name, age, jobTitle) {
  // Call Person constructor to set name and age
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}

// Inherit from Person prototype
Employee.prototype = Object.create(Person.prototype);

// Restore constructor reference
Employee.prototype.constructor = Employee;

// Add jobGreet() to Employee prototype
Employee.prototype.jobGreet = function() {
  console.log(
    `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`
  );
};

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;

const p = new Person("Alice", 25);
p.greet(); 
// Hello, my name is Alice, I am 25 years old.

const e = new Employee("Bob", 30, "Manager");
e.jobGreet(); 
// Hello, my name is Bob, I am 30 years old, and my job title is Manager.

e.greet(); 
// Hello, my name is Bob, I am 30 years old.
