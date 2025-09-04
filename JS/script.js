// Set the current year in the footer
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("current-year").textContent =
    new Date().getFullYear();
});

function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "flex";
}
function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}
// This function runs after the HTML document is fully loaded and ready
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  if (!contactForm) {
    return; // Stop if the form doesn't exist on the page
  }

  // Get input fields and the divs where errors will be shown
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");

  // --- HELPER FUNCTIONS to show and hide errors ---
  function showError(inputElement, errorElement, message) {
    inputElement.classList.add("error-field");
    errorElement.textContent = message;
    errorElement.style.display = "block";
  }

  function clearError(inputElement, errorElement) {
    inputElement.classList.remove("error-field");
    errorElement.style.display = "none";
  }

  // --- EVENT LISTENERS to clear errors as the user types ---
  nameInput.addEventListener("input", () => clearError(nameInput, nameError));
  emailInput.addEventListener("input", () =>
    clearError(emailInput, emailError)
  );
  messageInput.addEventListener("input", () =>
    clearError(messageInput, messageError)
  );

  // --- FORM SUBMISSION LOGIC ---
  contactForm.addEventListener("submit", function (event) {
    let isFormValid = true;

    // Clear all previous errors before validating again
    clearError(nameInput, nameError);
    clearError(emailInput, emailError);
    clearError(messageInput, messageError);

    // --- VALIDATION CHECKS ---
    // Name validation
    if (nameInput.value.trim() === "") {
      isFormValid = false;
      showError(nameInput, nameError, "Full name is required.");
    } else if (nameInput.value.length > 120) {
      isFormValid = false;
      showError(
        nameInput,
        nameError,
        "Full name cannot exceed 120 characters."
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === "") {
      isFormValid = false;
      showError(emailInput, emailError, "Email address is required.");
    } else if (emailInput.value.length > 120) {
      isFormValid = false;
      showError(emailInput, emailError, "Email cannot exceed 120 characters.");
    } else if (!emailRegex.test(emailInput.value)) {
      isFormValid = false;
      showError(emailInput, emailError, "Please enter a valid email address.");
    }

    // Message validation
    if (messageInput.value.trim() === "") {
      isFormValid = false;
      showError(messageInput, messageError, "Message is required.");
    } else if (messageInput.value.length > 1000) {
      isFormValid = false;
      showError(
        messageInput,
        messageError,
        "Message cannot exceed 1000 characters."
      );
    }

    // If the form is NOT valid, prevent it from submitting
    if (!isFormValid) {
      event.preventDefault();
    }
    // If the form IS valid, the browser will proceed with the submission automatically.
  });
})();
