// script.js

document.addEventListener('DOMContentLoaded', function () {
    const colorPicker = document.getElementById('color-picker');
    const redSlider = document.getElementById('red-slider');
    const greenSlider = document.getElementById('green-slider');
    const blueSlider = document.getElementById('blue-slider');
    const redInput = document.getElementById('red');
    const greenInput = document.getElementById('green');
    const blueInput = document.getElementById('blue');
    const colorBox = document.getElementById('color-box');
    const hexCode = document.getElementById('hex-code');

    function updateColor() {
        const r = redSlider.value;
        const g = greenSlider.value;
        const b = blueSlider.value;

        // Actualiza el color de fondo del recuadro
        colorBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

        // Convierte los valores RGB a hexadecimal
        const hex = `#${Number(r).toString(16).padStart(2, '0')}${Number(g).toString(16).padStart(2, '0')}${Number(b).toString(16).padStart(2, '0')}`.toUpperCase();

        // Actualiza el código hexadecimal
        hexCode.textContent = hex;

        // Actualiza los campos de entrada numéricos
        redInput.value = r;
        greenInput.value = g;
        blueInput.value = b;
    }

    function updateSliders() {
        const r = redInput.value;
        const g = greenInput.value;
        const b = blueInput.value;

        // Actualiza los controles deslizantes
        redSlider.value = r;
        greenSlider.value = g;
        blueSlider.value = b;

        updateColor();
    }

    function updatePicker() {
        // Convierte el color hexadecimal a RGB
        const color = colorPicker.value;
        const r = parseInt(color.substring(1, 3), 16);
        const g = parseInt(color.substring(3, 5), 16);
        const b = parseInt(color.substring(5, 7), 16);

        // Actualiza los sliders y los inputs
        redSlider.value = r;
        greenSlider.value = g;
        blueSlider.value = b;

        redInput.value = r;
        greenInput.value = g;
        blueInput.value = b;

        updateColor();
    }

    // Agrega event listeners para actualizar el color cuando cambien los valores de los sliders
    redSlider.addEventListener('input', updateColor);
    greenSlider.addEventListener('input', updateColor);
    blueSlider.addEventListener('input', updateColor);

    // Agrega event listeners para actualizar el color cuando cambien los valores de los campos de entrada
    redInput.addEventListener('input', updateSliders);
    greenInput.addEventListener('input', updateSliders);
    blueInput.addEventListener('input', updateSliders);

    // Agrega event listener para actualizar el color cuando se seleccione un nuevo color
    colorPicker.addEventListener('input', updatePicker);

    // Llama a la función al cargar la página para inicializar los valores
    updateColor();
});

