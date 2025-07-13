function saludar() {
  alert("¡Hola! Gracias por visitar mi página.");
}
// Cargar datos JSON al iniciar
window.addEventListener('DOMContentLoaded', () => {
  fetch('datos.json')
    .then(res => res.json())
    .then(data => {
      document.querySelector('h1').textContent = data.titulo;
      document.querySelector('p').textContent = data.mensaje;
      document.querySelector('button').textContent = data.botonTexto;
    })
    .catch(err => console.error("Error al cargar el JSON:", err));
});

// Función cuando se hace clic en el botón
function saludar() {
  alert("¡Saludos dinámicos desde JSON!");
}


