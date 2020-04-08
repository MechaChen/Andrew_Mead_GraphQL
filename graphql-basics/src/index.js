import myCurrentLocation, { getGreeting, message, name } from './myModule';

console.log(message);
console.log(name);
console.log(myCurrentLocation);
console.log(getGreeting('Jessica'));

// 1. Create a new file called math.js
// 2. Define add function that takes two arguments and adds them up
// 3. Define substract function that takes two arguments and subtracts them
// 4. Set up add as a default export
// 5. Set up subtract as a named export
// 6. Import both functions into index.js
// 7. Use both functions and print the results from each

import myAddFunction, { subtract } from './math';

console.log(myAddFunction(1, 2));
console.log(subtract(10, 3));