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
