import { createProject } from "./createProject";
import { createTask } from "./createTask";

export const projects = [
  {
    name: "Default",
    tasks: [],
  },
];

// projects[0].tasks.push(createTask("lav", "paper", "rock"));





export function allProjects() {
  const content = document.querySelector(".content");
  content.innerHTML = ``;

  //Sidebar
  projects.push(createProject(document.querySelector("#project-name").value));
  console.warn(projects);

  const projectGrid = document.querySelector(".projects-grid");
  projectGrid.innerHTML = ``;

  for (let i = 0; i < projects.length; i++) {
    const indexNum = i;

    const project = document.createElement("div");
    project.className = `project`;
    project.textContent = projects[i].name;
    projectGrid.append(project);

   
    project.append( createDeleteButton(indexNum, projectGrid, project));
  }
}

export function createDeleteButton(indexNum, projectGrid, project) {
  const deleteProjectBtn = document.createElement("button");
    deleteProjectBtn.textContent = `Delete`;
    deleteProjectBtn.className = `delete-project-btn`;

      deleteProjectBtn.addEventListener("click", () => {

        if(projects.length > 1) {
        projectGrid.removeChild(project);
        projects.splice(indexNum, 1);
        console.warn(projects);

      } else (
        alert('only one project left')
      )
      
      });
    
    return deleteProjectBtn;
}