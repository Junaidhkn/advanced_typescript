"use strict";
// Generics allow us to define reusable functions and classes that work with multiple types rather than a single type.
const identity = (item) => {
    return item;
};
console.log(identity);
// identity<string>()
const getRandomElement = (item) => {
    return item[0];
};
console.log(getRandomElement(['12, 23']));
console.log(getRandomElement([12, 23]));
//  When Using .tsx use <Type,>(item: Type[]): Type   instead
//  // With multiple Generic Types
const merge = (obj, obj1) => {
    return Object.assign(Object.assign({}, obj), obj1);
};
// console.log(merge({ name: 'Junaid' }, { age: 22 }));
//  Adding Type Constraints
const mergeObj = (obj, obj1) => {
    return Object.assign(Object.assign({}, obj), obj1);
};
const findLength = (num) => {
    return num.length;
};
// console.log(findLength('asddfasdf'));
// Default Parameters
const emptyArr = () => {
    return [];
};
const num = emptyArr();
