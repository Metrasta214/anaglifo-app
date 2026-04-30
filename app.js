// =========================
// CONFIGURACIÓN
// =========================

// Si tienes pares (left/right)
const pares = [
  { left: "assets/left1.jpg", right: "assets/right1.jpg" },
  { left: "assets/left2.jpg", right: "assets/right2.jpg" },
  { left: "assets/left3.jpg", right: "assets/right3.jpg" },
];

// Si tienes imágenes anaglifo ya hechas
const imagenes = [
  "assets/imagen-anaglifo1.jpg",
  "assets/imagen-Anaglifo2.jpg",
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
  "assets/imagen-Anaglifo15.jpg",
];

// CAMBIA ESTO SEGÚN TU CASO
let usarPares = false; // 🔁 true = usa left/right | false = usa anaglifo directo

let modo = "normal";

// =========================
// CAMBIAR MODO
// =========================
function cambiarModo(nuevoModo) {
  modo = nuevoModo;
  cargarCarrusel();
}

// =========================
// CARRUSEL PRINCIPAL
// =========================
function cargarCarrusel() {
  const contenedor = document.getElementById("carouselInner");
  contenedor.innerHTML = "";

  if (usarPares) {
    // =========================
    // MODO PARES (LEFT/RIGHT)
    // =========================
    pares.forEach((par, index) => {
      const div = document.createElement("div");
      div.classList.add("carousel-item");

      if (index === 0) div.classList.add("active");

      if (modo === "normal") {
        div.innerHTML = `
          <img src="${par.left}" class="d-block w-100">
        `;
      }

      if (modo === "side") {
        div.innerHTML = `
          <div class="side-by-side">
            <img src="${par.left}">
            <img src="${par.right}">
          </div>
        `;
      }

      if (modo === "anaglifo") {
        div.innerHTML = `
          <div class="anaglifo-container">
            <img src="${par.left}" style="filter: grayscale(1) sepia(1) hue-rotate(-50deg) saturate(5);">
            <img src="${par.right}" style="filter: grayscale(1) sepia(1) hue-rotate(180deg) saturate(5); mix-blend-mode: screen;">
          </div>
        `;
      }

      contenedor.appendChild(div);
    });
  } else {
    // =========================
    // MODO IMÁGENES ANAGLIFO
    // =========================
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
}

// =========================
// INICIALIZAR
// =========================
cargarCarrusel();
 