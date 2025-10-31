// CMPM 121 Smelly Code Activity

let counter = 0;

// These constants are for button IDs and heading text
const a = "increment", b = "counter", h = "CMPM 121 Project";
const buttonIncrement = document.getElementById(a);
const buttonDecrement = document.getElementById("dec");
const buttonReset = document.getElementById("reset");
const counterElement = document.getElementById(b);

function startSetup() {
  // Create the HTML for the counter
  document.body.innerHTML = `
    <h1>${h}</h1>
    <p>Counter: <span id="${b}">0</span></p>
    <button id="${a}">Click Me!</button>
    <button id="dec">Decrement</button>
    <button id="reset">Reset</button>
  `;

  // Check if any element is missing, then exit the function
  if (!buttonIncrement || !buttonDecrement || !buttonReset || !counterElement) {
    return;
  }

  buttonIncrement.addEventListener("click", () => {
    counter++;
    updateCounterDisplay();
  });

  buttonDecrement.addEventListener("click", () => {
    counter--;
    updateCounterDisplay();
  });

  buttonReset.addEventListener("click", () => {
    counter = 0;
    updateCounterDisplay();
  });
}

function updateCounterDisplay() {
  if (!counterElement) return;
  counterElement.innerHTML = `${counter}`;
  document.title = "Clicked " + counter;
  // Change the background color based on even/odd count
  document.body.style.backgroundColor = counter % 2 ? "pink" : "lightblue";
}

// Start the counter app
startSetup();
