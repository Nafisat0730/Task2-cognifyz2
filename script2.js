
// Function to get the current time
function getCurrentTime() {
  const date = new Date();
  const hours = date.getHours();

  return hours;
}

// Function to display a greeting message
function displayGreeting() {
  const currentTime = getCurrentTime();

  let greetingMessage;

  if (currentTime < 12) {
      greetingMessage = 'Good morning!';
  } else if (currentTime < 18) {
      greetingMessage = 'Good afternoon!';
  } else {
      greetingMessage = 'Good evening!';
  }

  alert(greetingMessage);
}

// Call the displayGreeting function
displayGreeting();