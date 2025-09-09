console.log("Prueba script.js cargado correctamente");

function validarFormularioPedidos(event) {
 
    // Chequear platos seleccionados
    var platos = document.querySelectorAll('input[name="plato[]"]:checked');
    if (platos.length === 0) {
        alert('Por favor, selecciona al menos un plato.');
        return false;
    }

    // Chequar que no hayan espacios en blanco en los campos obligatorios
    var camposObligatorios = ['nombre', 'telefono', 'direccion', 'email'];
    for (let id of camposObligatorios) {
        const campo = document.getElementById(id);
        if (!campo.value.trim()) {
            alert('Alguno de los campos no fue completado, por favor verifíquelo.');
            campo.focus();
            return false;
        }
    }

    // Chequear formato y longitud del telefono
    var telefono = document.getElementById('telefono').value.trim();
    if (!/^\d{8,}$/.test(telefono)) {
        alert('El teléfono debe contener solo números y tener al menos 8 dígitos.');
        document.getElementById('telefono').focus();
        return false;
    }

   // Mostrar mensaje de éxito en caso de que se envíe el form
    alert('¡Gracias por tu pedido!');
    if (event) event.target.submit();
    return true;
}

window.onload = function() {
    var form = document.getElementById('formularioPedido');
    if (form) {
        form.onsubmit = validarFormularioPedidos;
    }
};