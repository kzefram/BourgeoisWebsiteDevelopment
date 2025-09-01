// Set the current year in the footer
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("current-year").textContent =
    new Date().getFullYear();
});

document.addEventListener("DOMContentLoaded", function () {
  // Set the current year in the footer if the element exists
  const currentYearEl = document.getElementById("current-year");
  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
  }

  // Get the hamburger button and the mobile menu container from the HTML
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");

  // Make sure both elements actually exist on the page before adding a listener
  if (hamburger && mobileMenu) {
    // When the hamburger icon is clicked, toggle the ".is-open" class on the menu
    hamburger.addEventListener("click", () => {
      mobileMenu.classList.toggle("is-open");
    });
  }
});