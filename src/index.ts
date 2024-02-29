export {};

// TypeScript ESLint: Unsafe assignment of an any value

// EXAMPLE 1 - Disabling the `@typescript-eslint/no-unsafe-assignment` ESLint rule

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const x = 1 as any;
console.log(x);

// ---------------------------------------------------

// // EXAMPLE 2 - Disabling both Eslint rules

// // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
// const x = 1 as any;
// console.log(x);

// ---------------------------------------------------

// // EXAMPLE 3 - Setting the variable or property to `unknown` instead of any

// const x = 1 as unknown;

// if (typeof x === 'number') {
//   console.log(x.toFixed(2));
// }

// ---------------------------------------------------

// // EXAMPLE 4 - Using a type predicate to solve the error

// type Employee = {
//   id: number;
//   name: string;
// };

// function isAnEmployee(value: unknown): value is Employee {
//   if (
//     typeof value === 'object' &&
//     value !== null &&
//     !Array.isArray(value) &&
//     'id' in value &&
//     'name' in value
//   ) {
//     return true;
//   }

//   return false;
// }

// const jsonStr = '{"id": 1, "name": "Bobby Hadz"}';

// const parsed = JSON.parse(jsonStr) as unknown;

// if (isAnEmployee(parsed)) {
//   console.log(parsed.id);
//   console.log(parsed.name);
// }

// ---------------------------------------------------

// // EXAMPLE 5 - Resolve the issue by typing the variable explicitly

// type Employee = {
//   id: number;
//   name: string;
//   address: {
//     country: string;
//     city: string;
//   };
//   tasks: string[];
// };

// const emp1: Employee = {
//   id: 1,
//   name: 'bobby hadz',
//   address: {
//     country: 'Belgium',
//     city: 'Ghent',
//   },
//   tasks: ['develop', 'ship', 'test'],
// };
// console.log(emp1);
