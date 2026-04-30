const imagenes = [
  "assets/imagen-anaglifo1.jpg",
  "assets/imagen-anaglifo2.jpg",
  "assets/imagen-anaglifo3.jpg",
  "assets/imagen-anaglifo4.jpg",
  "assets/imagen-anaglifo5.jpg",
  "assets/imagen-anaglifo6.jpg",
  "assets/imagen-anaglifo7.jpg",
  "assets/imagen-anaglifo8.jpg",
  "assets/imagen-anaglifo9.jpg",
  "assets/imagen-anaglifo10.jpg",
  "assets/imagen-anaglifo11.jpg",
  "assets/imagen-anaglifo12.jpg",
  "assets/imagen-anaglifo13.jpg",
  "assets/imagen-anaglifo14.jpg",
  "assets/imagen-anaglifo15.jpg",
];

const carouselInner = document.getElementById("carouselInner");
const indicadores = document.getElementById("indicadores");

imagenes.forEach((img, index) => {
  // SLIDE
  const div = document.createElement("div");
  div.classList.add("carousel-item");
  if (index === 0) div.classList.add("active");

  div.innerHTML = `<img src="${img}" class="d-block w-100">`;
  carouselInner.appendChild(div);

  // INDICADOR
  const btn = document.createElement("button");
  btn.setAttribute("data-bs-target", "#carouselExample");
  btn.setAttribute("data-bs-slide-to", index);

  if (index === 0) btn.classList.add("active");

  indicadores.appendChild(btn);
});

// AUTOPLAY
const carousel = new bootstrap.Carousel("#carouselExample", {
  interval: 3000,
  ride: "carousel",
});
