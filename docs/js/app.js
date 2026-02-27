// script cliente: gestiona el formulario y la lista de comentarios
// seleccionamos los elementos del DOM necesarios
const formulario = document.getElementById("formulario");
const listaComentarios = document.getElementById("lista-comentarios");

// cuando se envía el formulario
formulario.addEventListener("submit", async function(e) {
    e.preventDefault(); // evitar recarga de la página

    // extraer valores de los campos
    const nombre = document.getElementById("nombre").value;
    const mensaje = document.getElementById("mensaje").value;

    const comentario = {
        nombre,
        mensaje
    };

    // enviar el objeto al backend mediante POST (misma origin)
    try {
        const respuesta = await fetch("/comentarios", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(comentario)
        });
        if (!respuesta.ok) {
            const err = await respuesta.json();
            throw new Error(err.error || 'Error al enviar');
        }
        // limpiar formulario y refrescar lista
        formulario.reset();
        cargarComentarios();
    } catch (error) {
        console.error('No se pudo agregar el comentario:', error);
        alert('No se pudo enviar el comentario. Intenta de nuevo.');
    }
});

// función que consulta el backend y muestra comentarios
async function cargarComentarios() {
    // petición GET al servidor (misma origin)
    const respuesta = await fetch("/comentarios");
    if (!respuesta.ok) {
        console.error('Error al cargar comentarios', respuesta.status);
        return;
    }
    const datos = await respuesta.json();

    // borramos lo anterior
    listaComentarios.innerHTML = "";

    // crear un div por cada comentario recibido
    datos.forEach(c => {
        const div = document.createElement("div");
        div.classList.add("comentario");
        div.innerHTML = `<strong>${c.nombre}</strong><p>${c.mensaje}</p>`;
        listaComentarios.appendChild(div);
    });
}

// cargar comentarios al iniciar la página
cargarComentarios();
