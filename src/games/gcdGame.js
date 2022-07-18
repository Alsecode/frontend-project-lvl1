import { getRandomNumber } from '../getRandomNumber.js';
import {
  greetUser, questionUser, checkUserAnswer, congratulateUser,
} from '../index.js';

const getQuestion = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const question = `${firstNumber} ${secondNumber}`;
  return question;
};

const gcd = (question) => {
  const numbers = question.split(' ');
  const [firstNumber, secondNumber] = numbers;
  let gcdNum = 1;
  const minNumber = Math.min(firstNumber, secondNumber);
  for (let i = 1; i <= minNumber; i += 1) {
    if (firstNumber % i === 0 && secondNumber % i === 0) {
      gcdNum = i;
    }
  }
  return gcdNum;
};

export const gcdGame = () => {
  const name = greetUser('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const question = getQuestion();
    const answer = Number(questionUser(question));
    const trueAnswer = gcd(question);
    const answerIsCorrect = checkUserAnswer(answer, trueAnswer, name);
    if (answerIsCorrect === false) {
      return;
    }
  }
  congratulateUser(name);
};
