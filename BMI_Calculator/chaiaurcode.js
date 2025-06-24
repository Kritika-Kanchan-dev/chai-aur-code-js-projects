const form = document.querySelector('form');
console.log(form);
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const result = document.getElementById('results');
  const height = parseInt(document.getElementById('height').value);
  const weight = parseInt(document.getElementById('weight').value);
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);
  if (height === isNaN(height) || height === '' || height < 0) {
    result.innerHTML = 'Enter Valid Height';
  } else if (weight === isNaN(weight) || weight === '' || weight < 0) {
    result.innerHTML = 'Enter Valid weight';
  } else {
    console.log(result);
    console.log(bmi);
    result.innerHTML = bmi;
  }
  // under weight : less than 18.6
  // normal range : 18.6 to 24.9
  // overweight : greater than 24.9
  const display = document.getElementById('place');
  if (bmi > 24.9) {
    display.textContent = 'overweight : greater than 24.9';
  } else if (bmi < 18.6) {
    display.textContent = 'under weight : less than 18.6';
  } else {
    display.textContent = 'normal range : 18.6 to 24.9';
  }
});
