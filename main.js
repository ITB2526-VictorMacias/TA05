// Funcionalidad 1: Mostrar el año actual automáticamente en el footer
const yearSpan = document.getElementById('year');
if(yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// Funcionalidad 2: Validación del formulario de contacto
const formulario = document.getElementById('miFormulario');
if(formulario) {
    formulario.addEventListener('submit', function(event) {
        // Evitamos que se envíe de verdad para hacer la prueba
        event.preventDefault();
        
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;

        if(nombre && email) {
            alert("¡Hola " + nombre + "! Tu mensaje se ha enviado correctamente.");
            formulario.reset(); // Limpia el formulario después de enviar
        } else {
            alert("Por favor rellena todos los campos.");
        }
    });
}

// Funcionalidad 3: Mensaje de bienvenida en la consola del navegador
console.log("Portafolio de Victor Macias cargado correctamente.");