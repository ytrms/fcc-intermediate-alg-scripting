/*
Compare two arrays and return a new array with any items only found in one of
the two given arrays, but not both.
In other words, return the symmetric difference of the two arrays.

Note
You can return the array with its elements in any order.
*/

function diffArray(arr1, arr2) {
    let arr1UniqueVals = arr1
        .filter(value => arr2.indexOf(value) == -1);

    let arr2UniqueVals = arr2
        .filter(value => arr1.indexOf(value) == -1)

    return [...arr1UniqueVals].concat(arr2UniqueVals)
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
