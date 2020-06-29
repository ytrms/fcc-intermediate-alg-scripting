function pairElement(str: string) {
    let returnArr = [];
    let charArr = str.split('');

    charArr.forEach(char => {
        switch (char) {
            case 'G':
                returnArr.push(['G', 'C'])
                break;
            case 'C':
                returnArr.push(['C', 'G'])
                break;
            case 'T':
                returnArr.push(['T', 'A'])
                break;
            case 'A':
                returnArr.push(['A', 'T'])
                break;
            default:
                break;
        }
    });

    return returnArr;
}

// G - C
// T - A
// [[G, C], [C, G], [G, C]]

pairElement("GCG");
