const answers = {
    q1: "b",
    q2: "d",
    q3: "a"
};

const submitButton = document.getElementById('submit');
const resetButton = document.getElementById('reset');
const resultDiv = document.getElementById('result');

submitButton.addEventListener('click', () => {
    let score = 0;
    let resultHTML = '';

    ['q1', 'q2', 'q3'].forEach(questionId => {
        const selected = document.querySelector(`input[name="${questionId}"]:checked`);
        const correctAnswer = answers[questionId];

        if (selected) {
            if (selected.value === correctAnswer) {
                resultHTML += `<div class="correct">Question: ${questionId} - Correct</div>`;
                score++;
            } else {
                resultHTML += `<div class="wrong">Question: ${questionId} - Wrong</div>`;
            }
        } else {
            resultHTML += `<div class="wrong">Question: ${questionId} - Not Answered</div>`;
        }
    });

    resultHTML += `<div>Your score: ${score} / 3</div>`;
    resultDiv.innerHTML = resultHTML;
    resultDiv.style.display = 'block';
});

resetButton.addEventListener('click', () => {
    document.querySelectorAll('input[type="radio"]').forEach(input => input.checked = false);
    resultDiv.style.display = 'none';
});
