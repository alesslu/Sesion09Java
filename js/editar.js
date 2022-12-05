const formEdit = document.getElementById('formEdit');
const codigoEdit = document.getElementById('codigoEdit');
const nombreEdit = document.getElementById('nombreEdit');
const apellidoEdit = document.getElementById('apellidoEdit');
const correoEdit = document.getElementById('correoEdit')
const cargoEdit = document.getElementById('cargoEdit');
const buttonEdit = document.getElementById('btnEdit');
const buttonGuardarEdit = document.getElementById('btnGuardarEdit');
let employeeToEdit = {};
buttonGuardarEdit.style.display = 'none';

formEdit.addEventListener('submit', e => {
    e.preventDefault();

    validateInputsEdit();
});

const validarcelular = celular => {
    const te = /^9[0-9]{8}$/;
    return te.test(celular)
}

const validarUsername = username => {
    const us = /^[a-zA-Z0-9\_\-]{4,16}$/
    return us.test(String(username).toLowerCase())
}

const validateInputsEdit = () => {
    const codigoValue = codigoEdit.value.trim();
    const nombreValue = nombreEdit.value.trim();
    const apellidoValue = apellidoEdit.value.trim();
    const correoValue = correoEdit.value.trim();
    const cargoValue = cargoEdit.value.trim();

    //validando nombre
    if (nombreValue === '') {
        setError(nombreEdit, 'Se requiere nombre completo');
    } else if (nombreValue.length > 30) {
        setError(nombreEdit, 'Ingrese un nombre válido')
    }
    else {
        setSuccess(nombreEdit, '¡Datos Correctos!');
    }

    //validando nombre
    if (apellidoValue === '') {
        setError(apellidoEdit, 'Se requiere los apellidos completos');
    } else if (apellidoValue.length > 30) {
        setError(apellidoEdit, 'Ingrese un apellido válido')
    }
    else {
        setSuccess(apellidoEdit, '¡Datos Correctos!');
    }

    //validando correo
    if (correoValue === '') {
        setError(correoEdit, 'Se requiere un correo');
    } else if (!validarcorreo(correoValue)) {
        setError(correoEdit, 'El correo debe ser uno válido');
    } else {
        setSuccess(correoEdit, '¡Datos Correctos!');
    }

    //validando celular
    if (cargoValue === '') {
        setError(cargoEdit, 'Se requiere un cargo');
    } else {
        setSuccess(cargoEdit, '¡Datos Correctos!');
    }

    employeeToEdit.codigo = codigoEdit.value;
    employeeToEdit.nombre = nombreEdit.value;
    employeeToEdit.apellido = apellidoEdit.value;
    employeeToEdit.correo = correoEdit.value;
    employeeToEdit.cargo = cargoEdit.value;
    
    genera_tabla();

    document.getElementById('mensaje-correcto-edit').style.display = 'block';
};

let disableFields = function(){
    codigoEdit.setAttribute('disabled', true);
    nombreEdit.setAttribute('disabled', true);
    apellidoEdit.setAttribute('disabled', true);
    correoEdit.setAttribute('disabled', true);
    cargoEdit.setAttribute('disabled', true);
}
let enableFields = function(){
//     codigoEdit.removeAttribute('disabled');
    nombreEdit.removeAttribute('disabled');
    apellidoEdit.removeAttribute('disabled');
    correoEdit.removeAttribute('disabled');
    cargoEdit.removeAttribute('disabled');
    codigoEdit.focus();
    buttonEdit.style.display = 'none';
    buttonGuardarEdit.style.display = 'block';
}
let setProfileData = function(codigoEditar) {
    buttonEdit.style.display = 'block';
    buttonGuardarEdit.style.display = 'none';
    document.getElementById('mensaje-correcto-edit').style.display = 'none';
    employeeToEdit = empleados.filter(x => x.codigo == codigoEditar)[0];
    this.codigoEdit.value = employeeToEdit.codigo;
    this.nombreEdit.value = employeeToEdit.nombre;
    this.apellidoEdit.value = employeeToEdit.apellido;
    this.correoEdit.value = employeeToEdit.correo;
    this.cargoEdit.value = employeeToEdit.cargo;
    disableFields();
}
