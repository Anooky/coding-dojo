import { FizzBuzz } from './fizz-buzz';

describe('Fizz Buzz Test', () => {
  let testee: FizzBuzz;


  beforeEach(async () => {
    testee = new FizzBuzz();
  });

  // ----- Add Testcases HERE
  const testCases = [
    {
      input: 1,
      output: "Die Antwort ist 42."
    },
  ]
  // ----

  testCases.forEach((testCase) => {
    describe(`Executing FizzBuzz with user = ${testCase.input}`, () => {
      it(`return should return '${testCase.output}'.`, () => {
        const result = testee.fizzBuzz(testCase.input);
        expect(result).toEqual(testCase.output);
      })
    })

  })
});
