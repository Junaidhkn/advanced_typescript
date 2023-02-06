"use strict";
// Type Predicates => Specific to TypeScript
// animal is Cat returns the Type of Cat
function isCat(pet) {
    return pet.lives != undefined;
}
function makeNoise(pet) {
    if (isCat(pet)) {
        return 'Meaw';
    }
    return 'Woofff';
}
function findArea(shape, value) {
    switch (shape.kind) {
        case 'Circle':
            return 3.475 * value * value;
        case 'Square':
            return value * value;
    }
}
const squarie = {
    kind: 'Square',
    sideLength: 5,
};
console.log(findArea(squarie, squarie.sideLength));
