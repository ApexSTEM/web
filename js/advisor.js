// Funcionalidad del asesor personalizado de Ápex STEM

document.addEventListener('DOMContentLoaded', function() {
    // Referencias a elementos del DOM
    const advisorSetup = document.getElementById('advisor-setup');
    const advisorChat = document.getElementById('advisor-chat');
    const apiTokenInput = document.getElementById('api-token-input');
    const saveTokenBtn = document.getElementById('save-token-btn');
    const changeTokenBtn = document.getElementById('change-token-btn');
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');

    // Estado de la aplicación
    let messages = [];
    let isWaitingForResponse = false;

    // Inicializar el asesor
    initializeAdvisor();

    // Función para inicializar el asesor
    function initializeAdvisor() {
        // Comprobar si ya hay un token guardado
        const savedToken = localStorage.getItem('claude_api_token');
        
        if (savedToken) {
            // Mostrar la interfaz de chat
            advisorSetup.classList.add('hidden');
            advisorChat.classList.remove('hidden');
            
            // Agregar mensaje inicial del asistente
            addMessage('assistant', 'Hola, soy tu asesor personalizado de Ápex STEM. ¿En qué puedo ayudarte hoy con tus estudios o proyectos STEM?');
        }

        // Configurar eventos
        setupEvents();
    }

    // Configurar eventos
    function setupEvents() {
        // Guardar token
        if (saveTokenBtn) {
            saveTokenBtn.addEventListener('click', function() {
                const token = apiTokenInput.value.trim();
                if (token) {
                    localStorage.setItem('claude_api_token', token);
                    advisorSetup.classList.add('hidden');
                    advisorChat.classList.remove('hidden');
                    
                    // Agregar mensaje inicial del asistente
                    addMessage('assistant', 'Hola, soy tu asesor personalizado de Ápex STEM. ¿En qué puedo ayudarte hoy con tus estudios o proyectos STEM?');
                } else {
                    alert('Por favor, ingresa un token válido.');
                }
            });
        }

        // Cambiar token
        if (changeTokenBtn) {
            changeTokenBtn.addEventListener('click', function() {
                localStorage.removeItem('claude_api_token');
                apiTokenInput.value = '';
                advisorChat.classList.add('hidden');
                advisorSetup.classList.remove('hidden');
                messages = [];
                chatMessages.innerHTML = '';
            });
        }

        // Enviar mensaje
        if (sendBtn && userInput) {
            sendBtn.addEventListener('click', sendMessage);
            userInput.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    sendMessage();
                }
            });
        }
    }

    // Función para enviar mensaje
    function sendMessage() {
        if (!userInput) return;
        
        const text = userInput.value.trim();
        if (!text || isWaitingForResponse) return;

        addMessage('user', text);
        userInput.value = '';
        
        // Mostrar indicador de escritura
        isWaitingForResponse = true;
        const typingIndicator = document.createElement('div');
        typingIndicator.className = 'typing-indicator';
        typingIndicator.innerHTML = `
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
        `;
        chatMessages.appendChild(typingIndicator);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // EDITAR: Aquí puedes modificar la respuesta simulada del asesor
        // En una implementación real, esto se reemplazaría con una llamada a la API de Claude
        setTimeout(() => {
            typingIndicator.remove();
            
            // Simulación de respuesta (en producción, esto vendría de la API de Claude)
            const response = `Como asesor de Ápex STEM, puedo ayudarte con tu consulta: "${text}". 
            
En una implementación real, esta respuesta vendría directamente de la API de Claude utilizando tu token personal.

¿Tienes alguna otra pregunta sobre temas STEM en la que pueda ayudarte?`;
            
            addMessage('assistant', response);
            isWaitingForResponse = false;
        }, 1500);

        /* EDITAR: Descomenta y modifica este código para implementar la API real de Claude
        
        // Obtener el token guardado
        const token = localStorage.getItem('claude_api_token');
        
        // Llamar a la API de Claude
        fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': token,
                'anthropic-version': '2023-06-01'
            },
            body: JSON.stringify({
                model: "claude-3-sonnet-20240229",
                max_tokens: 1000,
                temperature: 0.7,
                system: "Eres un asesor educativo especializado en disciplinas STEM (Ciencia, Tecnología, Ingeniería y Matemáticas) para Ápex STEM, una plataforma educativa en Latinoamérica. Tu objetivo es ayudar a estudiantes y profesionales a comprender conceptos STEM complejos, resolver problemas y desarrollar habilidades técnicas. Debes ser claro, paciente y proporcionar explicaciones detalladas adaptadas al nivel del estudiante.",
                messages: messages.map(msg => ({
                    role: msg.role,
                    content: [{ type: "text", text: msg.content }]
                }))
            })
        })
        .then(response => response.json())
        .then(data => {
            typingIndicator.remove();
            
            if (data.content && data.content.length > 0) {
                addMessage('assistant', data.content[0].text);
            } else {
                addMessage('assistant', 'Lo siento, ha ocurrido un error al procesar tu mensaje.');
            }
            
            isWaitingForResponse = false;
        })
        .catch(error => {
            typingIndicator.remove();
            console.error('Error:', error);
            addMessage('assistant', 'Lo siento, ha ocurrido un error al comunicarse con la API de Claude.');
            isWaitingForResponse = false;
        });
        */
    }

    // Función para añadir mensaje al chat
    function addMessage(role, content) {
        if (!chatMessages) return;
        
        messages.push({ role, content });
        
        const messageElement = document.createElement('div');
        messageElement.className = role === 'user' ? 'message user-message' : 'message assistant-message';
        
        // Convertir saltos de línea en <br>
        const formattedContent = content.replace(/\n/g, '<br>');
        messageElement.innerHTML = formattedContent;
        
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});
