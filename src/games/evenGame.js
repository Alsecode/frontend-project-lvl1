import { getRandomNumber } from '../getRandomNumber.js';
import {
  greetUser, questionUser, checkUserAnswer, congratulateUser,
} from '../index.js';

const isEven = (number) => (number % 2 === 0);

export const evenGame = () => {
  const name = greetUser('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const question = getRandomNumber();
    const answer = questionUser(question);
    let trueAnswer;
    if (isEven(question) === true) {
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
