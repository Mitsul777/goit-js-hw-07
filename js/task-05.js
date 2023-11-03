const input = document.getElementById('name-input');
const output = document.getElementById('name-output');
input.addEventListener('input', function() {
    if (input.value.trim() === '' || input.value.includes(' ')) {
        output.textContent = 'Anonymous';
    } else {
        output.textContent = input.value;
    }
});
