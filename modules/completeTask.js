const readlineSync = require("readline-sync");

function completeTask(tasks) {
  if (tasks.length === 0) {
    console.log("No hay tareas por completar.");
    return;
  }

  const taskIndex = readlineSync.keyInSelect(
    tasks.map((task) => {
      const status = task.completed ? "[completed]" : "[incompleted]";
      return `${status} ${task.description}`;
    }),
    "Seleccione la tarea:"
  );

  if (taskIndex === -1) {
    console.log("Cancelado.");
    return;
  }

  // Cambiar estado de la tarea
  tasks[taskIndex].completed = !tasks[taskIndex].completed;

  // Mostrar mensaje 
  if (tasks[taskIndex].completed) {
    console.log("Tarea completada correctamente.");
  } else {
    console.log("Tarea marcada como incompleta.");
  }
}

module.exports = {
  completeTask,
};