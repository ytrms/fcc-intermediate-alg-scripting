/*
- If a word begins with a consonant,
take the first consonant or consonant cluster,
move it to the end of the word,
and add "ay" to it.

- If a word begins with a vowel,
just add "way" at the end.
*/

function translatePigLatin(str: String) {
    if ('aeiou'.includes(str[0].toLowerCase())) {
        // word starts with vowel
        return str.concat('way')

    } else {
        // word starts with consonant
        // take the first consonant or consonant cluster
        let consCluster = str.match(/[^aeiou]+/);
        console.log(consCluster);
        console.log(typeof consCluster);
        return str;

        // add 'ay'
    }
}

console.log(translatePigLatin("consonant"));
