function convertMark() {
    let mark = parseInt(document.getElementById('mark-input-box').value);
    let message = '';

    if (isNaN(mark) || mark < 0 || mark > 100) {
        message = 'Invalid mark. Please enter a number between 0 and 100.';
    } else if (mark >= 90) {
        message = 'Grade A';
    } else if (mark >= 80) {
        message = 'Grade B';
    } else if (mark >= 70) {
        message = 'Grade C';
    } else if (mark >= 50) {
        message = 'Grade D';
    } else {
        message = 'Grade F';
    }

    document.getElementById('validation-message').textContent = message;
}
