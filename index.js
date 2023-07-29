// Code your solutions in this file

// function writeCards (name, event) {
//     const storeWritingOnCard = [];
//     for (let i = 0; i < name.length; i++) {
//         storeWritingOnCard.push (`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
//     }
//     return storeWritingOnCard;
// }

function writeCards(names, event) {
    const storeWritingOnCard = [];
    for (const name of names) {
        storeWritingOnCard.push (`Thank you, ${name}, for the wonderful ${event} gift!`)
    }
    return storeWritingOnCard;
}

function countDown(number) {
    while (number >= 0) {
        console.log (number);
        number--;
    }
}