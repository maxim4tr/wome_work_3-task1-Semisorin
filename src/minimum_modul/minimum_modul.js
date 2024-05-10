function minimum(a,b,c) {
    a,b,c = Math.abs(a,b,c) //модуль
    let min
    if (a<b) {
        min = a
    } else {
        min = b
    }

    if (min > c) {
        min = c
    }
    return min
}

module.exports = minimum