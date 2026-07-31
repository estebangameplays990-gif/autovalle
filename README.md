# Autovalle y Servicios S.A.S. — Sitio web

Sitio de una sola página (HTML + CSS + JS, sin dependencias ni build) para el taller
Autovalle y Servicios, con sedes en Tuluá y Cali.

## Estructura
```
autovalle-website/
├── index.html          → todo el contenido y las secciones
├── css/style.css        → estilos
├── js/script.js         → menú móvil y año del footer
├── assets/               → aquí van tus fotos y el PDF de peritaje
├── render.yaml           → configuración lista para Render
└── README.md
```

## Antes de publicar (pendientes para completar con datos reales)

1. **Número de WhatsApp**: busca `573000000000` en `index.html` (aparece varias veces,
   botón flotante, hero, sedes, motos) y reemplázalo por el número real en formato
   `57` + indicativo + número, sin espacios ni signos `+`.
2. **PDF de ejemplo del peritaje certificado**: coloca el archivo en
   `assets/peritaje-ejemplo.pdf` (el botón "Ver ejemplo de peritaje (PDF)" ya apunta ahí).
3. **Formulario de contacto**: el formulario envía a Formspree
   (`https://formspree.io/f/TU_ID_DE_FORMSPREE` en `index.html`). Crea una cuenta
   gratuita en [formspree.io](https://formspree.io), obtén tu ID de formulario y
   reemplaza `TU_ID_DE_FORMSPREE`. Alternativas: conectar un backend propio, o usar
   un servicio equivalente (Web3Forms, Getform, etc.).
4. **Galería**: las seis tarjetas de la sección "Galería" son marcadores de posición
   con patrones de color. Reemplázalas por fotos reales de los talleres, por ejemplo:
   ```css
   .g-1{ background-image:url('../assets/foto-1.jpg'); }
   ```
5. **Testimonios**: los tres testimonios son de ejemplo; cámbialos por opiniones
   reales de clientes cuando las tengas.
6. **Mapas**: los botones "Cómo llegar" ya enlazan a Google Maps con las
   direcciones de cada sede; verifica que abran el punto correcto.

## Publicar en Render (Static Site)

**Opción A — con `render.yaml` (recomendado):**
1. Sube esta carpeta a un repositorio de GitHub o GitLab.
2. En Render, ve a **New → Blueprint**, conecta el repositorio; Render detecta
   `render.yaml` automáticamente y crea el sitio estático sin configuración
   adicional.

**Opción B — manual:**
1. Sube la carpeta a un repositorio (GitHub/GitLab/Bitbucket).
2. En Render: **New → Static Site**.
3. Conecta el repositorio.
4. Configura:
   - **Build Command**: (déjalo vacío)
   - **Publish directory**: `.`
5. Haz clic en **Create Static Site**. Render te da una URL pública en minutos.

No se necesita servidor, base de datos ni variables de entorno: es un sitio
100% estático.

## Desarrollo local

Solo abre `index.html` en el navegador, o sirve la carpeta con cualquier
servidor estático, por ejemplo:
```bash
npx serve .
```
