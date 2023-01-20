const identity = <Type>(item: Type): Type => {
	return item;
};

// console.log(identity);

// identity<string>()

const getRandomElement = <Type>(item: Type[]): Type => {
	return item[0];
};
console.log(getRandomElement<string>(['12, 23']));
console.log(getRandomElement<number>([12, 23]));
