const btnEnviar = document.getElementById('btnEnviar');
const formSuccess = document.getElementById('formSuccess');

const inputNombre = document.getElementById('inputNombre');
const inputEmail = document.getElementById('inputEmail');
const inputAsunto = document.getElementById('inputAsunto');
const inputMensaje = document.getElementById('inputMensaje');

btnEnviar.addEventListener('click', function () {

    const nombre = inputNombre.value.trim();
    const email = inputEmail.value.trim();
    const asunto = inputAsunto.value;
    const mensaje = inputMensaje.value.trim();

    if (!nombre || !email || !asunto || !mensaje) {
        // Marcar campos vacíos
        [inputNombre, inputEmail, inputAsunto, inputMensaje].forEach(function (campo) {
            if (!campo.value.trim()) {
                campo.style.borderColor = '#ff4444';
                campo.style.boxShadow = '0 0 8px rgba(255,68,68,0.3)';
            }
        });
        return;
    }

    // Resetear estilos
    [inputNombre, inputEmail, inputAsunto, inputMensaje].forEach(function (campo) {
        campo.style.borderColor = '';
        campo.style.boxShadow = '';
    });

    // Mostrar éxito
    btnEnviar.disabled = true;
    btnEnviar.textContent = 'Enviando...';

    setTimeout(function () {
        inputNombre.value = '';
        inputEmail.value = '';
        inputAsunto.value = '';
        inputMensaje.value = '';

        formSuccess.style.display = 'block';
        btnEnviar.textContent = 'Enviar Mensaje';
        btnEnviar.disabled = false;

        setTimeout(function () {
            formSuccess.style.display = 'none';
        }, 4000);
    }, 800);

});

// Resetear borde rojo al escribir
[inputNombre, inputEmail, inputAsunto, inputMensaje].forEach(function (campo) {
    campo.addEventListener('input', function () {
        campo.style.borderColor = '';
        campo.style.boxShadow = '';
    });
});