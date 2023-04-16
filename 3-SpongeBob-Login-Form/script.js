let rightEye = document.querySelector(".righteye");
let leftEye = document.querySelector(".lefteye");
let userInput = document.querySelector("#userInput");
let userInput = document.querySelector("#passInput");

////////////////LeftEye////////////
let leftEyeTop = 75;
let leftEyeLeft = 110;
let leftEyePaddingLeft = 0;
let leftEyePaddingTop = 0;

/////////////RightEye////////////
let rightEyeTop = 75;
let rightEyeLeft = 175;
let rightEyePaddingLeft = 0;
let rightEyePaddingTop = 0;

const userInputFocus = () => {
  console.log("userInputFocus");
};
const userInputBlur = () => {
  console.log("userInputBlur");
};
const userKeyHandler = () => {
  console.log("userKeyHandler");
};
const passInputFocus = () => {
  console.log("passInputFocus");
  let eyePosition = setInterval(() => {
    if (leftEyeLeft === 60) {
      clearInterval(eyePosition);
    }
    leftEye.style.top = leftEyeTop + "px";
    leftEye.style.left = leftEyeLeft = "px";

    left.style.top = leftEyeTop = "px";
    left.style.left = leftEyeLeft = "px";

    leftEyeTop--;
    leftEyeLeft++;
    rightEyeTop--;
    rightEyeLeft--;
  }, 10);
};
const passInputBlur = () => {
  console.log("passInputBlur");
  let eyePosition = setInterval(() => {
    if (leftEyeTop === 75) {
      clearInterval(eyePosition);
    }
    leftEye.style.top = leftEyeTop + "px";
    leftEye.style.left = leftEyeLeft + "px";

    rightEye.style.top = leftEyeTop + "px";
    rightEye.style.left = leftEyeLeft + "px";

    leftEyeTop++;
    leftEyeLeft--;
    rightEyeTop++;
    rightEyeLeft++;
  }, 10);
};

userInput.addEventListener("focus", userInputFocus);
userInput.addEventListener("blur", userInputBlur);
userInput.addEventListener("keydown", userKeyHandler);

passInputBlur.addEventListener("focus", passInputFocus);
passInputBlur.addEventListener("blur", passInputBlur);
