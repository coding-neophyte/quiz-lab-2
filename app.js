// import functions and grab DOM elements

// initialize global state

// set event listeners
// get user input
// use user input to update state
// update DOM to reflect the new state

const takeQuiz = document.getElementById('quiz-button');
const results = document.getElementById('quiz-results');


takeQuiz.addEventListener('click', () => {

  let numberCorrect = 0;
  const firstName = prompt('What is your first name?');
  const lastName = prompt('What is your last name?');
  const readyForQuiz = confirm('Are you read to take the quiz?');

  if (readyForQuiz === true) {
    alert(`Okay ${firstName} ${lastName} lets get started!`);
  } else {
    return;
  }

  const answer1 = prompt('Does lebron play for the lakers?');
  if (answer1.charAt(0) === 'y') {
    alert('Correct!');
    numberCorrect++;
  } else {
    alert('Incorrect');
  }

  const answer2 = prompt('Did lebron go to St. Vincent-St.Mary high school?');
  if (answer2.charAt(0) === 'y') {
    alert('Correct');
    numberCorrect++;
  } else {
    alert('Incorrect');
  }

  const answer3 = prompt('Is lebron 6 foot 9?');
  if (answer3.charAt(0) === 'y') {
    alert('Correct');
    numberCorrect++;
  } else {
    alert('Incorrect');
  }

  results.textContent = `${firstName} ${lastName} you got ${numberCorrect}/3 correct`;

});
