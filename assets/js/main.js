// let box = document.querySelector("#b1");
// var input1 = document.querySelector("#i1");
// var input2 = document.querySelector("#i2");

// input1.addEventListener("input", () => {
//     box.style.justifyContent = input1.value;
// }); 
// input2.addEventListener("input", () => {
//     box.style.alignItems = input2.value;
// }); 


const box = document.querySelector("#b1");
const hintBox = document.querySelector("#hintFlexContainer");
const input1 = document.querySelector("#i1");
const input2 = document.querySelector("#i2");
const taskElement = document.querySelector("#task");
const result = document.querySelector("#result");
const checkButton = document.querySelector("#check");

const justifyOptions = ["flex-start", "center", "flex-end", "space-between", "space-around"];
const alignOptions = ["flex-start", "center", "flex-end", "stretch"];

function generateRandomTask() {
    const randomJustify = justifyOptions[Math.floor(Math.random() * justifyOptions.length)];
    const randomAlign = alignOptions[Math.floor(Math.random() * alignOptions.length)];
    
    taskElement.textContent = `Task: Set justify-content to '${randomJustify}' and align-items to '${randomAlign}'`;

    // Set hintBox with task position
    hintBox.style.justifyContent = randomJustify;
    hintBox.style.alignItems = randomAlign;

    return { randomJustify, randomAlign };
}

const targetPosition = generateRandomTask();

input1.addEventListener("input", () => {
    box.style.justifyContent = input1.value;
});

input2.addEventListener("input", () => {
    box.style.alignItems = input2.value;
});

checkButton.addEventListener("click", () => {
    const userJustify = input1.value.trim();
    const userAlign = input2.value.trim();

    if (userJustify === targetPosition.randomJustify && userAlign === targetPosition.randomAlign) {
        result.textContent = "Congratulations! Mario is in the correct position!";
    } else {
        result.textContent = "Try again! Mario is not in the correct position.";
    }
});
