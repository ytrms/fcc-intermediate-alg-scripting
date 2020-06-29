/*
& -> &amp;
< -> %lt;
> -> %gt;
" -> %quot;
' -> %apos;
*/


function convertHTML(str: string) {
    let inputArr = str.split('');
    inputArr.forEach((char, i) => {
        switch (char) {
            case "&":
                inputArr[i] = "&amp;"
                break;
            case "<":
                inputArr[i] = "&lt;"
                break;
            case ">":
                inputArr[i] = "&gt;"
                break;
            case '"':
                inputArr[i] = "&quot;"
                break;
            case "'":
                inputArr[i] = "&apos;"
                break;
            default:
                break;
        }
    });

    return inputArr.join('');
}

console.log(convertHTML("Dolce & Gabbana"));
