// IMPORT MODULES under test here:
// import example from '../src/example.js';

import ifYes from '../if-Yes.js';
const test = QUnit.test;

test('Yes', assert => {
   //Arrange 
    const input = "Yes";
    const expected = true;
     //Act 
// Set up your parameters and expectations

    const result = "ifYes(input)";

    assert.equal(result, expected);
    // Call the function you're testing and set the result to a const
    //Assert
    // Make assertions about what is expected valid result
});

test('No', assert =>{
    const input = "No";
    const expected = false;

    const result = "ifyes(input)";

    assert.equal(result, expected);
})

test('Y', assert =>{
    const input = "Y";
    const expected = true;

    const result = "ifYes(input)";

    assert.equal(result, expected);
})

test("N", assert =>{
    const input = "N";
    const expected = false;

    const result = "ifYes(input)";

    assert.equal(result, expected);
})