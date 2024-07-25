import { projects } from "./allProjects";

export function projectDisplay() {
  document.querySelectorAll(".project").forEach((project) => {
    project.addEventListener("click", () => {
      const content = document.querySelector(".content");
      content.innerHTML = ``;

      const projectContent = document.createElement('div');
      projectContent.className = 'project-content';

      const projectHeading = document.createElement('h2');
      projectHeading.className = `project-heading`;

      content.append(projectHeading, projectContent);

      console.warn("log", project.textContent.split("Delete")[0]);

      for (let i = 0; i < projects.length; i++) {
        if (project.textContent.split("Delete")[0] === projects[i].name) {
          console.log(true);

          projectHeading.textContent = projects[i].name;

          for (let j = 0; j < projects[i].tasks.length; j++) {
            const indexNum = j;

            const projectDiv = document.createElement("div");
            projectDiv.className = projects[i].tasks[j].title;
            projectDiv.textContent = projects[i].tasks[j].title;

            projectDiv.append(
              removeProjectTask(i, indexNum, projectDiv, projectContent)
            );

            projectContent.append(projectDiv);
          }
        }
      }
      return `${project.textContent.split("Delete")[0]}`;
    });
  });
}

function removeProjectTask(i, indexNum, projectDiv, projectContent) {
  const removeProjectTaskBtn = document.createElement("button");
  removeProjectTaskBtn.textContent = `Remove`;
  removeProjectTaskBtn.className = `remove-project-task-btn`;

  removeProjectTaskBtn.addEventListener("click", () => {
    projectContent.removeChild(projectDiv);
    projects[i].tasks.splice(indexNum, 1);
    console.warn(projects);
  });
  return removeProjectTaskBtn;
}

export function projectKey() {
  console.log(projectDisplay());
}