const firstBtn = document.querySelector(".btn button");
const rulesBox = document.querySelector(".rulesBox");

firstBtn.onclick = () => {
    rulesBox.classList.add("activeInfo");
}