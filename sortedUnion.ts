function uniteUnique(...args: number[][]) {
    let recipient: number[] = [];

    for (let i = 0; i < args.length; i++) {
        const sender = args[i];

        sender.forEach(value => {
            if (recipient.indexOf(value) == -1) {
                // value does not exist in recipient, should be sent
                recipient = recipient.concat(value);
            }
        });

    }
    return recipient;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
