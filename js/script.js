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
    showQuestions(0);
}

const nextBtn = document.querySelector(".nextBtn");

let question_count = 0;

nextBtn.onclick = () => {
    if (question_count < allQuestions.length - 1) {
        question_count++
        showQuestions(question_count);
    } else {
        console.log("You Have Completed Your Task");
    }
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

    const total_question = document.querySelector(".total_que");
    let total_qtnTag = '<p>' + allQuestions[index].number + ' of ' + allQuestions.length + ' Questions ' +'</p>'
    total_question.innerHTML = total_qtnTag;

    const option = option_list.querySelectorAll('.options');
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute('onclick', 'optionSelected(this)');
    }
}

function optionSelected(answer) {
    let userAnswer    = answer.textContent;
    let correctAnswer = allQuestions[question_count].answer;
    let option_list2  = document.querySelector('.questionOptions');
    let allOptions    = option_list2.children.length;

    if (userAnswer == correctAnswer) {
        answer.classList.add("correct");
    } else{
        answer.classList.add("inCorrect");
    }

    for (let i = 0; i < allOptions; i++) {
        option_list2.children[i].classList.add("disabled");
    }
}