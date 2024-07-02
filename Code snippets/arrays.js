// Testing array
const items = [
  { name: "Laptop", price: 1500 },
  { name: "Keyboard", price: 100 },
  { name: "HDMI cable", price: 10 },
];

console.log("Array: ", items);

// Adding element to array

items.push({ name: "Mouse", price: 5 });

console.log("Array after adding: ", items);

// Deleting element from array

items.pop();

console.log("Array after pop: ", items);

// Searching element in array

const prices = [100, 200, 250, 500, 1000];

const priceLessThan500 = prices.find((item) => item < 500); // find first which return true
console.log(priceLessThan500);

// Method join

const names = ["Laptop", "Mouse", "Keyboard"];
console.log(names.join("; "));
const index = names.indexOf("Mouse");
console.log({ index });

/**
 *  JS Array MDN
 * .entries() - возвращает новый объект итератора массива Array Iterator, содержащий
 * пары ключ / значение для каждого индекса в массиве.
 * .findLast()
 * .reduce()
 * .some()
 * .every()
 * .flat()
 * .reverse()
 * .sort()
 * .filter()
 * .flatMap()
 * .shift()
 * .slice()
 * .findIndex()
 * .forEach()
 * .unshift()
 */

// .of - cоздаёт новый экземпляр массива Array из произвольного числа аргументов,
// вне зависимости от числа или типа аргумента.

const array = Array.of(7); // масив с одним елементом
const arrayWith3Numbers = Array.of(1, 2, 3); // масив с 3 элементами
console.log(array);
console.log(arrayWith3Numbers);

const emptyArray = Array(7);

console.log(emptyArray);

// Метод Array.from() создаёт
//новый экземпляр Array из массивоподобного или итерируемого объекта.

console.log(Array.from([1, 2, 3], (x) => x ** 2));

// Метод at() принимает значение
// в виде целого числа и возвращает элемент массива с данным индексом

console.log(`An index of ${1} returns ${arrayWith3Numbers.at(1)}`);
console.log(`An index of ${-1} returns ${arrayWith3Numbers.at(-1)}`); // отсчет с конца

// Метод fill() заполняет все элементы массива от начального до конечного индексов одним значением.

const array1 = [1, 2, 3, 4];

// Fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]

// Fill with 5 from position 1
console.log(array1.fill(5, 1));
// Expected output: Array [1, 5, 5, 5]

console.log(array1.fill(6));
// Expected output: Array [6, 6, 6, 6]

// Метод some() проверяет, удовлетворяет ли какой-либо элемент массива условию, заданному в передаваемой функции.

const even = (element) => element % 2 === 0;
console.log("If array has even element: ", array1.some(even));

// flat - возвращает новый массив, в котором все элементы вложенных подмассивов были рекурсивно "подняты" на указанный уровень depth.

var arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

var arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

var arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

var arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Метод forEach() выполняет указанную функцию один раз для каждого элемента в массиве.

array1.forEach((element) => console.log(element));

// Метод map() создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.

const numbers = [1, 4, 9];
const doubles = numbers.map((num) => num * 2);
// теперь doubles равен [2, 8, 18], а numbers всё ещё равен [1, 4, 9]

var total = [0, 1, 2, 3].reduce(function (a, b) {
  return a + b;
});
console.log(total)
// total == 6


//  Метод join() объединяет все элементы массива (или массивоподобного объекта) в строку.

const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(''));
// Expected output: "FireAirWater"

console.log(elements.join('-'));
// Expected output: "Fire-Air-Water"

// Метод shift() удаляет первый элемент из массива и возвращает его значение. Этот метод изменяет длину массива.

var myFish = ["ангел", "клоун", "мандарин", "хирург"];

console.log("myFish до: " + myFish);
//myFish до: ангел,клоун,мандарин,хирург

var shifted = myFish.shift();

console.log("myFish после: " + myFish);
//myFish после: клоун,мандарин,хирург

console.log("Удалён этот элемент: " + shifted);
//Удалён этот элемент: ангел

// unshift - добавляет в начало

// Метод slice() возвращает новый массив, содержащий копию части исходного массива.

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]


// Метод splice() изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые

var myFish = ["angel", "clown", "trumpet", "sturgeon"];
var removed = myFish.splice(0, 2, "parrot", "anemone", "blue");

// myFish равен ["parrot", "anemone", "blue", "trumpet", "sturgeon"]
// removed равен ["angel", "clown"]

// Метод sort() на месте сортирует элементы массива и возвращает отсортированный массив.
var numbers1 = [4, 2, 5, 1, 3];
numbers.sort(function (a, b) {
  return a - b;
});
console.log(numbers1); // [1, 2, 3, 4, 5]


const months = ["Jan", "Mar", "Apr", "May"];

// Inserting an element at index 1
const months2 = months.toSpliced(1, 0, "Feb");
console.log(months2); // ["Jan", "Feb", "Mar", "Apr", "May"]

// Deleting two elements starting from index 2
const months3 = months2.toSpliced(2, 2);
console.log(months3); // ["Jan", "Feb", "May"]

// Replacing one element at index 1 with two new elements
const months4 = months3.toSpliced(1, 1, "Feb", "Mar");
console.log(months4); // ["Jan", "Feb", "Mar", "May"]

// Original array is not modified
console.log(months); // ["Jan", "Mar", "Apr", "May"]


/**
 * The with() method of Array instances is the copying version of using the bracket notation to change 
 * the value of a given index. It returns a new array with the element at the given index replaced with the given value.
 */

const arr = [1, 2, 3, 4, 5];
console.log(arr.with(2, 6)); // [1, 2, 6, 4, 5]
console.log(arr); // [1, 2, 3, 4, 5]
console.log(arr.with(2, 6).map((x) => x ** 2)); // [1, 4, 36, 16, 25]