document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================
       1. LÓGICA DE CARRUSELES (Bombonería y Alfajores)
       ========================================================== */
    function initCarousel(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const slides = container.querySelectorAll('.carousel-slide');
        const dots = container.querySelectorAll('.dot');
        const prevBtn = container.querySelector('.prev-btn');
        const nextBtn = container.querySelector('.next-btn');

        let currentIndex = 0;

        function showSlide(index) {
            // Asegurar que el índice se mantenga dentro del rango
            if (index >= slides.length) currentIndex = 0;
            else if (index < 0) currentIndex = slides.length - 1;
            else currentIndex = index;

            // Actualizar diapositivas
            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === currentIndex);
            });

            // Actualizar puntos indicadores (dots)
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === currentIndex);
            });
        }

        // Eventos de botones prev/next
        if (nextBtn) {
            nextBtn.addEventListener('click', () => showSlide(currentIndex + 1));
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => showSlide(currentIndex - 1));
        }

        // Eventos al hacer clic en los puntos (dots)
        dots.forEach((dot, i) => {
            dot.addEventListener('click', () => showSlide(i));
        });
    }

    // Inicializar carrusel 1 y carrusel 2
    initCarousel('carousel-bomboneria');
    initCarousel('carousel-alfajores');


    /* ==========================================================
   2. BLOCK DE NOTAS (Mapa de Clics e Intercambio de Imágenes)
   ========================================================== */
const notepadBar = document.getElementById('notepad-bar');
const notepadSheet = document.getElementById('notepad-sheet');

const tabs = ['A', 'B', 'C', 'D', 'E'];

tabs.forEach(letter => {
    const area = document.getElementById(`tab-${letter}`);
    if (area) {
        area.addEventListener('click', (e) => {
            e.preventDefault(); // Evita que la página salte al hacer clic en href="#"

            // Cambiar la imagen de la barra a la versión activa
            if (notepadBar) {
                notepadBar.src = `assets/page_06_boton_${letter}.svg`;
            }

            // Cambiar la imagen de la hoja al contenido activo
            if (notepadSheet) {
                notepadSheet.src = `assets/page_07_${letter}.svg`;
            }
        });
    }
});


    /* ==========================================================
       3. GESTIÓN DE MODALES / POPUPS
       ========================================================== */
    
    // Funciones auxiliares para abrir y cerrar
    function openModal(modal) {
        if (modal) modal.classList.add('active');
    }

    function closeModal(modal) {
        if (modal) modal.classList.remove('active');
    }

    // Modal 1: Descargar Promocionales
    const downloadModal = document.getElementById('modal-download');
    const downloadTrigger = document.getElementById('btn-download-trigger');
    const downloadCloseBtn = document.getElementById('btn-close-download');

    if (downloadTrigger) {
        downloadTrigger.addEventListener('click', () => openModal(downloadModal));
    }

    if (downloadCloseBtn) {
        downloadCloseBtn.addEventListener('click', () => closeModal(downloadModal));
    }

    // Modal 2: Propuesta Emprendedores (SVG)
    const proposalModal = document.getElementById('modal-proposal');
    const proposalTrigger = document.getElementById('btn-proposal-trigger');
    const proposalCloseBtn = document.getElementById('btn-close-proposal');

    if (proposalTrigger) {
        proposalTrigger.addEventListener('click', () => openModal(proposalModal));
    }

    if (proposalCloseBtn) {
        proposalCloseBtn.addEventListener('click', () => closeModal(proposalModal));
    }

    // Cerrar modales haciendo clic en el fondo oscuro u opaco
    [downloadModal, proposalModal].forEach(modal => {
        if (modal) {
            modal.addEventListener('click', (event) => {
                if (event.target === modal) {
                    closeModal(modal);
                }
            });
        }
    });

});

// Modal 1: Ver Costos Promocionales
const downloadModal = document.getElementById('modal-download');
const downloadTrigger = document.getElementById('btn-download-trigger');
const downloadCloseBtn = document.getElementById('btn-close-download');
const downloadCloseBottomBtn = document.getElementById('btn-close-download-bottom');

if (downloadTrigger) {
    downloadTrigger.addEventListener('click', () => openModal(downloadModal));
}

if (downloadCloseBtn) {
    downloadCloseBtn.addEventListener('click', () => closeModal(downloadModal));
}

if (downloadCloseBottomBtn) {
    downloadCloseBottomBtn.addEventListener('click', () => closeModal(downloadModal));
}

