// given an array of dictionaries and a key-value pair,
// return the dictionaries from the array that contain the
// key-value pair.



function whatIsInAName(collection, source) {
    // Only change code below this line

    const sourceKeys = Object.keys(source);
    let foundCounter = 0;

    let filteredColl = collection.filter(collObj => {
        for (let i = 0; i < sourceKeys.length; i++) {
            const key = sourceKeys[i];
            if (source[key] == collObj[key]) {
                foundCounter += 1;
            }
        }

        if (foundCounter == sourceKeys.length) {
            foundCounter = 0;
            return true;
        } else {
            foundCounter = 0;
            return false;
        }

    });

    // Only change code above this line
    return filteredColl;
}

console.log(whatIsInAName([
    { "apple": 1, "bat": 2 },
    { "apple": 1 },
    { "apple": 1, "bat": 2, "cookie": 2 }
],
    { "apple": 1, "cookie": 2 }
));