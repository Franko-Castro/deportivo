// script alternativo (no utilizado en E1.html) que gestiona un listado de comentarios
// selecciona el formulario y los elementos de entrada/mostrar
const form = document.getElementById("form");
const input = document.getElementById("texto");
const lista = document.getElementById("lista");

// array donde guardamos comentarios en el cliente
let comentarios = [];

// manejar envío del formulario localmente
form.addEventListener("submit", function(e){
  e.preventDefault();

  // guardar el texto ingresado
  comentarios.push(input.value);

  // limpiar el campo de entrada
  input.value="";

  // refrescar la visualización
  mostrarComentarios();
});

// crea <li> por cada comentario y lo agrega a la lista
function mostrarComentarios(){
  lista.innerHTML="";

  comentarios.forEach(c=>{
    const li=document.createElement("li");
    li.textContent=c;
    lista.appendChild(li);
  });
}