document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("navbar-container")) {
    fetch("NavBar.html")
      .then((response) => response.text())
      .then((data) => {
        document.getElementById("navbar-container").innerHTML = data;

        const cartIcon = document.getElementById("cartIcon");
       
      })
      
      
  }

  const sidebarToggle = document.getElementById("sidebarToggle");
  const sidebar = document.getElementById("sidebar");
  const contentWrapper = document.querySelector(".content-wrapper");
  const navbar = document.querySelector("nav");

  if (sidebarToggle && sidebar && contentWrapper) {
    sidebarToggle.addEventListener("click", function () {
      sidebar.classList.toggle("active");

      if (sidebar.classList.contains("active")) {
        contentWrapper.style.marginLeft = "0.1px";
        if (navbar) {
          navbar.style.marginLeft = "0.1px";
          navbar.style.width = "calc(100% - 0.1px)";
        }
      } else {
        contentWrapper.style.marginLeft = "0";
        if (navbar) {
          navbar.style.marginLeft = "0";
          navbar.style.width = "100%";
        }
      }
    });
  }

  const contactForm = document.getElementById("contactForm");
  if (!contactForm) return;
});

