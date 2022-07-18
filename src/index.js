import readlineSync from 'readline-sync';

export const greetUser = (startMessage) => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log(startMessage);
  return name;
};

export const questionUser = (question) => {
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

export const checkUserAnswer = (answer, trueAnswer, name) => {
  let result;
  if (trueAnswer === answer) {
    console.log('Correct!');
    result = true;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
    result = false;
  }
  return result;
};

export const congratulateUser = (name) => {
  console.log(`Congratulations, ${name}!`);
};
