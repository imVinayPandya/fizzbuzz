const fizzbuzz = num => {
  const devidByFive = num % 5 === 0;
  const devidByThree = num % 3 === 0;

  if (devidByFive && devidByThree) {
    return 'FizzBuzz';
  }

  if (devidByThree) {
    return 'Fizz';
  }

  if (devidByFive) {
    return 'Buzz';
  }

  return num;
};

module.exports = fizzbuzz;
