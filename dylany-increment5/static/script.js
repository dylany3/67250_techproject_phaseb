
var now = new Date();
var hour = now.getHours();

function greeting(x) {
  const el = document.getElementById("greeting");
  if (!el) return; 
  if (x < 5 || x >= 20) {
    el.innerHTML = "Good night";
  } else if (x < 12) {
    el.innerHTML = "Good morning";
  } else if (x < 18) {
    el.innerHTML = "Good afternoon";
  } else {
    el.innerHTML = "Good evening";
  }
}
greeting(hour);


function addYear() {
  const el = document.getElementById("copyYear");
  if (!el) return; 
  el.innerHTML = new Date().getFullYear();
}
addYear();

function toggleNav() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return; 
  navbar.classList.toggle("responsive");
}

if (document.getElementById("map")) {
  var map = L.map("map").setView([40.4433, -79.9436], 15);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);

  L.marker([40.4433, -79.9436])
    .addTo(map)
    .bindPopup("<b>MonoMuse Museum</b><br>Carnegie Mellon University")
    .openPopup();
}