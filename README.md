# Proyecto Deportivo 🏟️

Este repositorio contiene una pequeña aplicación web que permite dejar comentarios sobre un tema deportivo. Está dividida en un servidor Node.js/Express y un cliente estático.

## Estructura de carpetas

```
PROYECTO-DEPORTIVO/
├─ backend/
│   └─ server.js          # API de comentarios
├─ docs/                  # cliente estático (sirve también GitHub Pages)
│   ├─ css/
│   │   └─ styles.css     # estilos de la página
│   ├─ js/
│   │   ├─ app.js         # lógica de interacción y fetch
│   │   └─ funcioncomentarios.js  # script de ejemplo no usado
│   └─ index.html         # página principal
├─ package.json           # dependencias y scripts
├─ .gitignore
└─ README.md
```

Las carpetas `frontend` y `backend` se separan para clarificar roles y facilitar el despliegue.

## Ejecutar localmente

1. Instala dependencias:
   ```bash
   npm install
   ```
2. Inicia el servidor:
   ```bash
   npm start
   ```
3. Abre el navegador en [http://localhost:3000](http://localhost:3000).

El servidor sirve automáticamente los archivos estáticos de `frontend` y expone las rutas
`/comentarios` para obtener o enviar comentarios.

## Despliegue

- Para subir a un repositorio git, inicializa el repo en la raíz y haz `git add .` / `git commit`.
- Servicios de hosting como Heroku, Vercel o Netlify pueden usar `npm start` para lanzar el servidor.
- Asegúrate de configurar la variable `PORT` si el proveedor lo requiere (por ejemplo `process.env.PORT || 3000`).

### Publicando en GitHub

1. Crea un repositorio vacío en GitHub (por ejemplo `proyecto-deportivo`).
2. En tu máquina local añade la URL remota y sube los cambios:
   ```bash
   git remote add origin https://github.com/tu-usuario/proyecto-deportivo.git
   git branch -M main
   git push -u origin main
   ```
3. Cada vez que hagas cambios, usa `git add`, `git commit` y `git push` para subirlos.

### Usar GitHub Pages

Para publicar la parte estática (`docs`):

- En la configuración del repositorio (**Settings → Pages**), selecciona la rama `main` y la carpeta `/docs`.
- GitHub servirá automáticamente el contenido de `docs` como un sitio web.
- Tu servidor Express no se ejecutará en Pages; esta es solo una copia estática del cliente.

> Alternativamente, puedes usar GitHub Desktop o la línea de comandos de Git integrada en VS Code.

> Nota: el proyecto utiliza almacenamiento en memoria. Los comentarios desaparecen al reiniciar el
> servidor; en producción debería integrarse una base de datos o un fichero.
