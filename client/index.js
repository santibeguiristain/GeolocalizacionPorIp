function soloNumeros(event) {
    // Permitir solo números y la tecla de retroceso
    const key = event.key;
    if (!/^\d$/.test(key) && key !== 'Backspace') {
        event.preventDefault();
    }
}

function mostrarNumero() {
    const nroIp = document.getElementById('nroIp');
    const resultadoSpan = document.getElementById('resultado');

    // Obtener el valor del input y mostrarlo
    const numero = nroIp.value;
    resultadoSpan.textContent = numero;
}