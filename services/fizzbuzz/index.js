/**
 * Api Route Controller
 */
const createHttpError = require('http-errors');
const fizzBuzz = require('./fizzbuzz');

exports.getFizzbuzz = (req, res) => {
  let count = Number(req.params.count || 100);

  if (Number.isNaN(count)) {
    throw createHttpError(400, 'Count should be a number');
  }

  const fizzBuzzArr = [];
  for (let i = 1; i <= count; i++) {
    fizzBuzzArr.push(fizzBuzz(i));
  }

  return res.status(200).send(fizzBuzzArr);
};
