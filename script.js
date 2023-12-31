//Challenge 1: Given an array of strings, write a code to return a new array that only includes the strings that are 5 characters or more in length using filter method.
const strings = ['dog', 'by', 'cat', 'camping', 'large', 'flower', 'rabbit'];
const filter = strings.filter((str) => str.length >= 5);
console.log(filter);

//Challenge 2: Given an array of numbers, write a code to return a new array of squares for each item in an array using map method.
const numbers = ['45', '55', '65', '75', '85'];
const squares = numbers.map((num) => num * num);
console.log(squares);

//Challenge 3: Given an array of alphabets, write a code to concatenate all the elements of the array "alphabets" to make it as a string and print the same in console. Hint: Use reduce method.
const alphabets = ['K', 'a', 'l', 'v', 'i', 'u', 'm'];
const string = alphabets.reduce((acc, current) => acc + current, '');
console.log(string);

//Challenge 4: Given an array of numbers, write a code to return a first even number using find method.
const number = [1, 2, 3, 4, 5];
const Even = number.find((num) => num % 2 === 0);
console.log(Even);

//Challenge 5: Given a list of ranks, write a code to return the index of the first occurrence of the number 7 in the ranks array using findIndex method.
const ranks = [1, 5, 7, 8, 10, 7];
const index = ranks.findIndex((num) => num === 7);
console.log(index);

//Challenge 6: Given a list of numbers, using forEach loop iterate over each element of the array to print the output as:
// 0:2
//1:4
//2:6
//3:8
const num = [2, 4, 6, 8];
num.forEach((element, index) => {
  console.log(`${index}:${element}`);
});

//Challenge 7: Given an array of marks, using "some method", check if the following array has at least one element less than 45 and print true.
const marks = [35, 66, 25, 85, 75, 45];
const hasMarksBelow45 = marks.some((mark) => mark < 45);
console.log(hasMarksBelow45);

//Challenge 8: Given an array of numbers, write a code to check if all the array elements are positive by using "every method" and print true if all the numbers are positive, else print false.
const positive = [2, 3, 4, -1];
const areAllPositive = positive.every((num) => num > 0);
console.log(areAllPositive);

//Challenge 9: Given an array of objects, using dot and bracket notation print the output as :
//1. "Audi"
//2. "Toyota  red"
//3. "Hyundai black 5"
//4. "Renault silver 6"
const cars = [
  {
    name: 'Audi',
    color: ['black', 'red', 'grey'],
    capacity: 5,
  },
  {
    name: 'Hyundai',
    color: ['white', 'grey', 'black'],
    capacity: 5,
  },
  {
    name: 'Toyota',
    color: ['red', 'white', 'black'],
    capacity: 7,
  },
  {
    name: 'Renault',
    color: ['blue', 'silver', 'red'],
    capacity: 6,
  },
];

cars.forEach((car, index) => {
  console.log(`${index + 1}. "${car.name}"`);
  console.log(
    `${index + 1}. "${car.name} ${car.color.join(' ')} ${car.capacity}"`
  );
});

//Challenge 10: Given a nested object,
//1. Delete the "phoneno" property from the object person.

//2. Using the hasOwnProperty check whether the person object has the property "bike", "house".

//3. Using dot and bracket notation get the output as "Mr Ajay Kumar travels by plane called Air123".

//4. Change the email property of person object to "ajaykumar@gmail.com".

//5. Generate an array of keys to the object person using object.keys() method.

const person = {
  name: 'Ajay Kumar',
  age: 27,
  vehicles: {
    car: 'limousine',
    bike: 'ktm-duke',
    plane: 'lufthansa',
  },
  email: 'ajay@gmail.com',
  phoneno: 9978425555,
};

delete person.phoneno;
const hasBike = person.hasOwnProperty('bike');
const hasHouse = person.hasOwnProperty('house');
const travelInfo = `${person.name} travels by ${person.vehicles.plane} called ${person.vehicles.plane}`;
console.log(travelInfo);
person.email = 'ajaykumar@gmail.com';
const keys = Object.keys(person);
console.log(keys);
