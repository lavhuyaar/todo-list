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
