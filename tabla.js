//Ordenar
let arriba = 1
function ordenar_empleado(valor) {
      if (valor === "codigo") {
            empleados.sort((a, b) => a[valor] - b[valor])
        } else {
            empleados.sort((a, b) => a[valor].localeCompare(b[valor]))
        }
    arriba = 0
}

function reverse_ordenar_empleado(valor) {
    if (valor === "codigo") {
        empleados.sort((a, b) => a[valor] - b[valor]).reverse()
    } else {
        empleados.sort((a, b) => a[valor].localeCompare(b[valor])).reverse()
    }
    arriba = 1
}
///ejercicio 11

function genera_tabla() {

    const tablaEmpleados = document.getElementById("tabla")
    const tabla = document.createElement("table")
    tabla.setAttribute("border", "1")
    tablaEmpleados.append(tabla)

    const taR = document.createElement("tr")
    tabla.append(taR)
    crearTabla()
    for (const prop in empleados[0]) {
        const taHe = document.createElement("th")
        taHe.textContent = prop
        taHe.style.cursor = "pointer"
        taHe.style.height="22px"
        taHe.addEventListener("click", () => {
            if (arriba === 1)
            {
                taHe.classList.remove("orden_verde")
                taHe.classList.add("orden_rojo")
                ordenar_empleado(prop)
                tabla.innerHTML = ""
                tabla.append(taR)
                crearTabla()
            }
            else
            {
                //taHe.style.backgroundImage = "url('abajo.png')";
                taHe.classList.remove("orden_rojo")
                taHe.classList.add("orden_verde")
                reverse_ordenar_empleado(prop)
                tabla.innerHTML = ""
                tabla.append(taR)
                crearTabla()
            }


        })
        taR.append(taHe)
    }

    function crearTabla() {
        for (let i = 0; i < empleados.length; i++) {
            const tr = document.createElement("tr")
            tabla.append(tr)
            for (const prop in empleados[i]) {
                var celda = document.createElement("td")
                var textoCelda = document.createTextNode(empleados[i][prop])
                celda.appendChild(textoCelda)
                tr.appendChild(celda)
            }
        }
    }

}