document.getElementById('calculateBtn').addEventListener('click', function () {
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);
  const age = document.getElementById('age').value;
  const gender = document.querySelector('input[name="gender"]:checked')?.value;

  const categoryElement = document.getElementById('category');
  const resultElement = document.getElementById('result');

  if (weight > 0 && height > 0 && age && gender) {
      const heightInMeters = height / 100;
      const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

      let category = '';
      let categoryColor = ''; // Define a variable for the color

      if (bmi < 18.5) {
          category = 'Underweight';
          categoryColor = 'yellow';  // Set color for underweight
      } else if (bmi < 24.9) {
          category = 'Normal weight';
          categoryColor = 'green';   // Set color for normal weight
      } else if (bmi < 29.9) {
          category = 'Overweight';
          categoryColor = 'red';     // Set color for overweight
      } else {
          category = 'Obese';
          categoryColor = 'black';   // Set color for obese
      }

      resultElement.innerText = bmi;
      categoryElement.innerText = `Category: ${category}`;
      categoryElement.style.color = categoryColor; // Apply the color dynamically
  } else {
      resultElement.innerText = '00.00';
      categoryElement.innerText = 'Please fill all the fields correctly.';
      categoryElement.style.color = 'inherit';  // Reset color if fields are not filled correctly
  }
});
