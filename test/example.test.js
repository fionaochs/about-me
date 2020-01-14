// IMPORT MODULES under test here:
// import example from '../src/example.js';

import ifYes from '../if-Yes.js';
const test = QUnit.test;

test('Yes', assert => {


    const result = ifYes("Y");

    assert.equal(result, true);

    const result2 = ifYes("Yes");
    
    assert.equal(result, true);
    
    const resultNo = ifYes("N");

    assert.equal(resultNo, false);

    const resultNo2 = ifYes("No");

    assert.equal(resultNo2, false);
});


