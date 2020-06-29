function destroyer(arr) {
    let cleanArr = [];
    let numsToDelete = [];

    for (let i = 1; i < arguments.length; i++) {
        numsToDelete.push(arguments[i]);
    }

    cleanArr = arr.filter(element => numsToDelete.indexOf(element) == -1);

    return cleanArr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
