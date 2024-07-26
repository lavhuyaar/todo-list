import { projects } from "./allProjects";

export function createTitle() {
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

export function createDescription() {
  const descriptionDiv = document.createElement("div");
  const descriptionInput = document.createElement("input");
  descriptionInput.type = "text";
  descriptionInput.id = `description`;
  const descriptionLabel = document.createElement("label");
  descriptionLabel.textContent = `Description`;
  descriptionLabel.setAttribute("for", "description");

  descriptionDiv.append(descriptionLabel, descriptionInput);

  return descriptionDiv;
}

export function createDueDate() {
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

export function createOption() {

  const projectOptionsDiv = document.createElement('div');
  const select = document.createElement("select");
  select.id = `project-options`;

  const projectOptionsLabel = document.createElement('label');
  projectOptionsLabel.textContent = `Add task in`
  projectOptionsLabel.setAttribute("for", "projects-options");

  for (let i = 0; i < projects.length; i++) {
    const option = document.createElement("option");
    option.textContent = projects[i].name;
    option.value = projects[i].name;
    select.add(option);
  }

  projectOptionsDiv.append(projectOptionsLabel, select)
  return projectOptionsDiv;
}

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

export function createPriority(priorities) {

  const prioritiesDiv = document.createElement('div');

  const select = document.createElement("select");
  select.id = `priorities-select`;

  const prioritiesLabel = document.createElement('label');
  prioritiesLabel.textContent = `Priority`;
  prioritiesLabel.setAttribute('for', 'priorities-select');


  for (let i = 0; i < priorities.length; i++) {
    const option = document.createElement("option");

    option.textContent = priorities[i].priority;
    option.style.backgroundColor = priorities[i].color;
    option.value = priorities[i].priority;
    select.add(option);
  }

  prioritiesDiv.append(prioritiesLabel, select)

  return prioritiesDiv;
}
