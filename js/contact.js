// Funcionalidad del formulario de contacto

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const formSuccess = document.getElementById('form-success');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obtener los valores del formulario
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // En una implementación real, aquí enviarías los datos a un servidor
            console.log('Formulario enviado:', { name, email, subject, message });
            
            // Mostrar mensaje de éxito
            contactForm.classList.add('hidden');
            if (formSuccess) {
                formSuccess.classList.remove('hidden');
            }
            
            // Resetear el formulario después de 5 segundos
            setTimeout(() => {
                // Limpiar campos
                contactForm.reset();
                
                // Ocultar mensaje de éxito y mostrar formulario nuevamente
                if (formSuccess) {
                    formSuccess.classList.add('hidden');
                }
                contactForm.classList.remove('hidden');
            }, 5000);
        });
    }
});
