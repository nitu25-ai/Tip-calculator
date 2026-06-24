const billInput = document.getElementById("bill");
const tipSelect = document.getElementById("tip");
const peopleInput = document.getElementById("people");
const button = document.getElementById("calculate");

const tipOutput = document.getElementById("tipPerPerson");
const totalOutput = document.getElementById("totalPerPerson");

button.addEventListener("click", function () {
  
  const bill = parseFloat(billInput.value);
  const tipPercent = parseFloat(tipSelect.value);
  const people = parseInt(peopleInput.value);

  if (isNaN(bill) || isNaN(people) || bill <= 0 || people <= 0) {
    alert("Please enter valid values");
    return;
  }

  const totalTip = bill * tipPercent / 100;
  const tipPerPerson = totalTip / people;
  const totalPerPerson = (bill + totalTip) / people;

  tipOutput.textContent = "Tip per person: ₹" + tipPerPerson.toFixed(2);
  totalOutput.textContent = "Total per person: ₹" + totalPerPerson.toFixed(2);
});