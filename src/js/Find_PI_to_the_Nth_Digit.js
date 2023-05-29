const N = process.argv[2]

if (!N) {
    console.log("You must give 1 argument.")
    return
}

if (N < 0) {
    console.log("N must be non-negative number.")
    return
}

let decimal = false;
let result = "";
let value = 22
for (let i = 0; i <= N; i++) {
    if (value < 7) {
        value *= 10;
        if (!decimal) {
            result += ".";
            decimal = true;
        }
    }
    let reminder = value / 7 % 1;
    let divRes = value / 7 - reminder; 
    result += divRes;
    value = value - divRes * 7;
}

console.log("RESULT: ", result, " +- 0.001")