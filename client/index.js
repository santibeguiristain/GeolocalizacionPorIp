 


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



  // Agrega JavaScript para manejar el evento de clic en el botón
  document.getElementById('obtenerDatos').addEventListener('click', function () {
    // Realiza una solicitud al servidor cuando se hace clic en el botón
    axios.get('https://ipgeolocation.abstractapi.com/v1/?api_key=83572ddf5cb44cb5860e0c8ebbf8a6f5')
        .then(response => {
            const data = response.data;

            // Obtén elementos HTML por su ID
            const nombreElement = document.getElementById('nombre');
            const ipAddressElement = document.getElementById('ipAddress');
            const cityElement = document.getElementById('city');
            const longitudeElement = document.getElementById('longitude');
            const latitudeElement = document.getElementById('latitude');

            // Asigna los valores a los elementos HTML
            nombreElement.textContent = 'Nombre: ' + data.country;
            ipAddressElement.textContent = 'IP Address: ' + data.ip_address;
            cityElement.textContent = 'City: ' + data.city;
            longitudeElement.textContent = 'Longitude: ' + data.longitude;
            latitudeElement.textContent = 'Latitude: ' + data.latitude;

           

        })
        .catch(error => {
            console.log(error);
        });
});

