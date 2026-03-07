//========================================================================================
// ABRIR MENU DESPLEGABLE CON BOTON
// Obtener elementos
const dropdownButton = document.getElementById("dropdownButton");
const dropdownMenu = document.getElementById("dropdownMenu");

// Función para alternar la visibilidad del menú
function toggleMenu(event) {
  event.stopPropagation(); // Evita que el clic en el botón se propague al documento
  dropdownMenu.classList.toggle("show");
  dropdownButton.classList.toggle("active"); // Añade/quita la clase active
}

// Abrir/cerrar al hacer clic en el botón.
dropdownButton.addEventListener("click", toggleMenu);

// Cerrar el menú si se hace clic fuera de él
document.addEventListener("click", function (event) {
  // Verificar si el clic no fue en el botón ni en el menú
  if (
    !dropdownButton.contains(event.target) &&
    !dropdownMenu.contains(event.target)
  ) {
    dropdownMenu.classList.remove("show");
    dropdownButton.classList.remove("active"); // Quita la clase active
  }
});

// Opcional: cerrar con la tecla Escape
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && dropdownMenu.classList.contains("show")) {
    dropdownMenu.classList.remove("show");
    dropdownButton.classList.remove("active"); // Quita la clase active
  }
});
//========================================================================================

//========================================================================================
// Esperar a que el DOM esté listo
document.addEventListener("DOMContentLoaded", function () {
  // Seleccionamos del <a>
  const logoLink = document.querySelector(".barra-navegacion > a");

  if (logoLink) {
    logoLink.addEventListener("click", function (e) {
      //Si el enlace apunta a # o no quieres navegar deja la linea de abajo,
      // sino eliminala
      e.preventDefault();

      // Añadir clase glitch
      this.classList.add("glitch-activo");

      // Quitarla despues de 300ms (Debe ser igual que la duración del keyframe)
      setTimeout(() => {
        this.classList.remove("glitch-activo");
      }, 300);
    });
  } else {
    console.log("No se encontró el enlace del logo. Verifica la estructura");
  }
});
