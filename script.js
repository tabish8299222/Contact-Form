const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const messageValue = messageInput.value.trim();

  if (!isValidName(nameValue)) {
    alert('Please enter a valid name');
    return;
  }

  if (!isValidEmail(emailValue)) {
    alert('Please enter a valid email address');
    return;
  }

  if (!isValidMessage(messageValue)) {
    alert('Please enter a message');
    return;
  }

  // If all validation passes, send the form data to the server
  console.log('Form data:', {
    name: nameValue,
    email: emailValue,
    message: messageValue,
  });
});

function isValidName(value) {
  return value.length > 0;
}

function isValidEmail(value) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(value);
}

function isValidMessage(value) {
  return value.length > 0;
}