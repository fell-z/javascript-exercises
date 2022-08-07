const findTheOldest = function (arr) {
  let oldestAge = 0;
  let oldestPerson = arr.reduce((oldestPerson, nextPerson) => {
    let currentAge = (nextPerson.yearOfDeath || new Date().getFullYear()) - nextPerson.yearOfBirth;

    if (oldestAge < currentAge) {
      oldestPerson = nextPerson;
      oldestAge = currentAge;
    }
    return oldestPerson;
  }, {});
  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
