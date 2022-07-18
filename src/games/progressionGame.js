import {
  greetUser, questionUser, checkUserAnswer, congratulateUser,
} from '../index.js';

const getRandomNumber = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const getQuestion = () => {
  // Размер прогрессии не менее 6 и не более 10
  const progressionSize = getRandomNumber(5, 10);
  const firstNumber = getRandomNumber(1, 100);
  const progressionDiff = getRandomNumber(1, 10);
  const progression = [firstNumber];
  let currentNum = firstNumber;

  for (let i = 1; i < progressionSize; i += 1) {
    currentNum += progressionDiff;
    progression.push(currentNum);
  }

  const missingIndex = getRandomNumber(1, progressionSize);
  progression[missingIndex] = '..';
  return progression.join(' ');
};

const findMissingElement = (question) => {
  const progression = question.split(' ');
  let progressionDiff = 0;
  if (progression[1] !== '..') {
    progressionDiff = Number(progression[1]) - Number(progression[0]);
  } else {
    progressionDiff = Number(progression[3]) - Number(progression[2]);
  }
  let missingElement;
  for (let i = 1; i < progression.length; i += 1) {
    if (progression[i] === '..') {
      missingElement = Number(progression[i - 1]) + progressionDiff;
    }
  }

  return missingElement;
};

const progressionGame = () => {
  const name = greetUser('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const question = getQuestion();
    const answer = Number(questionUser(question));
    const trueAnswer = findMissingElement(question);
    const answerIsCorrect = checkUserAnswer(answer, trueAnswer, name);
    if (answerIsCorrect === false) {
      return;
    }
  }
  congratulateUser(name);
};

export default progressionGame;
