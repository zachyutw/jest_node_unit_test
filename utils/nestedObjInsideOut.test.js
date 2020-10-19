/**
 * Please use TypeScript/JS to answer question
 * Welcome to answer with unit testing code if you can
 *
 * After you finish coding, please push to your GitHub account and share the link with us.
 */

// Please write a function to reverse the following nested input value into output value
const nestedObjInsideOut = require('./nestedObjInsideOut');

// Input:
let inputValue = {
    hired: {
        be: {
            to: {
                deserve: 'I',
            },
        },
    },
};

// Output:
let outputValue = {
    I: {
        deserve: {
            to: {
                be: 'hired',
            },
        },
    },
};

describe('nestedObjInsideOut', ()=>{
    test('test input the same as output',()=>{
        const result = nestedObjInsideOut(inputValue);
        expect(result).toEqual(outputValue);
    });
})