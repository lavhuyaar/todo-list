import {
  createTitleInput,
  createDescriptionInput,
  createDueDateInput,
  createProjectOption,
  createCloseBtn,
  createPriority,
  createCheckbox,
  createAddTaskHeading,
} from "./createTaskFormElements.js";
import { createAddButton } from "./createAddTaskButton.js";
import { priorities } from "./priorities.js";

//Creates new task input form
export function addTask() {
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
  TASK_FORM.append(
    createAddTaskHeading(),
    createTitleInput(),
    createDescriptionInput(),
    createDueDateInput(),
    createProjectOption(),
    createPriority(priorities),
    createCheckbox(),
    createAddButton(),
    createCloseBtn()
  );
}
