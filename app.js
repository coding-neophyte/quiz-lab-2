
import { countAsYes } from './utils.js';
//import { alert } from "./utils.js";
const takeQuiz = document.getElementById('quiz-button');
const results = document.getElementById('quiz-results');


takeQuiz.addEventListener('click', () => {

    let numberCorrect = 0;
    const firstName = prompt('What is your first name?');
    const lastName = prompt('What is your last name?');
    const readyForQuiz = confirm('Are you read to take the quiz?');

    if (readyForQuiz === true) {
        alert(`Okay ${firstName} ${lastName} lets get started! Answer each question with a 'Yes' or 'No'`);
    } else {
        return;
    }

    const answer1 = prompt('Does lebron play for the lakers?');

    console.log(countAsYes(answer1));
    const answer1Result = countAsYes(answer1);
    alert(answer1Result);
    if (answer1Result) {
        numberCorrect++;
        console.log(numberCorrect);
    }



    const answer2 = prompt('Did lebron go to St-Vincent-St Mary high school?');
    console.log(countAsYes(answer2));
    const answer2Result = countAsYes(answer2);
    alert(answer2Result);
    if (answer2Result) {
        numberCorrect++;
    }

    const answer3 = prompt('Is lebron 6 foot 9?');
    console.log(countAsYes(answer1));
    const answer3Result = countAsYes(answer3);
    alert(answer3Result);
    if (answer3Result) {
        numberCorrect++;
        console.log(numberCorrect);
    }
    results.textContent = `${firstName} ${lastName} you got ${numberCorrect}/3 correct`;

});
