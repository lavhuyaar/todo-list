import { projects } from "./allProjects";
import Icon from './icons/delete-btn.png'

export function viewAllTasks() {
  const content = document.querySelector(".content");
  content.innerHTML = ``;

  const tasksList = document.createElement("div");
  tasksList.className = `task-list`;

  const tasksHeading = document.createElement('h2');
  tasksHeading.className = 'tasks-heading';
  tasksHeading.textContent = `All Tasks`;


  content.append(tasksHeading, tasksList);

  
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

      const removeBtn = document.createElement("button");
      removeBtn.classList = `remove-btn`;
      removeBtn.innerHTML = `<img src = ${Icon} alt="delete" width="15px"/>`;
      removeBtn.addEventListener("click", () => {
        tasksList.removeChild(card);
        projects[i].tasks.splice(indexNum, 1);
        console.warn(projects);

      });

      card.append(removeBtn);
    }
  }
}
