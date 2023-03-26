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
    showQuestions(3)
}

function showQuestions(index) {
    const question_text = document.querySelector('.text');
    const option_list   = document.querySelector('.questionOptions');

    let question_tag = "<span>" + allQuestions[index].number + "." + allQuestions[index].question + "</span>";
    let option_tag   = '<div class="options">'+ allQuestions[index].options[0] + '</div>'
                        +'<div class="options">'+ allQuestions[index].options[1] + '</div>'
                        +'<div class="options">'+ allQuestions[index].options[2] + '</div>'
                        +'<div class="options">'+ allQuestions[index].options[3] + '</div>';

    question_text.innerHTML = question_tag;
    option_list.innerHTML   = option_tag;
}