const firstBtn = document.querySelector(".btn button");

const rulesBox = document.querySelector(".rulesBox");
const exitButton = document.querySelector(".btn2 .exitBtn");

const continueButton = document.querySelector(".btn2 .continueBtn");
const questions = document.querySelector(".questions");



firstBtn.onclick = () => {
    rulesBox.classList.add("activeInfo");
}

exitButton.onclick = () => {
    rulesBox.classList.remove("activeInfo");
}

continueButton.onclick = () => {
    rulesBox.classList.remove("activeInfo");
    questions.classList.add("activeQuiz");
}