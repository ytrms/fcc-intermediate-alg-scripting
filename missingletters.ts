const alphabet = 'abcdefghijklmnopqrstuvwxyz'

function fearNotLetter(str: string) {
    let alphabetArray = alphabet.split('');

    let firstLetterIndex = alphabetArray.indexOf(str[0]);
    let lastLetterIndex = alphabetArray.indexOf(str[str.length - 1]);

    if (lastLetterIndex - firstLetterIndex == str.length - 1) {
        // no letter missing
        return undefined
    }

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (str[i] == alphabetArray[i + firstLetterIndex]) {
            continue
        } else {
            return alphabetArray[i + firstLetterIndex]
        }
    }

    return str;
}

console.log(fearNotLetter("abcdf"));
