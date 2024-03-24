/* Header */
const headTitle = "Guess => Word | Game";
document.title = headTitle;
document.querySelector("h1").textContent = headTitle;
/* Game Code ==> [Design] */
const keyColors = [...document.querySelectorAll(".color")];
keyColors.forEach((ele) => {
  ele.style.backgroundColor = `var(--${ele.dataset.color}-color)`;
});
// PlaySection
const playSection = document.querySelector(".play-section");
const buttonsDiv = document.querySelector(".buttons");
let tries = 5;
let inputs = 6;
for (let i = 0; i < tries; i++) {
  const tryDiv = document.createElement("div");
  tryDiv.className = `try-${i + 1}`;

  const h3 = document.createElement("h3");
  h3.textContent = `Try ${i + 1}`;
  tryDiv.append(h3);

  for (let i = 0; i < inputs; i++) {
    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("maxlength", "1");
    tryDiv.append(input);

    input.oninput = () => {
      input.value = input.value.toUpperCase();
    };
  }
  buttonsDiv.before(tryDiv);
}
/* Game Code ==> [Back-End] */
const check = document.querySelector(".check");
const hint = document.querySelector(".hint");
let activeLine = 0;
let wordGenerator = [
  "CREATE",
  "UPDATE",
  "DELETE",
  "MASTER",
  "BRANCH",
  "MAINLY",
  "ELZERO",
  "SCHOOL",
  "ANIMAL",
  "BANANA",
  "GUITAR",
  "IMPACT",
  "INSECT",
  "JACKET",
  "JUNGLE",
  "KERNEL",
  "LAPTOP",
  "ORANGE",
  "OUTPUT",
  "PILLOW",
  "RANDOM",
  "BOTTLE",
  "CIRCLE",
  "DANGER",
  "ENGINE",
  "FLOWER",
  "KITTEN",
  "MOTHER",
  "QUIVER",
  "TURTLE",
  "UNICORN",
  "ANCHOR",
  "BASKET",
  "CHERRY",
  "DOCTOR",
  "EMPIRE",
  "FALCON",
  "GARDEN",
  "HAMMER",
  "MARBLE",
  "NEEDLE",
  "NUMBER",
  "QUAINT",
  "ROCKET",
  "SALUTE",
  "SPIRIT",
  "TARGET",
  "TENNIS",
  "UNIQUE",
  "VISION",
  "WALLET",
  "WINTER",
  "YELLOW",
  "ZEPHYR",
  "CANDLE",
  "FATHER",
  "MUFFIN",
  "PRINCE",
];
wordGenerator =
  wordGenerator[Math.floor(Math.random() * (wordGenerator.length - 1))];
window.onload = disabled();
window.onload = function () {
  playSection.children[0].children[1].focus();
};
check.addEventListener("click", checkButton);
hint.addEventListener("click", hintButton);
function checkButton() {
  if (activeLine < tries) {
    let inputsChecker = [
      ...document.querySelectorAll(
        `.play-section div:nth-child(${activeLine + 1}) input`
      ),
    ];
    for (let i in inputsChecker) {
      if (inputsChecker[i].value == "") {
        inputsChecker[i].style.cssText =
          "color: var(--white-color); background-color: var(--dark-color);";
      } else {
        const regexp = new RegExp(inputsChecker[i].value, "i");
        if (wordGenerator.match(regexp)) {
          inputsChecker[i].style.cssText =
            "color: var(--white-color); background-color: var(--warning-color);";
          if (inputsChecker[i].value == wordGenerator[i]) {
            inputsChecker[i].style.cssText =
              "color: var(--white-color); background-color: var(--success-color);";
          }
        } else {
          inputsChecker[i].style.cssText =
            "color: var(--white-color); background-color: var(--dark-color);";
        }
      }
      if (
        playSection.children[activeLine].children[1].value ==
          wordGenerator[0] &&
        playSection.children[activeLine].children[2].value ==
          wordGenerator[1] &&
        playSection.children[activeLine].children[3].value ==
          wordGenerator[2] &&
        playSection.children[activeLine].children[4].value ==
          wordGenerator[3] &&
        playSection.children[activeLine].children[5].value ==
          wordGenerator[4] &&
        playSection.children[activeLine].children[6].value == wordGenerator[5]
      ) {
        activeLine = tries;
        check.classList.add("disabled");
        hint.classList.add("disabled");
        check.style.cssText = `opacity: 0.5;`;
        hint.style.cssText = `opacity: 0.5;`;
        playSection.children[tries - 1].style.opacity = 0.5;
        playSection.style.opacity = 0.5;
        playSection.style.pointerEvents = "none";
      }
    }
    activeLine++;
    if (activeLine == tries) {
      check.classList.add("disabled");
      hint.classList.add("disabled");
      check.style.cssText = `opacity: 0.5;`;
      hint.style.cssText = `opacity: 0.5;`;
      playSection.children[tries - 1].style.opacity = 0.5;
      playSection.style.opacity = 0.5;
      playSection.style.pointerEvents = "none";
    }
    disabled();
  }
}
let indexOfGuess;
let hints = 2;
function hintButton() {
  if (hints >= 1) {
    let rand = Math.floor(Math.random() * wordGenerator.length);
    if (rand !== indexOfGuess) {
      indexOfGuess = rand;
    } else {
      if (indexOfGuess == wordGenerator.length - 1) {
        indexOfGuess--;
      } else {
        indexOfGuess++;
      }
    }
    playSection.children[activeLine].children[1 + indexOfGuess].value =
      wordGenerator[indexOfGuess];
  }
  if (hints > 1) {
    hints--;
    hint.textContent = `${hints} Hint`;
  } else {
    if (hints > 0) {
      hints--;
    }
    hint.textContent = `0 Hints`;
    hint.style.cssText = "cursor: not-allowed; opacity: 0.5;";
  }
}
function disabled() {
  const items = [
    ...document.querySelectorAll(".play-section div:not(:last-child)"),
  ];
  for (let i in items) {
    if (i == activeLine) {
      items[i].classList.remove("disabled");
    } else {
      items[i].classList.add("disabled");
    }
  }
}
function inputsEvent() {}
/* Footer */
const footer = `Copyrights &copy; All Rights Reserved <a href="https://github.com/N6w9f">Nawaf</a>`;
document.querySelector("footer").innerHTML = footer;

console.log(wordGenerator)