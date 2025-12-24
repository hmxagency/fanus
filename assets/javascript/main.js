const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  const dropdowns = document.querySelectorAll('.dropdown');
  const body = document.body;

  // Menüyü açma/kapatma fonksiyonu
  function toggleMenu() {
    const isOpen = navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
    
    // Menü açıksa kaydırmayı kapat, kapalıysa aç
    if (isOpen) {
      body.classList.add('no-scroll');
    } else {
      body.classList.remove('no-scroll');
    }
  }

  // Menüyü tamamen kapatma fonksiyonu
  function closeMenu() {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
    body.classList.remove('no-scroll');
    dropdowns.forEach(d => d.classList.remove('active'));
  }

  // Hamburger Tıklama
  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // Mobil Dropdown
  dropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector('.dropdown-toggle');
    toggle.addEventListener('click', (e) => {
      if (window.innerWidth <= 992) {
        e.preventDefault();
        e.stopPropagation();
        dropdown.classList.toggle('active');
      }
    });
  });

  // Linklere tıklandığında kapat
  document.querySelectorAll('.nav-links a:not(.dropdown-toggle)').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Dışarı tıklandığında kapat
  document.addEventListener('click', (event) => {
    if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
      closeMenu();
    }
  });