
// Get the button element
const button = document.getElementById('color-button');

// Function to change button color
function changeColor() {
    // Generate a random color
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

    // Change the button's background color
    button.style.background = randomColor;
}

// Add event listener to the button
button.addEventListener('click', changeColor);