function sumAll(arr) {
    // copy arr
    let sorted_arr = [...arr];

    // sort
    sorted_arr
        .sort((a, b) => a - b);

    // we have an arr [1, 4]. We want to sum all numbers from x to y
    let acc = 0;
    for (let i = sorted_arr[0]; i <= sorted_arr[1]; i++) {
        acc += i;
    }

    return acc;
}

console.log(sumAll([1, 4]));
