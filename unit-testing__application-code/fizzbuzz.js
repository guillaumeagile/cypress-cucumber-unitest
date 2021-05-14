module.exports = (num) => {
  if (num % 3 === 0 && num % 5 === 0) {
    return 'fizzbuzz'
  }

  if (num % 3 === 0) {
    //throw 'ca va pas la tête';
    return 'fizz'
  }

  if (num % 5 === 0) {
    return 'buzz'
  }
}
