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
