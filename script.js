let count = 0;
let result = "";

function DisplayKaprekarsNumberInHTML() {
  // result = "";
  //   let div = document.getElementById("result");
  //   div.classList.add("bg-green-300 rounded-lg")
  let input = document.getElementById("fourDigitNumber").value;
  if (
    // input == "" ||
    // /[a-zA-Z]/.test(input) ||
    // /[!@#$%^&*()_ +\-=\[\]{};':"\\|,.<>\/?]+/.test(input)
    /[^0-9]/.test(input)
  ) {
    alert("Please enter valid input");
  } else if (input.length > 4 || input.length < 4) {
    alert("Please enter 4 digit number");
  } else {
    let angelNumber = Array.from(input);
    let isAngelNumber = angelNumber.every((e) => {
      return angelNumber[0] == e;
    });

    if (isAngelNumber) {
      alert(`Please do not enter numbers like 1111 or 4444 (Angel Numbers)`);
    } else {
      clearDiv();
      result = "";
      createDiv();
      // calculateKaprekarsNumber(input);
      // document.getElementById("result").innerHTML = result;
      document.getElementById("result").innerHTML =
        calculateKaprekarsNumber(input);
    }
  }
}

function calculateKaprekarsNumber(fourDigitNumber) {
  let number = Array.from(fourDigitNumber);
  let min = number.sort();
  minNum = min.join("");
  let max = number.sort(function (a, b) {
    return b - a;
  });
  maxNum = max.join("");
  let diff = String(maxNum - minNum);

  // console.log(`Step ${count} : ${maxNum} - ${minNum} = ${diff}`);
  result =
    result +
    `Step ${++count} : ${maxNum} - ${minNum} = <strong> ${diff} </strong></br>`;
  //   document.getElementById("result").innerHTML = result;
  if (diff == 6174) {
    // count = 0;
    count = 0;
  } else if (diff.length == 3) {
    diff = "0" + diff;
    calculateKaprekarsNumber(diff);
  } else if (diff == 0) {
    alert(`${fourDigitNumber} is giving difference as 0`);
  } else {
    calculateKaprekarsNumber(diff);
  }
  return result;
}

function clearDsiplay() {
  clearInput();
  clearDiv();
  //   document.getElementById("result").innerHTML = "";
}

function clearDiv() {
  // let resultDiv = document.getElementById("result").remove();
  // let resultDiv = document.getElementById("result").remove();
  let resultDiv = document.querySelectorAll(".result");

  resultDiv.forEach((div) => {
    div.remove();
  });
}
function clearInput() {
  document.getElementById("fourDigitNumber").value = "";
}

function isAngelNumber(number) {
  number.every((e) => {
    return number[0] == e;
  });
}

function createDiv() {
  let buttons = document.getElementById("buttons");
  let div = document.createElement("div");
  div.setAttribute("id", "result");
  div.setAttribute(
    "class",
    "m-10 rounded-lg w-auto bg-white p-5 shadow-lg result"
  );
  buttons.parentNode.insertBefore(div, buttons.nextSibling);
}

// function expandView(){
//   let info = document.querySelector(".information");
//   // info.classList.toggle("displayBlock");
//   info.classList.toggle("hidden");

// }

document.getElementById("btnExpand").addEventListener("click", function () {
  let info = document.querySelector(".information");
  // info.classList.toggle("displayBlock");
  info.classList.toggle("hidden");
  document
    .querySelector(".material-symbols-outlined")
    .classList.toggle("rotate-180");
});
