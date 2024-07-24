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

  const titleDiv = document.createElement("div");
  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.id = `title`;
  const titleLabel = document.createElement("label");
  titleLabel.textContent = `Title`;
  titleLabel.setAttribute("for", "title");

  titleDiv.append(titleLabel, titleInput);

  const descriptionDiv = document.createElement("div");
  const descriptionInput = document.createElement("input");
  descriptionInput.type = "text";
  descriptionInput.id = `description`;
  const descriptionLabel = document.createElement("label");
  descriptionLabel.textContent = `Description`;
  descriptionLabel.setAttribute("for", "description");

  descriptionDiv.append(descriptionLabel, descriptionInput);

  const dueDateDiv = document.createElement("div");
  const dueDateInput = document.createElement("input");
  dueDateInput.type = "text";
  dueDateInput.id = `due-date`;
  const dueDateLabel = document.createElement("label");
  dueDateLabel.textContent = `Due Date`;
  dueDateLabel.setAttribute("for", "due-date");

  dueDateDiv.append(dueDateLabel, dueDateInput);

  const ADD_TASK_BUTTON = document.createElement("button");
  ADD_TASK_BUTTON.textContent = `Add Task`;
  ADD_TASK_BUTTON.className = `add-btn`;
  ADD_TASK_BUTTON.addEventListener("click", () => {
    console.log("click");
  });

  TASK_FORM.append(titleDiv, descriptionDiv, dueDateDiv, ADD_TASK_BUTTON);
}
