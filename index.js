console.log('Welcome to the fun!');

const map = {
    "I": { val: 1, limit: 3 },
    "V": { val: 5, limit: 1 },
    "X": { val: 10, limit: 3 },
    "L": { val: 50, limit: 1 },
    "C": { val: 100, limit: 3 },
    "D": { val: 500, limit: 1 },
    "M": { val: 1000, limit: 3 },
};

module.exports = (roman) => {
    let repeatCharacter;
    let repeatCount = 0;
    return [...roman].reduce((prev, curr, index) => {
        const current = map[curr];

        if (curr === repeatCharacter) {
            repeatCount++;

            if (repeatCount >= current.limit) {
                throw "InvalidArgument";
            }
        } else {
            repeatCount = 0;
        }

        repeatCharacter = curr;

        const currNum = current.val;
        let sum = prev + currNum;

        const last = map[roman[index - 1]];
        if (last && last.val < currNum) {
            sum -= last.val * 2;
        }

        return sum;
    }, 0);
};