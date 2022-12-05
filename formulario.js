let empleados = [
    { codigo: 1200, nombre: "Andres", apellido: "Pacheco", correo: "apacheco@mtpecertus.com", cargo: "Jefe", sueldo: 5000, sueldobruto: 4000},
    { codigo: 1201, nombre: "Andrea", apellido: "Sanchez", correo: "asanchez@mtpecertus.com", cargo: "Analista", sueldo: 4000, sueldobruto: 3200},
    { codigo: 1202, nombre: "Julia", apellido: "Ochoa", correo: "jochoa@mtpecertus.com", cargo: "Asistente", sueldo: 1500, sueldobruto: 1200},
    { codigo: 1203, nombre: "Samuel", apellido: "Martinez", correo: "smartinez@mtpecertus.com", cargo: "Programador", sueldo: 3000, sueldobruto: 2400},
    { codigo: 1204, nombre: "Roberto", apellido: "Mattos", correo: "rmattos@mtpecertus.com", cargo: "Soporte", sueldo: 2000, sueldobruto: 1600},
    { codigo: 1205, nombre: "Mercedes", apellido: "Sanchez", correo: "msanchez@mtpecertus.com", cargo: "Asistente", sueldo: 1500, sueldobruto: 1200}
]



const form = document.getElementById('form');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const email = document.getElementById('correo');
const cargo = document.getElementById('cargo');



form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();

    addEmpleado();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    const validoDisplay = inputControl.querySelector('.valido');

    errorDisplay.innerText = ' ';
    validoDisplay.innerText = ' ';
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('valido')
}

const setSuccess = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    const validoDisplay = inputControl.querySelector('.valido');

    errorDisplay.innerText = ' ';
    validoDisplay.innerText = ' ';
    validoDisplay.innerText = message;
    inputControl.classList.remove('error');
    inputControl.classList.add('valido');

};

const validarcorreo = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validanombre = nombre => {
    const no = /^[a-zA-Z]{2,14}$/
    return no.test(String(nombre).toLowerCase());

}
const validaapellido = apellido => {
    const ap = /^[a-zA-Z]{2,14}$/
    return ap.test(String(apellido).toLowerCase());

}


const validateInputs = () => {
    const apellidoValue = apellido.value.trim();
    const emailValue = email.value.trim();
    const nombreValue = nombre.value.trim();
    const cargoValue = cargo.value;

    //validando nombre
    if (apellidoValue === '') {
        setError(apellido, 'Se requiere un apellido');
    } else if (!validaapellido(apellidoValue)) {
        setError(apellido, 'El nombre tiene que ser de 2 a 14 caracteres (solo letras)')
    }
    else {
        setSuccess(apellido, '¡Datos Correctos!');
    }

    //validando apellido
    if (nombreValue === '') {
        setError(nombre, 'Se requiere nombre completo');
    } else if (!validanombre(nombreValue)) {
        setError(nombre, 'El apellido tiene que ser de 2 a 14 caracteres (solo letras)')
    }
    else {
        setSuccess(nombre, '¡Datos Correctos!');
    }

    //validando correo
    if (emailValue === '') {
        setError(email, 'Se requiere un correo');
    } else if (!validarcorreo(emailValue)) {
        setError(email, 'El correo debe ser uno válido');
    } else {
        setSuccess(email, '¡Datos Correctos!');
    }

};

console.log(empleados)


function addEmpleado() {
    const apellidoValue = apellido.value.trim();
    const emailValue = email.value.trim();
    const nombreValue = nombre.value.trim();
    const cargoValue = cargo.value;
    let codigo = 1200 + (empleados.length)
    // let sueldos =[
    //     jefe = 5000 ,
    //     analista = 4000,
    //     programador = 3000,
    //     soporte = 2000,
    //     asistente = 1500,
    // ]

    const opciones = cargoValue
    switch (opciones) {
        case 'Jefe':
            sueldo = 5000
            break
        
        case 'Analista': 
            sueldo=4000
            break 
        
        case 'Programador': 
            sueldo=3000
            break 

        case 'Soporte': 
            sueldo=2000
            break 

        case 'Asistente': 
            sueldo=1500
            break 

    }

    let sueldoFormula = sueldo*0.8


    if (!validaapellido(apellidoValue) || !validarcorreo(emailValue) || !validanombre(nombreValue)) {
        var mensaje = document.getElementById("mensaje-alerta");
        mensaje.style.display = "block";
        var mensajeCorrecto = document.getElementById("mensaje-correcto");
        mensajeCorrecto.style.display = "none";
        }
        else {
        empleados.push(
            {
                codigo: codigo, nombre: nombreValue, apellido: apellidoValue, correo: emailValue, cargo: cargoValue , sueldo: sueldo, sueldobruto: sueldoFormula
            }
        )
        var mensajeCorrecto = document.getElementById("mensaje-correcto");
        mensajeCorrecto.style.display = "block";
        var mensaje = document.getElementById("mensaje-alerta");
        mensaje.style.display = "none";
        form.reset()
        console.log(empleados)
    }

}
