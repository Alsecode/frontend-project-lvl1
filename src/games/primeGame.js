import { getRandomNumber } from '../getRandomNumber.js';
import {
  greetUser, questionUser, checkUserAnswer, congratulateUser,
} from '../index.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  let noDivisor = true;
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      noDivisor = false;
    }
  }

  return noDivisor;
};

export const primeGame = () => {
  const name = greetUser('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const question = getRandomNumber();
    const answer = questionUser(question);
    let trueAnswer;
    if (isPrime(question) === true) {
      trueAnswer = 'yes';
    } else {
      trueAnswer = 'no';
    }
    const answerIsCorrect = checkUserAnswer(answer, trueAnswer, name);
    if (answerIsCorrect === false) {
      return;
    }
  }
  congratulateUser(name);
};
