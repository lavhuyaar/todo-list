import { projects } from "./allProjects";

export function projectDisplay() {
  document.querySelectorAll(".project").forEach((project) => {
    project.addEventListener("click", () => {
      const content = document.querySelector(".content");
      content.innerHTML = ``;
      console.warn("log", project.textContent.split("Delete")[0]);

      for (let i = 0; i < projects.length; i++) {
        if (project.textContent.split("Delete")[0] === projects[i].name) {
          console.log(true);

          for (let j = 0; j < projects[i].tasks.length; j++) {
            const indexNum = j;

            const projectDiv = document.createElement("div");
            projectDiv.className = projects[i].tasks[j].title;
            projectDiv.textContent = projects[i].tasks[j].title;

            projectDiv.append(
              removeProjectTask(i, indexNum, projectDiv, content)
            );

            content.append(projectDiv);
          }
        }
      }
    });
  });
}

function removeProjectTask(i, indexNum, projectDiv, content) {
  const removeProjectTaskBtn = document.createElement("button");
  removeProjectTaskBtn.textContent = `Remove`;
  removeProjectTaskBtn.className = `remove-project-task-btn`;

  removeProjectTaskBtn.addEventListener("click", () => {
    content.removeChild(projectDiv);
    projects[i].tasks.splice(indexNum, 1);
    console.warn(projects);
  });
  return removeProjectTaskBtn;
}
