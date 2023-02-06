// Generics allow us to define reusable functions and classes that work with multiple types rather than a single type.

const identity = <Type>(item: Type): Type => {
	return item;
};

console.log(identity);

// identity<string>()

const getRandomElement = <Type>(item: Type[]): Type => {
	return item[0];
};
console.log(getRandomElement<string>(['12, 23']));
console.log(getRandomElement<number>([12, 23]));

//  When Using .tsx use <Type,>(item: Type[]): Type   instead

//  // With multiple Generic Types

const merge = <T, U>(obj: T, obj1: U) => {
	return {
		...obj,
		...obj1,
	};
};

// console.log(merge({ name: 'Junaid' }, { age: 22 }));

//  Adding Type Constraints

const mergeObj = <T extends object, U extends object>(obj: T, obj1: U) => {
	return {
		...obj,
		...obj1,
	};
};

interface Lengthy {
	length: number;
}

const findLength = <T extends Lengthy>(num: T): number => {
	return num.length;
};

// console.log(findLength('asddfasdf'));

// Default Parameters

const emptyArr = <T = number>(): T[] => {
	return [];
};

const num = emptyArr();
