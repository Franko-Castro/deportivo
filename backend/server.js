// servidor básico con Express para manejar comentarios
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// servir archivos estáticos del cliente desde la carpeta docs (para GitHub Pages también)
app.use(express.static(path.join(__dirname, "../docs")));

// habilitar CORS solo si se requieren peticiones cross‑origin (no es necesario en despliegues mismo origen)
app.use(cors());
// parser JSON para leer cuerpo de solicitudes POST
app.use(express.json());

// almacenamiento temporal en memoria; se pierde al reiniciar
let comentarios = [];

// ruta GET: devuelve todos los comentarios almacenados
app.get("/comentarios", (req, res) => {
    res.json(comentarios);
});

// ruta POST: añade un comentario nuevo al arreglo
app.post("/comentarios", (req, res) => {
    const { nombre, mensaje } = req.body;
    if (!nombre || !mensaje) {
        return res.status(400).json({ error: "Faltan nombre o mensaje" });
    }
    const nuevoComentario = { nombre, mensaje };
    comentarios.push(nuevoComentario);
    res.json({ mensaje: "Comentario agregado" });
});

// Nota: express.static ya sirve el `frontend/index.html` por defecto.
// si quieres un texto simple en /, podrías descomentar la siguiente ruta:
// app.get('/', (req, res) => res.send('Servidor de comentarios funcionando')); 

// ruta GET para la raíz; si por alguna razón static no la sirve, enviamos index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

// arrancar servidor en el puerto configurado
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
