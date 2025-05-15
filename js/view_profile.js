window.onload = function () {
  const data = JSON.parse(localStorage.getItem("userProfile")) || {};
  if (data.image) document.getElementById("profileImage").src = data.image;
  document.getElementById("name").value = data.name || "";
  document.getElementById("email").value = data.email || "";
  document.getElementById("phone").value = data.phone || "";
  document.getElementById("address").value = data.address || "";
};

// Save profile data
function saveProfile() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const address = document.getElementById("address").value.trim();
  const image = document.getElementById("profileImage").src;

  const userProfile = { name, email, phone, address, image };
  localStorage.setItem("userProfile", JSON.stringify(userProfile));
  alert("Profile updated successfully!");
}

// Image upload preview
document.getElementById("imageUpload").addEventListener("change", function () {
  const reader = new FileReader();
  reader.onload = function (e) {
    document.getElementById("profileImage").src = e.target.result;
  };
  if (this.files[0]) {
    reader.readAsDataURL(this.files[0]);
  }
});
