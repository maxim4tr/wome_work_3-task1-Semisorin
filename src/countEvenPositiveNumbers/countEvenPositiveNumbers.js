function positiveEven(ar) {
    let count = 0
    for (let i = 0; i < ar.length; i++) {
        if (ar[i] % 2 == 0) {
            if (ar[i] > 0) {
                count += 1
            }
        }
    }
    return count
}

module.exports = positiveEven