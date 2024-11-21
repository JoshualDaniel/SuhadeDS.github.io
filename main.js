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

  const targetId = link.getAttribute("href");
  const targetElement = document.querySelector(targetId);
  const offset = 0; // Ajusta esto según la altura de tu menú fijo

  window.scrollTo({
    top: targetElement.offsetTop - offset,
    behavior: "smooth",
  });

  setActive(link);
}
