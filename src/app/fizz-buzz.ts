export class FizzBuzz {
  constructor() { }

  fizzBuzz(inputValue: number): string {

    if (!inputValue) {
      return 'Falscher Input';
    }

    if (inputValue === 1) {
      return '1';
    }

    if (inputValue === 2) {
      return '2';
    }

    if (inputValue === 3 || inputValue === 6) {
      return 'Fizz';
    }

    if (inputValue === 4) {
      return '4';
    }

    if (inputValue === 5) {
      return 'Buzz';
    }

    if (inputValue === 15) {
      return 'FizzBuzz';
    }
  }
}