import { createProject } from "./createProject";
import { projectCardsDisplay } from "./projectCardsDisplay";
import Icon from "./icons/delete-btn.png";
import { viewAllTasks } from "./viewAllTasks";

//Projects array which stores all projects and their respective tasks
export const projects = [];

//Creates a project div at 'Projects' section of sidebar as well as creates linked project div at content
export function allProjects() {
  const content = document.querySelector(".content");
  content.innerHTML = ``;

  //Pushes project to projects array
  projects.push(createProject(document.querySelector("#project-name").value));

  const projectGrid = document.querySelector(".projects-grid");
  projectGrid.innerHTML = ``;

  for (let i = 0; i < projects.length; i++) {
    const indexNum = i;
    const project = document.createElement("div");
    project.className = `project`;
    project.textContent = projects[i].name;

    projectGrid.append(project);
    project.append(createDeleteButton(indexNum, project));
  }
  projectCardsDisplay();
}

//Delete button assigned to projects at sidebar section which deletes the project
export function createDeleteButton(indexNum, project) {
  const projectGrid = document.querySelector(".projects-grid");

  const deleteProjectBtn = document.createElement("button");
  deleteProjectBtn.textContent = `Delete`;
  deleteProjectBtn.className = `delete-project-btn`;

  deleteProjectBtn.addEventListener("click", () => {
    if (projects.length > 1) {
      projectGrid.removeChild(project);
      projects.splice(indexNum, 1);
      console.warn(projects);
    } else {
      alert("Only one project left.");
      viewAllTasks();
    }
  });
  return deleteProjectBtn;
}
