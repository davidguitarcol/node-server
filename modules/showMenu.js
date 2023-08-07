const readlineSync = require("readline-sync");
const addTaskModule = require("./addTask");
const deleteTaskModule = require("./deleteTask");
const completeTaskModule = require("./completeTask");

const tasks = [];

function showMenu() {
  console.log("\nMENU:");
  console.log("1. Añadir tarea");
  console.log("2. Eliminar tarea");
  console.log("3. Completar tarea");
  console.log("4. Salir");

  const option = readlineSync.question("Seleccione una opción: ");

  switch (option) {
    case "1":
      addTaskModule.addTask(tasks);
      break;
    case "2":
      deleteTaskModule.deleteTask(tasks);
      break;
    case "3":
      completeTaskModule.completeTask(tasks);
      break;
    case "4":
      console.log("Salir.");
      return;
    default:
      console.log("Opción incorrecta.");
      break;
  }

  showMenu();
}

module.exports = {
  showMenu,
};