const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2SDisplay');
const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playTo');
let p1Score = 0;
let winScore = 5;
let isGameOver = false;

p1Button.addEventListener('click', function() {
    if (!isGameOver) {
        p1Score+=1;
        p1Display.textContent = p1Score; 
        if (p1Score === winScore) {
            isGameOver = true;
            p1Display.classList.add('has-text-success');
            p2Display.classList.add('has-text-danger');
            p1Button.disabled = true;
            p2Button.disabled = true;
    }
    }

})
let p2Score = 0;
p2Button.addEventListener('click', function() {
    if (!isGameOver) {
        p2Score+=1;
        p2Display.textContent = p2Score; 
        if (p2Score === winScore) {
            isGameOver = true;
            p2Display.classList.add('has-text-success');
            p1Display.classList.add('has-text-danger');
            p1Button.disabled = true;
            p2Button.disabled = true;
    }
    }
})
winningScoreSelect.addEventListener('change', function() {
    winScore = parseInt(this.value);
    reset();
})
resetButton.addEventListener('click',reset);
function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p1Display.classList.remove('has-text-success', 'has-text-danger');
    p2Display.classList.remove('has-text-success', 'has-text-danger');
    p1Button.disabled = false;
    p2Button.disabled = false;
}