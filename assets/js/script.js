/* Se obtiene el formulario*/
const form = document.getElementById("form-tarea");

// Evento cuando se envía el formulario
form.addEventListener("submit", function (e) {
    e.preventDefault(); // Evita que la página se recargue

    // Obtener valores de los campos
    const descripcion = document.getElementById("descripcion").value.trim();
    const prioridad = document.getElementById("prioridad").value;
    const fecha = document.getElementById("fecha").value;

    // Validación: no permitir campos vacíos
    if (!descripcion || !prioridad || !fecha) {
        alert("Completa todos los campos");
        return;
    }

    // Crear una nueva tarea (elemento li)
    const tarea = document.createElement("li");
    tarea.classList.add("tarea");

    // Contenido HTML de la tarea
    tarea.innerHTML = `
        <p><strong>${descripcion}</strong></p>
        <p>${prioridad} | ${fecha}</p>

        <!-- Botones de acciones -->
        <section class="acciones">
            <button onclick="mover(this, 'en-progreso')">En progreso</button>
            <button onclick="mover(this, 'completadas')">Completada</button>
            <button onclick="eliminar(this)">Eliminar</button>
        </section>
    `;

    // Agregar la tarea a la columna de pendientes
    document.querySelector("#pendientes .tareas-container").appendChild(tarea);

    // Actualizar contadores
    actualizarContadores();

    // Limpiar formulario
    form.reset();
});


/* Mueve la tarea a otra columna*/
function mover(btn, destino) {
    const tarea = btn.closest("li"); // encuentra la tarea
    document.querySelector(`#${destino} .tareas-container`).appendChild(tarea);

    actualizarContadores(); // actualiza números
}


/* Elimina la tarea del tablero*/
function eliminar(btn) {
    btn.closest("li").remove();
    actualizarContadores(); // actualiza números
}


/* Actualiza la cantidad de tareas en cada columna*/
function actualizarContadores() {
    document.querySelectorAll(".columna").forEach(col => {
        const total = col.querySelectorAll("li").length;
        col.querySelector(".contador").textContent = total;
    });
}