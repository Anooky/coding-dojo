import { FizzBuzz } from './fizz-buzz';

describe('Fizz Buzz Test', () => {
  let testee: FizzBuzz;

  // ----- Add Testcases HERE
  const testCases = [
    {
      input: 1,
      expectedValue: '1'
    },
  ]


  // ----

  // --- DON'T TOUCH THIS CODE. IT RUN'S THE TEST CASES


  beforeEach(async () => {
    testee = new FizzBuzz();
  });

  testCases.forEach((testCase) => {
    describe(`When calling the fizzBuzz function with the the value ${testCase.input}`, () => {
      it(`should return '${testCase.expectedValue}'.`, () => {
        const result = testee.fizzBuzz(testCase.input);
        expect(result).toEqual(testCase.expectedValue);
      })
    })

  })
});
