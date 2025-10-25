const imagenes = ["img1.jpg", "img2.jpg", "img3.jpg"];
        let indice = 0;

        const imagen = document.getElementById("imagen");
        const siguiente = document.getElementById("siguiente");
        const anterior = document.getElementById("anterior");

        if (imagen && siguiente && anterior) {
            siguiente.addEventListener("click", () => {
                indice = (indice + 1) % imagenes.length; // Avanza circularmente
                imagen.src = imagenes[indice];
            });

            anterior.addEventListener("click", () => {
                // Retrocede circularmente: usamos (indice - 1 + length) % length
                indice = (indice - 1 + imagenes.length) % imagenes.length;
                imagen.src = imagenes[indice];
            });
        }

        // --- REQUISITO 2: LIGHTBOX CON DESCRIPCIÓN ---

        const infoBtn = document.getElementById("infoBtn");
        const lightbox = document.getElementById("lightbox");
        const cerrar = document.getElementById("cerrar");
        // const descripcion = document.getElementById("descripcion"); // No se usa para manipular, solo para mostrar

        if (infoBtn && lightbox && cerrar) {
            infoBtn.addEventListener("click", () => {
                lightbox.classList.remove("oculto"); // Abre el lightbox
            });

            cerrar.addEventListener("click", () => {
                lightbox.classList.add("oculto"); // Cierra el lightbox
            });
            
            // Opcional: Cerrar al hacer click fuera del modal
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox) {
                    lightbox.classList.add('oculto');
                }
            });
        }

        // --- REQUISITO 3: BOTÓN DE TRADUCCIÓN (Usando textContent) ---

        // Definición de los textos
        const textoOriginal_es = "Bienvenido a nuestro proyecto de manipulación del DOM (Modelo de Objeto de Documento). Este sitio demuestra cómo JavaScript puede modificar dinámicamente el contenido, las imágenes y la interfaz de usuario para crear experiencias interactivas.";
        const textoTraducido_en = "Welcome to our DOM (Document Object Model) manipulation project. This site demonstrates how JavaScript can dynamically modify content, images, and the user interface to create interactive experiences.";

        const texto = document.getElementById("texto");
        const traducir = document.getElementById("traducir");
        let traducido = false;

        if (texto && traducir) {
            traducir.addEventListener("click", () => {
                if (!traducido) {
                    // Traducir a Inglés (Aplicando textContent)
                    texto.textContent = textoTraducido_en;
                    traducir.textContent = "Volver a Español";
                    traducido = true;
                } else {
                    // Volver a Español (Aplicando textContent)
                    texto.textContent = textoOriginal_es;
                    traducir.textContent = "Traducir a Inglés";
                    traducido = false;
                }
            });
        }