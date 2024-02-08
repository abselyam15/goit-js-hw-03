function makeArray(firstArray, secondArray, maxLength) {
    let arrays = firstArray.concat(secondArray)

    if (arrays.length > maxLength) {
        return arrays.slice(0, maxLength)
    } else {
        return arrays
    }
}

console.log("[TASK 2]: " + makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log("[TASK 2]: " + makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log("[TASK 2]: " + makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log("[TASK 2]: " + makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log("[TASK 2]: " + makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log("[TASK 2]: " + makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []