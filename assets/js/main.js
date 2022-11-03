const inputHeight = document.querySelector("#input-height");
const inputAge = document.querySelector("#input-age");
const inputWeight = document.querySelector("#input-weight");
const inputRadioMale = document.querySelector("#input-radio-male");
const inputRadioFemale = document.querySelector("#input-radio-female");
const inputSelectActivity = document.querySelector("#input-select-activity");
const outputGrundumsatzKcal = document.querySelector("#grundumsatz-kcal");
const outputGrundumsatzKj = document.querySelector("#grundumsatz-kj");
const outputGesamtumsatzKcal = document.querySelector("#gesamtumsatz-kcal");
const outputGesamtumsatzKj = document.querySelector("#gesamtumsatz-kj");
const inputForm = document.querySelector("#form");
const inputAll = document.querySelectorAll("input");
const inputSelect = document.querySelectorAll("select");

const Kcal2Kj = 4.184;
let formSubmitted = false;

const calcGrundumsatz = (event) => {
  if (inputRadioMale.checked == true) {
    return (
      664.7 +
      13.7 * Number(inputWeight.value) +
      5 * Number(inputHeight.value) -
      6.8 * Number(inputAge.value)
    );
  } else if (inputRadioFemale.checked) {
    return (
      655.1 +
      9.6 * Number(inputWeight.value) +
      1.8 * Number(inputHeight.value) -
      4.7 * Number(inputAge.value)
    );
  }
};
const calcGesamtumsatz = () => {
  return calcGrundumsatz() * Number(inputSelectActivity.value);
};
const formatOutput = (paramInput) => {
  return Number(paramInput).toFixed(0);
};
const checkData = () => {
  if (inputHeight.value == "" || inputWeight.value == "" || inputAge.value == "") {
    return false;
  } else {
    return true;
  }
};
const calc = (event) => {
  event.preventDefault();
  if (checkData()) {
    outputGrundumsatzKcal.innerHTML = formatOutput(calcGrundumsatz());
    outputGrundumsatzKj.innerHTML = formatOutput(calcGrundumsatz() * Kcal2Kj);
    outputGesamtumsatzKcal.innerHTML = formatOutput(calcGesamtumsatz());
    outputGesamtumsatzKj.innerHTML = formatOutput(calcGesamtumsatz() * Kcal2Kj);
    formSubmitted = true;
  }
};
const checkInput = (event) => {
  if (formSubmitted) {
    calc(event);
  }
};
inputForm.addEventListener(`submit`, calc);
inputAll.forEach((element) => addEventListener(`change`, checkInput));
inputSelect.forEach((element) => addEventListener(`change`, checkInput));
