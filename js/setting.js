document.addEventListener("DOMContentLoaded", function () {
  const sidebarToggle = document.getElementById("sidebarToggle");
  const sidebar = document.getElementById("sidebar");
  const contentWrapper = document.querySelector(".content-wrapper");
  const navbar = document.querySelector("nav");

  sidebarToggle.addEventListener("click", function () {
    sidebar.classList.toggle("active");
  });
});

fetch("/NavBar.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("navbar-container").innerHTML = data;
  });
