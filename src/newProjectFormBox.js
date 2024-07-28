import {
  createNewProjectHeading,
  createProjectNameInput,
  createCloseBtn,
  createProjectFormButtons,
} from "./newProjectFormElements.js";
import { createAddProjectButton } from "./createAddProjectButton.js";

//Creates new project input form
export function createNewProjectFormBox() {
  const projectPage = document.querySelector(".project-page");

  projectPage.innerHTML = ``;
  projectPage.style.display = "block";

  const projectMenu = document.createElement("div");
  projectMenu.className = `project-menu`;
  projectPage.append(projectMenu);

  const projectForm = document.createElement("div");
  projectForm.className = `project-form`;
  projectMenu.append(projectForm);

  createProjectForm();
}

export function createProjectForm() {
  const PROJECT_FORM = document.querySelector(".project-form");

  PROJECT_FORM.append(
    createNewProjectHeading(),
    createProjectNameInput(),
    createProjectFormButtons()
  );
}
