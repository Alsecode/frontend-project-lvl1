import readlineSync from 'readline-sync';
import { isEven } from './isEven.js';
import { getRandomNumber } from './getRandomNumber.js';

export const evenGame = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const question = getRandomNumber();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    let trueAnswer;
    if (isEven(question) === true) {
      trueAnswer = 'yes';
    } else {
      trueAnswer = 'no';
    }
    if (trueAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
