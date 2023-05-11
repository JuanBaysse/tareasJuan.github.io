const nuevaTarea = document.getElementById('nuevaTarea');
const listaTareas = document.getElementById('listaTareas');
const botonAgregar = document.getElementById('agregarTarea');
let contadorTareas = 0; // variable global para contar el número de tareas agregadas

botonAgregar.addEventListener('click', function() {
  // Validar si el campo de entrada está vacío
  if (nuevaTarea.value.trim() === '') {
    alert('Por favor, ingrese una tarea antes de agregarla.'); // Mostrar una alerta
    return; // Salir del evento si el campo de entrada está vacío
  }
  contadorTareas++; // incrementamos el contador de tareas
  const tarea = document.createElement('li');
  tarea.textContent = `${contadorTareas}. ${nuevaTarea.value}`; // agregamos el número de tarea al contenido
  tarea.addEventListener('click', function(event) {
    if (event.button === 0) { // Botón izquierdo del ratón
      tarea.remove(); // Eliminar tarea
      contadorTareas--;
    } 
  });
  listaTareas.appendChild(tarea);
  nuevaTarea.value = '';
});
