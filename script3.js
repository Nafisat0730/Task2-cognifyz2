
// Get the input elements
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');

// Get the button element
const addButton = document.getElementById('add-button');

// Get the result element
const resultElement = document.getElementById('result');

// Function to add two numbers
function addNumbers() {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    if (isNaN(num1) || isNaN(num2)) {
        resultElement.textContent = 'Invalid input!';
    } else {
        const result = num1 + num2;
        resultElement.textContent = `Result: ${result}`;
    }
}

// Add event listener to the button
addButton.addEventListener('click', addNumbers);