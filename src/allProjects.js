import { createProject } from "./createProject";
import { projectDisplay } from "./projectDisplay";
import Icon from './icons/delete-btn.png';

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

   
    project.append( createDeleteButton(indexNum, project));
  }

  projectDisplay();
}

export function createDeleteButton(indexNum, project) {

  const projectGrid = document.querySelector(".projects-grid");
  
  const deleteProjectBtn = document.createElement("button");
    deleteProjectBtn.innerHTML = `<img src = ${Icon} alt="delete" width="15px"/>`;
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