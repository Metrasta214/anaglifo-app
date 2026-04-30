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
  "assets/imagen13-anaglifo.jpg",
  "assets/imagen-anaglifo14.jpg",
  "assets/imagen-anaglifo15.jpg",
];

function cargarCarrusel() {
  const contenedor = document.getElementById("carouselInner");

  imagenes.forEach((img, index) => {
    const div = document.createElement("div");
    div.classList.add("carousel-item");

    if (index === 0) div.classList.add("active");

    div.innerHTML = `
      <img src="${img}" class="d-block w-100">
    `;

    contenedor.appendChild(div);
  });
}

cargarCarrusel();
