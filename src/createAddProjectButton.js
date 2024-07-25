import { allProjects } from "./allProjects";

export function createAddProjectButton() {

    const ADD_PROJECT_BTN = document.createElement('button');
    ADD_PROJECT_BTN.textContent = `Create Project`;
    ADD_PROJECT_BTN.className = `add-project-btn`;

    ADD_PROJECT_BTN.addEventListener('click', ()=> {
    allProjects();


    const projectPage = document.querySelector(".project-page");
    projectPage.style.display = "none";


  })
  return ADD_PROJECT_BTN;
}