document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();

  // Clear messages
  document.getElementById('successMessage').textContent = "";
  document.getElementById('nameError').textContent = "";
  document.getElementById('emailError').textContent = "";
  document.getElementById('messageError').textContent = "";

  let isValid = true;

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name === "") {
    document.getElementById('nameError').textContent = "Name is required.";
    isValid = false;
  }

  if (email === "") {
    document.getElementById('emailError').textContent = "Email is required.";
    isValid = false;
  } else if (!emailRegex.test(email)) {
    document.getElementById('emailError').textContent = "Enter a valid email.";
    isValid = false;
  }

  if (message === "") {
    document.getElementById('messageError').textContent = "Message is required.";
    isValid = false;
  }

  if (isValid) {
    document.getElementById('successMessage').textContent = "Your message has been sent!";
    document.getElementById('contactForm').reset();
  }
});
