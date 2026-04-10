//12605

const [[N], ...input] = require('fs')
    .readFileSync(0, 'utf-8')
    .toString()
    .trim()
    .split('\n').map(v => v.split(' ').map(Number))

const dpR = Array.from(new Array(N), () => new Array(3).fill(0))
const dpG = Array.from(new Array(N), () => new Array(3).fill(0))
const dpB = Array.from(new Array(N), () => new Array(3).fill(0))

dpR[0] = [...input[0]]
dpR[0][1] = Infinity
dpR[0][2] = Infinity

dpG[0] = [...input[0]]
dpG[0][0] = Infinity
dpG[0][2] = Infinity

dpB[0] = [...input[0]]
dpB[0][1] = Infinity
dpB[0][0] = Infinity


for (let i = 1; i < N - 1; i++) {
    dpR[i][0] = Math.min(dpR[i - 1][1], dpR[i - 1][2]) + input[i][0]
    dpR[i][1] = Math.min(dpR[i - 1][0], dpR[i - 1][2]) + input[i][1]
    dpR[i][2] = Math.min(dpR[i - 1][0], dpR[i - 1][1]) + input[i][2]

    dpG[i][0] = Math.min(dpG[i - 1][1], dpG[i - 1][2]) + input[i][0]
    dpG[i][1] = Math.min(dpG[i - 1][0], dpG[i - 1][2]) + input[i][1]
    dpG[i][2] = Math.min(dpG[i - 1][0], dpG[i - 1][1]) + input[i][2]

    dpB[i][0] = Math.min(dpB[i - 1][1], dpB[i - 1][2]) + input[i][0]
    dpB[i][1] = Math.min(dpB[i - 1][0], dpB[i - 1][2]) + input[i][1]
    dpB[i][2] = Math.min(dpB[i - 1][0], dpB[i - 1][1]) + input[i][2]
}

dpR[N - 1][0] = Infinity
dpR[N - 1][1] = Math.min(dpR[N - 2][2], dpR[N - 2][0]) + input[N - 1][1]
dpR[N - 1][2] = Math.min(dpR[N - 2][1], dpR[N - 2][0]) + input[N - 1][2]

dpG[N - 1][1] = Infinity
dpG[N - 1][0] = Math.min(dpG[N - 2][2], dpG[N - 2][1]) + input[N - 1][0]
dpG[N - 1][2] = Math.min(dpG[N - 2][0], dpG[N - 2][1]) + input[N - 1][2]

dpB[N - 1][2] = Infinity
dpB[N - 1][0] = Math.min(dpB[N - 2][1], dpB[N - 2][2]) + input[N - 1][0]
dpB[N - 1][1] = Math.min(dpB[N - 2][0], dpB[N - 2][2]) + input[N - 1][1]

console.log(Math.min(...dpR[N - 1], ...dpB[N - 1], ...dpG[N - 1]))