const sumEvenNumber = require('./sumEvenNumbers')

describe('sumEvenNumbers test', () => {
    test('[0,23]', () => {
        expect(sumEvenNumber(0, 23)).toBe(36)
    })
})