import { FizzBuzz } from './fizz-buzz';

describe('Fizz Buzz Test', () => {
  let testee: FizzBuzz;

  // ----- Add Testcases HERE
  const testCases = [
    {
      input: 1,
      expectedValue: '1',
    },
    /* -- This is the next test:
    {
      input: 2,
      expectedValue: '2'
    },
    -- */

  ];

  // --- DON'T TOUCH THIS CODE. IT RUNS THE TEST CASES

  testCases.forEach((testCase) => {
    describe(`When calling the fizzBuzz function with the the value ${testCase.input}`, () => {
      let result: string;

      beforeEach(() => {
        testee = new FizzBuzz();
        result = testee.fizzBuzz(testCase.input);
      });

      it(`it should return '${testCase.expectedValue}'.`, () => {
        expect(result).toEqual(testCase.expectedValue);
      });
    });
  });
});
