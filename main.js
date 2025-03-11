document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  menuToggle?.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Initialize map
  const map = L.map('map').setView([44.227405, 12.026664], 15);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
  L.marker([44.227405, 12.026664]).addTo(map)
    .bindPopup('Commerciale Clima Plus<br>Viale Bologna 24, Forlì')
    .openPopup();
});