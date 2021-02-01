import { HelloUser } from './hello-user';

describe('Hello User Test', () => {
  let testee: HelloUser;


  beforeEach(async () => {
    testee = new HelloUser();
  });

  // ----- Add Testcases HERE
  const testCases = [
    {
      username: "Martin",
      time: new Date(0, 0, 0, 8, 15),
      expectedResult: "Guten Morgen Martin"
    },
  ]
  // ----

  testCases.forEach((testCase) => {
    describe(`Executing HelloUser with user = ${testCase.username} and time = ${testCase.time}`, () => {
      it(`return should return '${testCase.expectedResult}'.`, () => {
        const result = testee.helloUser(testCase.username, testCase.time);
        expect(result).toEqual(testCase.expectedResult);
      })
    })

  })
});
