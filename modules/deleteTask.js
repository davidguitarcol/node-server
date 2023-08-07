const readlineSync = require("readline-sync");

function deleteTask(tasks) {
  if (tasks.length === 0) {
    console.log("No hay tareas por eliminar.");
    return;
  }

  const taskIndex = readlineSync.keyInSelect(
    tasks.map((task) => {
      const status = task.completed ? "[completed]" : "[incompleted]";
      return `${status} ${task.description}`;
    }),
    "Seleccione la tarea a eliminar:"
  );

  if (taskIndex === -1) {
    console.log("Cancelado.");
    return;
  }

  tasks.splice(taskIndex, 1);
  console.log("Tarea eliminada .");
}

module.exports = {
  deleteTask,
};