import { projects } from "./allProjects";
import { createAddButton } from "./createAddTaskButton";

//Title input of add task form
export function createTitleInput() {
  const titleDiv = document.createElement("div");

  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.id = `title`;

  const titleLabel = document.createElement("label");
  titleLabel.textContent = `Title`;
  titleLabel.setAttribute("for", "title");

  titleDiv.append(titleLabel, titleInput);

  return titleDiv;
}

//Description
export function createDescriptionInput() {
  const descriptionDiv = document.createElement("div");

  const descriptionInput = document.createElement("textarea");
  descriptionInput.id = `description`;

  const descriptionLabel = document.createElement("label");
  descriptionLabel.textContent = `Description`;
  descriptionLabel.setAttribute("for", "description");

  descriptionDiv.append(descriptionLabel, descriptionInput);

  return descriptionDiv;
}

//Due-date
export function createDueDateInput() {
  const dueDateDiv = document.createElement("div");

  const dueDateInput = document.createElement("input");
  dueDateInput.type = "date";
  dueDateInput.id = `due-date`;

  const dueDateLabel = document.createElement("label");
  dueDateLabel.textContent = `Due Date`;
  dueDateLabel.setAttribute("for", "due-date");

  dueDateDiv.append(dueDateLabel, dueDateInput);

  return dueDateDiv;
}

//Project select
export function createProjectOption() {
  const projectOptionDiv = document.createElement("div");

  const select = document.createElement("select");
  select.id = `project-options`;

  const projectOptionLabel = document.createElement("label");
  projectOptionLabel.textContent = `Add task in`;
  projectOptionLabel.setAttribute("for", "projects-options");

  for (let i = 0; i < projects.length; i++) {
    const option = document.createElement("option");
    option.textContent = projects[i].name;
    option.value = projects[i].name;
    select.add(option);
  }
  projectOptionDiv.append(projectOptionLabel, select);
  return projectOptionDiv;
}

//Close button
export function createCloseBtn() {
  const taskPage = document.querySelector(".task-page");

  const closeBtn = document.createElement("button");
  closeBtn.textContent = `Close`;
  closeBtn.className = `close-btn`;

  closeBtn.addEventListener("click", () => {
    taskPage.style.display = "none";
  });
  return closeBtn;
}

//Priority select
export function createPriority(priorities) {
  const prioritiesDiv = document.createElement("div");

  const select = document.createElement("select");
  select.id = `priorities-select`;

  const prioritiesLabel = document.createElement("label");
  prioritiesLabel.textContent = `Priority`;
  prioritiesLabel.setAttribute("for", "priorities-select");
  for (let i = 0; i < priorities.length; i++) {
    const option = document.createElement("option");
    option.textContent = priorities[i].priority;
    option.value = priorities[i].priority;
    select.add(option);
  }
  prioritiesDiv.append(prioritiesLabel, select);
  return prioritiesDiv;
}

//Checkbox
export function createCheckbox() {
  const checkBoxDiv = document.createElement("div");

  const checkBoxLabel = document.createElement("label");
  checkBoxLabel.textContent = "Task completed?";
  checkBoxLabel.setAttribute("for", "complete");

  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.id = "checkbox";
  checkBox.value = "completed";

  checkBoxDiv.append(checkBoxLabel, checkBox);

  return checkBoxDiv;
}

//Heading
export function createAddTaskHeading() {
  const addTaskHeading = document.createElement("h2");
  addTaskHeading.textContent = `Add Task`;
  addTaskHeading.className = `add-task-heading`;

  return addTaskHeading;
}

export function createTaskButtons() {
  const taskButtonsDiv = document.createElement("div");
  taskButtonsDiv.className = "task-btns";

  taskButtonsDiv.append(createAddButton(), createCloseBtn());

  return taskButtonsDiv;
}
