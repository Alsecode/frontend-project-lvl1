import { getRandomNumber } from './getRandomNumber.js';
import {
  greetUser, questionUser, checkUserAnswer, congratulateUser,
} from './index.js';

const getRandomOperation = () => {
  const range = 3;
  const number = Math.floor(Math.random() * range);
  const operations = ['+', '-', '*'];
  const resultOperation = operations[number];
  return resultOperation;
};

const getQuestion = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const operation = getRandomOperation();
  const question = `${firstNumber} ${operation} ${secondNumber}`;
  return question;
};

const solveExpression = (question) => {
  const [firstNumber, operation, secondNumber] = question.split(' ');
  let result = 0;
  switch (operation) {
    case '+':
      result = firstNumber + secondNumber;
      break;
    case '-':
      result = firstNumber - secondNumber;
      break;
    case '*':
      result = firstNumber * secondNumber;
      break;
    default:
      break;
  }
  return result;
};

export const calcGame = () => {
  const name = greetUser('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const question = getQuestion();
    const answer = Number(questionUser(question));
    const trueAnswer = solveExpression(question);
    const answerIsCorrect = checkUserAnswer(answer, trueAnswer, name);
    if (answerIsCorrect === false) {
      return;
    }
  }
  congratulateUser(name);
};
