// Type Predicates => Specific to TypeScript

interface Cat {
	name: string;
	lives: number;
}

interface Dog {
	name: string;
	breed: string;
}

// animal is Cat returns the Type of Cat

function isCat(pet: Cat | Dog): pet is Cat {
	return (pet as Cat).lives != undefined;
}

function makeNoise(pet: Cat | Dog): string {
	if (isCat(pet)) {
		return 'Meaw';
	}

	return 'Woofff';
}

// Discriminated Unions

interface Circle {
	kind: 'Circle';
	radius: number;
}

interface Square {
	kind: 'Square';
	sideLength: number;
}

type shape = Square | Circle;

function findArea(shape: shape, value: number) {
	switch (shape.kind) {
		case 'Circle':
			return 3.475 * value * value;
		case 'Square':
			return value * value;
	}
}

const squarie: Square = {
	kind: 'Square',
	sideLength: 5,
};

console.log(findArea(squarie, squarie.sideLength));
