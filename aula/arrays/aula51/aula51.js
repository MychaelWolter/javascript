// Array
// String
// Map
// Set



const values = [10, 5, 3, 7];
const iteratorValues = values[Symbol.iterator]();

console.log(values);

console.log(iteratorValues.next());
console.log(iteratorValues.next());
console.log(iteratorValues.next());
console.log(iteratorValues.next());
console.log(iteratorValues.next());

console.log();



const course = "Javascript";
const iteratorCourses = course[Symbol.iterator]();

console.log(iteratorCourses.next());
console.log(iteratorCourses.next());
console.log(iteratorCourses.next());
console.log(iteratorCourses.next());
console.log(iteratorCourses.next());
console.log(iteratorCourses.next());
console.log(iteratorCourses.next());
console.log(iteratorCourses.next());
console.log(iteratorCourses.next());
console.log(iteratorCourses.next());
console.log(iteratorCourses.next());