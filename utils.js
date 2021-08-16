export function countAsYes(userAnswer) {
    if (userAnswer.charAt(0) === 'y') {
        return true;
    } else {
        return false;
    }
}

export function alert(result) {
    if (result === true) {
        alert('Correct');
    } else {
        alert('Incorrect');
    }
}
