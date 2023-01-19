class Player {
	first: string;
	last: string;

	constructor(first: string, last: string) {
		this.first = first;
		this.last = last;
	}
}

const myPlayer = new Player('Junaid', 'Khan');

console.log(myPlayer);

// //  Public and Private Modifiers

class Persono {
	public readonly first: string;
	private last: string;

	constructor(first: string, last: string) {
		this.first = first;
		this.last = last;
	}
}

const person = new Persono('Junaid', 'Khan');

console.log(person.first);

// ReadOnly Property
// person.first = 'asdfasdf'

console.log(person.first);

// console.log(person.last);
