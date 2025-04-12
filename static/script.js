document.addEventListener("DOMContentLoaded", function () {
    const jbotBtn = document.querySelector('.jbot');
    const modal = document.querySelector('.chat-modal');

    jbotBtn.addEventListener('click', () => {
        modal.classList.toggle('hidden');
    });
});