// Función para establecer el enlace activo
function setActive(link) {
  // Obtener todos los enlaces dentro del menú
  var links = document.querySelectorAll(".menu ul li a");

  // Remover la clase 'active' de todos los enlaces
  links.forEach(function (item) {
    item.classList.remove("active");
  });

  // Agregar la clase 'active' al enlace clicado
  link.classList.add("active");
}

// Función para manejar el desplazamiento suave
function smoothScroll(event, link) {
  event.preventDefault();

  const targetId = link.getAttribute("href"); // Obtiene el ID del destino
  const targetElement = document.querySelector(targetId); // Selecciona el elemento por ID

  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: "smooth", // Desplazamiento suave
      block: "start", // Alinea al inicio de la sección
    });

    setActive(link); // Marca el enlace como activo
  } else {
    console.error(`No se encontró el elemento con ID: ${targetId}`);
  }
}

// Deshabilitar clic derecho en imágenes y videos
document.addEventListener("contextmenu", function (event) {
  if (event.target.tagName === "IMG" || event.target.tagName === "VIDEO") {
    event.preventDefault();
  }
});

// Evitar cambios en las propiedades de los videos
document.querySelectorAll("video").forEach(function (video) {
  // Observar cambios en las propiedades del video
  const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (
        mutation.attributeName === "controls" &&
        !video.hasAttribute("controls")
      ) {
        video.removeAttribute("controls");
      }
    });
  });

  // Configurar el observador para detectar cambios en los atributos
  observer.observe(video, { attributes: true });
});
