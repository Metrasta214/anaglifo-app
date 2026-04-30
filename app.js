const imagenes = [
  "assets/imagen-anaglifo1.JPG",
  "assets/imagen-anaglifo2.JPG",
  "assets/imagen-anaglifo3.JPG",
  "assets/imagen-anaglifo4.JPG",
  "assets/imagen-anaglifo5.JPG",
  "assets/imagen-anaglifo6.JPG",
  "assets/imagen-anaglifo7.JPG",
  "assets/imagen-anaglifo8.JPG",
  "assets/imagen-anaglifo9.JPG",
  "assets/imagen-anaglifo10.JPG",
  "assets/imagen-anaglifo11.JPG",
  "assets/imagen-anaglifo12.JPG",
  "assets/imagen-anaglifo13.JPG",
  "assets/imagen-anaglifo14.JPG",
  "assets/imagen-anaglifo15.JPG",
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
