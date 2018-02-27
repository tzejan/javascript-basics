var assertEquals = require("./test-helper");

/* ---------------------- EXERCISE 1 ---------------------- */
// Define a function that returns 'hello world'
function hello() {
  return "hello world";
}

assertEquals(hello(), "hello world");

/* ---------------------- EXERCISE 2 ---------------------- */
// Define a function, greet(personName), that returns 'hello specificPersonName'. If no name is supplied, return 'hello world'
function greet(name= "world") {
  return "hello " + name;
}
assertEquals(greet('tom'), 'hello tom')
assertEquals(greet(), 'hello world')

/* ---------------------- EXERCISE 3 ---------------------- */
// Define a function, add2Numbers(num1, num2), to return the sum of 2 values
function add2Numbers(num1, num2){
  return num1+num2;
}

assertEquals(add2Numbers(1, 1), 2)
assertEquals(add2Numbers(100, 1), 101)

/* ---------------------- EXERCISE 4 ---------------------- */
// Define a function, invertCase(someString), that returns the input string with its case inverted
function invertCase(someString){
  result = someString.split('');
  for (i = 0; i < result.length; i++){
    if (result[i] >= 'a' && result[i] <= 'z'){
      result[i] = result[i].toUpperCase();
      continue;
    }
    if (result[i] >= 'A' && result[i] <= 'Z'){
      result[i] = result[i].toLowerCase();
    }
  }
  return result.join('');
}

assertEquals(invertCase('Hello'), 'hELLO')
assertEquals(invertCase('hELLO wORLD'), 'Hello World')
