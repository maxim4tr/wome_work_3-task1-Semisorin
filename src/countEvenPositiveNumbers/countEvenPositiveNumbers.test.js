const positiveEven = require('./countEvenPositiveNumbers')

describe('positiveEven test', () => {
    test('array = [1,2,3,4,0]', () => {
        expect(positiveEven([1,2,3,4,0])).toBe(2)
    })
    test('array = [1,2,3,4,-1]', () => {
        expect(positiveEven([1,2,3,4,0])).toBe(2)
    })
})