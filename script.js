// Selecciones
let formulario = document.getElementById("form-inscripcion")
let nombreInput = document.getElementById("nombre")
let tallerSelect = document.getElementById("taller")
let modalidadSelect = document.getElementById("modalidad")
let lista = document.getElementById("lista-inscripciones")

// Web Component
class TarjetaInscripcion extends HTMLElement {

    connectedCallback() {

        let nombre = this.getAttribute("nombre")
        let taller = this.getAttribute("taller")
        let modalidad = this.getAttribute("modalidad")

        this.innerHTML = `
            <div class="tarjeta">
                <p><strong>Estudiante:</strong> ${nombre}</p>
                <p><strong>Taller:</strong> ${taller}</p>
                <p><strong>Modalidad:</strong> ${modalidad}</p>
            </div>
        `
    }
}

customElements.define("tarjeta-inscripcion", TarjetaInscripcion)


// Evento submit del formulario
formulario.addEventListener("submit", function(e){

    e.preventDefault() // evita recargar la página

    let nombre = nombreInput.value.trim()
    let taller = tallerSelect.value
    let modalidad = modalidadSelect.value

    // VALIDACIÓN
    if(nombre === "" || taller === "" || modalidad === ""){
        alert("Todos los campos son obligatorios.")
        return
    }

    if(nombre.length < 3){
        alert("El nombre debe tener al menos 3 caracteres.")
        return
    }

    // Crear componente dinámicamente
    let nuevaTarjeta = document.createElement("tarjeta-inscripcion")
    nuevaTarjeta.setAttribute("nombre", nombre)
    nuevaTarjeta.setAttribute("taller", taller)
    nuevaTarjeta.setAttribute("modalidad", modalidad)

    lista.appendChild(nuevaTarjeta)

    // Limpiar formulario
    formulario.reset()

})