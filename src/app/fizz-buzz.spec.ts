import { FizzBuzz } from './fizz-buzz';

describe('Fizz Buzz Test', () => {
  let testee: FizzBuzz;

  const testCases = [

    // ----- Add Testcases HERE
    {
      input: 1,
      expectedValue: '1'
    },

    /*
    {
      input: 2,
      expectedValue: '2'
    },
    */

    // ----
  ]

  // --- DON'T TOUCH THE CODE BELOW THIS LINE. IT RUN'S THE TEST CASES


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
