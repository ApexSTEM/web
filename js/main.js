// Funcionalidad principal para el sitio web de Ápex STEM

document.addEventListener('DOMContentLoaded', function() {
    // Menú móvil
    setupMobileMenu();
    
    // Inicializar FAQ (preguntas frecuentes)
    setupFAQ();
    
    // Configurar botones del asesor
    setupAdvisorButtons();
});

// Configuración del menú móvil
function setupMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            // Animar las barras del botón hamburguesa
            const spans = this.querySelectorAll('span');
            spans.forEach(span => span.classList.toggle('active'));
        });
    }
}

// Configuración de las preguntas frecuentes
function setupFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        if (question) {
            question.addEventListener('click', function() {
                // Cerrar todas las demás preguntas
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Alternar la pregunta actual
                item.classList.toggle('active');
            });
        }
    });
}

// Configuración de los botones del asesor
function setupAdvisorButtons() {
    const advisorButtons = document.querySelectorAll('.btn-advisor');
    const advisorModal = document.getElementById('advisor-modal');
    const closeModal = document.querySelector('.close-modal');
    
    if (advisorButtons.length && advisorModal) {
        // Abrir modal al hacer clic en cualquier botón del asesor
        advisorButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                advisorModal.style.display = 'flex';
            });
        });
        
        // Cerrar modal al hacer clic en la X
        if (closeModal) {
            closeModal.addEventListener('click', function() {
                advisorModal.style.display = 'none';
            });
        }
        
        // Cerrar modal al hacer clic fuera del contenido
        advisorModal.addEventListener('click', function(e) {
            if (e.target === advisorModal) {
                advisorModal.style.display = 'none';
            }
        });
    }
}
