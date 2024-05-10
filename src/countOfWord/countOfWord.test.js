const countOfWord = require('./countOfWord')

describe('countOfWord tests', () => {
    test('loverKase', () => {
        expect(countOfWord('колбоса банан копуста помидор краб')).toBe(3)
    })
    test('upperKase', () => {
        expect(countOfWord('Колбоса банан копуста Помидор Краб')).toBe(3)
    })
})