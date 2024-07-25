import { projects } from "./allProjects";

// export const tasks = [];

export function viewAllTasks() {
  const content = document.querySelector(".content");
  content.innerHTML = ``;

  const tasksList = document.createElement("div");
  tasksList.className = `task-list`;
  content.append(tasksList);

  task(tasksList);
}

function task(tasksList) {
  for (let i = 0; i < projects.length; i++) {
    for (let j = 0; j < projects[i].tasks.length; j++) {
      const indexNum = j;

      const card = document.createElement("div");
      card.className = `task`;
      card.textContent = projects[i].tasks[j].title;

      tasksList.append(card);

      // const titleP = document.createElement('p');
      // const projectTask = projects[i].tasks;
      // titleP.textContent = projectTask.title;

      const removeBtn = document.createElement("button");
      removeBtn.classList = `remove-btn`;
      removeBtn.textContent = `Remove`;
      removeBtn.addEventListener("click", () => {
        tasksList.removeChild(card);
        projects[i].tasks.splice(indexNum, 1);
        console.warn(projects);

      });

      card.append(removeBtn);
    }
  }
}
