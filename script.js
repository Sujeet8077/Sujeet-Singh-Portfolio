// Toggle Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
} else {
  console.error("Hamburger or Nav Links element not found!");
}

// Simple interactivity for contact (if you add a form later)
function submitForm() {
  alert("Thank you! Your message has been sent.");
  return false; 
}

console.log("Portfolio site loaded.");