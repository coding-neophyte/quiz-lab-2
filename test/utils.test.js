
import { countAsYes } from './utils.js';
const test = QUnit.test;

test('expect true when answering yes', (expect) => {

    const expected = true;
    const actual = countAsYes('yes');
    expect.equal(actual, expected);
});
