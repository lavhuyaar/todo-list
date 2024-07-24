import { createTitle , createDescription, createDueDate} from "./createFormElements.js";
import { createAddButton } from "./createAddButton.js";


export function addTasks() {
  const taskPage = document.querySelector(".task-page");

  taskPage.innerHTML = ``;
  taskPage.style.display = "block";

  const taskMenu = document.createElement("div");
  taskMenu.className = `task-menu`;
  taskPage.append(taskMenu);

  const taskForm = document.createElement("div");
  taskForm.className = `task-form`;
  taskMenu.append(taskForm);

  createTaskForm();
}


export function createTaskForm() {
  const TASK_FORM = document.querySelector(".task-form");

  TASK_FORM.append(createTitle(), createDescription(), createDueDate(), createAddButton());
}
