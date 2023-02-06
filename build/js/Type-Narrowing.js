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
