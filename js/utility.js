document.addEventListener("DOMContentLoaded", function () {
  fetch('/NavBar.html')
    .then(res => res.text())
    .then(data => {
      // حط النافبار في مكانها العادي
      document.getElementById('navbar-container').innerHTML = data;

      // كمان انسخ نفس النافبار للـsidebar على الموبايل
      const sidebar = document.getElementById('sidebar');
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = data;

      // خد بس الروابط والأزرار المهمة
      const navLinks = tempDiv.querySelectorAll('a, button');
      navLinks.forEach(link => {
        sidebar.appendChild(link.cloneNode(true));
      });
    });
});
