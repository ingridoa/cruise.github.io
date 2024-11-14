const chatLink = document.querySelector('.chat-link');
const chatContainer = document.querySelector('.chat-container');
const closeChat = document.querySelector('.close-chat');
const chatInput = document.querySelector('.chat-input input');
const sendMessage = document.querySelector('.chat-input button');
const chatMessages = document.querySelector('.chat-messages');

// Mostrar el chat al hacer clic en el enlace
chatLink.addEventListener('click', () => {
    chatContainer.classList.remove('hidden');
});

// Cerrar el chat al hacer clic en el botón de cerrar
closeChat.addEventListener('click', () => {
    chatContainer.classList.add('hidden');
});

// Enviar mensaje al presionar Enter o al hacer clic en el botón de enviar
chatInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        sendChatMessage();
    }
});

sendMessage.addEventListener('click', sendChatMessage);

function sendChatMessage() {
    const messageText = chatInput.value.trim();
    if (messageText) {
        const messageElement = document.createElement('div');
        messageElement.textContent = messageText;
        messageElement.classList.add('chat-message');
        chatMessages.appendChild(messageElement);
        chatInput.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}
// script.js

let app = document.getElementById("typewriter");
let typewriter = new typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString(
    "Implementación de Tecnologías, Manejo de Equipos Multidiciplinarios y Desarrollo Web."
  )
  .pauseFor(200)
  .deleteChars(10)
  .start();

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    // Check for saved theme preference or default to light theme
    const currentTheme = localStorage.getItem('theme') || 'light';
    body.classList.toggle('dark-theme', currentTheme === 'dark');
    updateThemeToggle();

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        const theme = body.classList.contains('dark-theme') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
        updateThemeToggle();
    });

    function updateThemeToggle() {
        themeToggle.textContent = body.classList.contains('dark-theme') ? '☀️' : '🌙';
    }
});
