"use strict";
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  // Get and trim values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  // Check for empty or whitespace-only inputs
  if (!name || !email || !message) {
    formMessage.textContent = "Please fill out all fields with valid input.";
    formMessage.style.display = "block";
    return;
  }
  // All good, show thank you popup
  document.getElementById('thankYouPopup').style.display = 'block';
  this.reset();
});
document.getElementById('closeModal').addEventListener('click', function() {
  document.getElementById('thankYouPopup').style.display = 'none';
});

