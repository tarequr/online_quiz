const firstBtn = document.querySelector(".btn button");

const rulesBox = document.querySelector(".rulesBox");
const exitButton = document.querySelector(".btn2 .exitBtn");

const continueButton = document.querySelector(".btn2 .continueBtn");
const questions = document.querySelector(".questions");

const timeCount = document.querySelector(".timeCount .seconds");
const timeLine  = document.querySelector(".questionsHeader .time_lines");


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
    startTimer(15);

    startTimeLine(0);
}

const nextBtn = document.querySelector(".nextBtn");

const result_box   = document.querySelector(".result_box");
const restart_quiz = document.querySelector(".lastBtn .resStartBtn");
const quit_quiz    = document.querySelector(".lastBtn .quit");

restart_quiz.onclick = () => {
    window.location.reload();
}

quit_quiz.onclick = () => {
    window.location.reload();
}

let question_count = 0;
let counter;
let timeValue = 15;

let counterLine;
let widthValue = 0;

let userScore = 0;

nextBtn.onclick = () => {
    if (question_count < allQuestions.length - 1) {
        question_count++
        showQuestions(question_count);

        clearInterval(counter);
        startTimer(timeValue);

        clearInterval(counterLine);
        startTimeLine(widthValue);

        nextBtn.style.display = "none";
    } else {
        console.log("You Have Completed Your Task");
        showResultBox();
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

let tickIcon  = `<div class="tick icon"><i class="fas fa-check"></i></div>`;
let crossIcon = `<div class="cross icon"><i class="fas fa-times"></i></div>`;


function optionSelected(answer) {
    clearInterval(counter);
    clearInterval(counterLine);

    const option_list2  = document.querySelector('.questionOptions');
    
    let userAnswer    = answer.textContent;
    let correctAnswer = allQuestions[question_count].answer;
    let allOptions    = option_list2.children.length;

    if (userAnswer == correctAnswer) {
        userScore += 1;
        console.log(userScore);
        answer.classList.add("correct");
        answer.insertAdjacentHTML("beforeend", tickIcon);
    } else{
        answer.classList.add("inCorrect");
        answer.insertAdjacentHTML("beforeend", crossIcon);

        for (let i = 0; i < allOptions; i++) {
            if (option_list2.children[i].textContent == correctAnswer) {
                option_list2.children[i].setAttribute("class", "options correct");
                option_list2.children[i].insertAdjacentHTML("beforeend", tickIcon);
            }
        }
    }

    for (let i = 0; i < allOptions; i++) {
        option_list2.children[i].classList.add("disabled");
    }

    nextBtn.style.display = "block";
}

function showResultBox(){
    rulesBox.classList.remove("activeInfo");
    questions.classList.remove("activeQuiz");

    result_box.classList.add("activeResult");

    const scoreText = document.querySelector(".score_text");

    if (userScore > 3) {
        let scoreTag = '<span>congratulations  &#128522; You Got <p>'+ userScore +'</p> Out Of <p>'+ allQuestions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    } else if (userScore > 1) {
        let scoreTag = '<span>Carry On 	&#128522; You Got <p>'+ userScore +'</p> Out Of <p>'+ allQuestions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    } else{
        let scoreTag = '<span>Sorry! You Got <p>'+ userScore +'</p> Out Of <p>'+ allQuestions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

function startTimer(time) {
    counter = setInterval(timer, 1000);

    function timer() {
        timeCount.textContent = time;
        time--;

        if (time < 9) {
            let addZero = timeCount.textContent;
            timeCount.textContent = 0 + addZero;
        }

        if (time < 0) {
            clearInterval(counter);
            timeCount.textContent = "00";
        }
    }
}

function startTimeLine(time) {
    counterLine = setInterval(timer, 50);
    function timer() {
        time += 1;
        timeLine.style.width = time + 'px';

        if (time >  319) {
            clearInterval(counterLine);
        }
    }
}