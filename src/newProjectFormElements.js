//Project name input in add new project form
export function createProjectNameInput() {
  const projectNameDiv = document.createElement("div");

  const projectNameInput = document.createElement("input");
  projectNameInput.type = "text";
  projectNameInput.id = `project-name`;

  const projectNameLabel = document.createElement("label");
  projectNameLabel.textContent = `Project name`;
  projectNameLabel.setAttribute("for", "project-name");

  projectNameDiv.append(projectNameLabel, projectNameInput);

  return projectNameDiv;
}

//Close button
export function createCloseBtn() {
  const closeBtn = document.createElement("button");
  closeBtn.textContent = `Close`;
  closeBtn.className = "close-btn";

  closeBtn.addEventListener("click", () => {
    const projectPage = document.querySelector(".project-page");
    projectPage.style.display = "none";
  });

  return closeBtn;
}

//Heading
export function createNewProjectHeading() {
  const projectHeading = document.createElement("h2");
  projectHeading.textContent = "Create New Project";
  projectHeading.className = `new-project-heading`;

  return projectHeading;
}
