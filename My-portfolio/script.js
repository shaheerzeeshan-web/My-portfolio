// Theme Toggle
// Theme Toggle
const colorBtn = document.getElementById("colorBtn");
const body = document.body;

colorBtn.addEventListener("click", () => {
  body.classList.toggle("light-theme");
});

// Smooth Scroll for Navigation
const navLinks = document.querySelectorAll(".nav-links a");
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
});

// Contact Form Validation
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    formStatus.textContent = "Please fill in all fields.";
    formStatus.style.color = "red";
  } else if (!email.includes("@")) {
    formStatus.textContent = "Please enter a valid email.";
    formStatus.style.color = "red";
  } else {
    formStatus.textContent = "Thank you for your idea, Shaheer will review it!";
    formStatus.style.color = "green";
    contactForm.reset();
  }
});
