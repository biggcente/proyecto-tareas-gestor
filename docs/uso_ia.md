# Uso de Inteligencia Artificial en el Proyecto

## 1. Modelo utilizado
Se utilizó **ChatGPT GPT-5.3 de OpenAI** como herramienta de apoyo durante el desarrollo del proyecto.

---

## 2. Prompts utilizados y respuestas 

### Prompt 1
"Haz una función en JavaScript para mover tareas entre columnas en un tablero Kanban"

function cambiarEstado(boton, nuevaColumna) {
    const itemTarea = boton.closest("li"); // obtiene la tarea
    const contenedorDestino = document.querySelector(`#${nuevaColumna} .tareas-container`);

    contenedorDestino.appendChild(itemTarea);

    actualizarContadores(); // actualiza los contadores
}

### Prompt 2
"Haz un script que actualice automáticamente el contador de tareas por columna"

function trasladarTarea(tareaId, columnaDestinoId) {
    const elementoTarea = document.getElementById(tareaId);
    const contenedorDestino = document.getElementById(columnaDestinoId);

    if (!elementoTarea) {
        console.error("No se encontró la tarea indicada");
        return;
    }

    if (!contenedorDestino) {
        console.error("No se encontró la columna destino indicada");
        return;
    }

    contenedorDestino.appendChild(elementoTarea);
}

### Prompt 3
"Usa Grid para dividir la pantalla en 3 columnas iguales"

#kanban {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 columnas de igual tamaño */
    gap: 1rem; /* Espacio entre columnas */
    margin-top: 2rem;
}



---

## 4. Ajustes manuales realizados

Se realizaron modificaciones al código generado por la IA para adaptarlo al proyecto:

- Se ajustó la lógica para mover tareas correctamente entre columnas  
- Se corrigió la función de contadores para que se actualicen en tiempo real  
- Se integraron los scripts con el HTML del proyecto  
- Se modificaron los estilos CSS para mejorar la apariencia visual  
- Se adaptó el diseño para que fuera responsive  

---

## 5. Reflexión crítica

El uso de ChatGPT fue útil para comprender cómo implementar ciertas funcionalidades, como el movimiento de tareas entre columnas y la actualización de contadores. Además, ayudó a obtener ideas para los estilos CSS.

Sin embargo, el código entregado no siempre funcionaba directamente, por lo que fue necesario analizarlo, entenderlo y adaptarlo al proyecto. Esto permitió reforzar el aprendizaje en JavaScript y CSS.

En conclusión, la inteligencia artificial fue una herramienta de apoyo importante, pero el resultado final dependió del trabajo y comprensión propia del desarrollo.