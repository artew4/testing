// utils/generateFinalTest.js

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function getRandomQuestionsFromTest(test, count) {
  const shuffled = shuffle(test.questions);
  return shuffled.slice(0, count);
}

export function generateFinalTest(title, testSources, totalCount = 10) {
  const testCount = testSources.length;
  const questionsPerTest = Math.floor(totalCount / testCount);
  const remainder = totalCount % testCount;

  let allQuestions = [];

  testSources.forEach((test, index) => {
    const extra = index < remainder ? 1 : 0; // распределение остатка
    const questions = getRandomQuestionsFromTest(test, questionsPerTest + extra);
    allQuestions.push(...questions);
  });

  return {
    title,
    questions: shuffle(allQuestions)
  };
}