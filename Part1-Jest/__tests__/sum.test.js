const sum = require('../assets/scripts/sum');

//two arguments, short description of the test
//second, a function of what the test should run. 
test('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
});

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
});