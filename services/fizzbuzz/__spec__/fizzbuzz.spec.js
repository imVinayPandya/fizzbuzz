const { describe, expect, test } = require('@jest/globals');
const fizzBuzz = require('../fizzbuzz');

describe('FizzBuzz Unit Test', () => {
  test('Devided by 3', async () => {
    const output = fizzBuzz(3);

    expect(output).toEqual('Fizz');
  });

  test('Devided by 5', async () => {
    const output = fizzBuzz(5);

    expect(output).toEqual('Buzz');
  });

  test('Devided by 5 and 3', async () => {
    const output = fizzBuzz(15);

    expect(output).toEqual('FizzBuzz');
  });

  test('Normal number', async () => {
    const output = fizzBuzz(1);

    expect(output).toEqual(1);
  });
});
