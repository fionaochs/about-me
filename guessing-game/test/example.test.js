import compareNumbers from './compareNumbers.test.js/index.js';
const test = QUnit.test;

test('test numbers are identical', assert => {
    const userGuess = 4;
    const expected = 0;

    const result = compareNumbers(userGuess, 4);
    
    assert.equal(result, expected);
});

test('test number is too low', assert => {
    const userGuess = 4;
    const expected = -1;

    const result = compareNumbers(userGuess, 10);
    
    assert.equal(result, expected);
});

test('test number is too high', assert => {
    const userGuess = 4;
    const expected = 1;

    const result = compareNumbers(userGuess, 2);
    
    assert.equal(result, expected);
});
