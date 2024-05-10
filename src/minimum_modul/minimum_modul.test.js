const minimum = require('./minimum_modul.js')

describe('minimal function test', () =>{
    test('positive numbers', () => {
         expect(minimum(2,3,3)).toBe(2)
    })
    test('test with negative numbers', () => {
        expect(minimum(-1,3,10)).toBe(-1)
    })
    test('test with all zero', () => {
        expect(minimum(0,0,0)).toBe(0)
    })
})