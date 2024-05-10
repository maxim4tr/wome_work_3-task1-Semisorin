function countOfWord(str) {
    let count = 0
    let word = str.split(' ')
    for (let w of word) {
        if(w.charAt(0) == 'к' || w.charAt(0) == 'К'){
            count++
        }
    }
    return count
}

module.exports = countOfWord