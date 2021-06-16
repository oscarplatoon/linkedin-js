const changeBio = () => {
  let bioSummary = document.getElementById('bio-summary')

  bioSummary.innerHTML = "Phrasing?"
}

const changeBoxes = () => {
document.querySelector('button').style.backgroundColor = 'blue';
}

const changeDivTest = () => {
let x = document.querySelector('div > p');
x.innerHTML = "Thanks for clicking.";

}

const alertUser = () => {
  alert("I told you not to click me!")
}


const b = document.getElementById('alert-button');
b.onmouseover = logMouseOver;
b.onmouseout = logMouseOut;

function logMouseOver() {
  b.textContent = 'WHAT DID I SAY?!';
}

function logMouseOut() {
  b.textContent = "That's what i thought";
}

