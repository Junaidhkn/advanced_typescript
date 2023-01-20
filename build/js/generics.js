"use strict";
const identity = (item) => {
    return item;
};
// console.log(identity);
// identity<string>()
const getRandomElement = (item) => {
    return item[0];
};
console.log(getRandomElement(['12, 23']));
console.log(getRandomElement([12, 23]));
