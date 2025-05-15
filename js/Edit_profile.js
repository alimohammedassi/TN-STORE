const imageInput = document.getElementById("image");
const preview = document.getElementById("preview");

// Preview uploaded image
imageInput.addEventListener("change", function () {
  const file = imageInput.files[0];
  const reader = new FileReader();

  reader.onload = function (e) {
    preview.src = e.target.result;
    preview.style.display = "block";
  };

  if (file) {
    reader.readAsDataURL(file);
  }
});

// Save profile data to localStorage and redirect
function saveProfile() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const image = preview.src;

  const userProfile = { name, email, phone, image };
  localStorage.setItem("userProfile", JSON.stringify(userProfile));

  window.location.href = "ViewProfile.html"; // Redirect to view profile page
}
