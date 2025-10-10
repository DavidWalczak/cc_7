document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('update-btn');
    const input = document.getElementById('headline-input');
    const headline = document.querySelector('.hero h2');

    button.addEventListener('click', () => {
        const newText = input.value.trim();
        if (newText !== '') {
            headline.textContent = newText;
            input.value = '';
        }
    });
});