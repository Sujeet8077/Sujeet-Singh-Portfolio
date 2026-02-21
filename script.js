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

// Copy Email to Clipboard Function
function copyEmail() {
  const myEmail = "sujeetsingh8077@gmail.com";
  
  // Use the Clipboard API to copy the text
  navigator.clipboard.writeText(myEmail)
    .then(() => {
      // Success feedback
      alert("Success! My email address (" + myEmail + ") has been copied to your clipboard.");
    })
    .catch(err => {
      // Fallback if the browser blocks the copy action
      console.error("Failed to copy text: ", err);
      alert("Oops! Auto-copy failed. My email is: " + myEmail);
    });
}