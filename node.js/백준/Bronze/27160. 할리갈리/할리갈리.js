const [N, ...input] = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n')

const cards = {
    "STRAWBERRY": 0,
    "BANANA": 0,
    "LIME": 0,
    "PLUM": 0
}

for (let i = 0; i < +N; i++) {
    const [key, value] = input[i].split(' ')
    cards[key] += Number(value)
}

if (cards.BANANA == 5 || cards.LIME == 5 || cards.PLUM == 5 || cards.STRAWBERRY == 5) {
    console.log('YES')
} else {
    console.log('NO')
}