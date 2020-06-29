function myReplace(str: string, before: string, after: string) {
    const uppercaseRegex = RegExp(/[A-Z]/);
    if (uppercaseRegex.test(before[0])) {
        // first letter of before is uppercase
        after = after.replace(after[0], after[0].toUpperCase())
    } else {
        after = after.replace(after[0], after[0].toLowerCase())
    }

    str = str.replace(before, after)
    return str;
}

console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms"));