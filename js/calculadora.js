// Funciones de la calculadora
function agregarNumero(numero) {
    document.getElementById('resultado').value += numero;
}

function limpiar() {
    document.getElementById('resultado').value = '';
}

function calcular() {
    try {
        let resultado = eval(document.getElementById('resultado').value);
        document.getElementById('resultado').value = resultado;
        Swal.fire({
            title: 'Resultado',
            text: `El resultado es: ${resultado}`,
            icon: 'success',
            showConfirmButton: false,
            timer: 1500
        });
    } catch (error) {
        Swal.fire({
            title: 'Error',
            text: 'Operación inválida',
            icon: 'error',
            showConfirmButton: false,
            timer: 1500
        });
    }
}