const readlineSync = require("readline-sync");

function addTask(tasks) {
  return new Promise((resolve, reject) => {
    const description = readlineSync.question("Descripción : ");

    // Validación de la descripción 
    if (!description.trim()) {
      reject(new Error("La descripción no puede estar vacía."));
      return;
    }

    const newTask = {
      id: tasks.length + 1,
      description,
      completed: false,
    };

    tasks.push(newTask);

    console.log("Tarea añadida correctamente.");

    resolve(newTask);
  });
}

module.exports = {
  addTask,
};