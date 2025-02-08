  lucide.createIcons();

    function toggleDropdown(id) {
      const dropdown = document.getElementById(id);
      const icon = document.getElementById(`${id}-icon`);
      dropdown.classList.toggle('show');

      // Toggle the icon between chevron-down and chevron-up
      if (dropdown.classList.contains('show')) {
        icon.setAttribute('data-lucide', 'chevron-up');
      } else {
        icon.setAttribute('data-lucide', 'chevron-down');
      }
      lucide.createIcons(); // Reinitialize icons to update the displayed icon
    }

    function toggleMenu() {
      const menu = document.getElementById('menu-content');
      menu.classList.toggle('hidden');
    }
    //sidebar JS
     document.addEventListener("DOMContentLoaded", function () {
      const sidebar = document.getElementById("sidebar");
      const sidebarCollapse = document.getElementById("sidebarCollapse");
      const overlay = document.querySelector(".overlay");

      // Toggle Sidebar
      sidebarCollapse.addEventListener("click", function () {
        sidebar.classList.toggle("active");
        overlay.classList.toggle("active");
      });

      // Close sidebar when clicking overlay (mobile)
      overlay.addEventListener("click", function () {
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
      });
    });
