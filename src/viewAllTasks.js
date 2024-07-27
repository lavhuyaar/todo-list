import { projects } from "./allProjects";
import Icon from "./icons/delete-btn.png";

export function viewAllTasks() {
  const content = document.querySelector(".content");
  content.innerHTML = ``;

  const tasksList = document.createElement("div");
  tasksList.className = `task-list`;

  const tasksHeading = document.createElement("h2");
  tasksHeading.className = "tasks-heading";
  tasksHeading.textContent = `All Tasks`;

  content.append(tasksHeading, tasksList);

  task(tasksList);
}

function task(div) {
  for (let i = 0; i < projects.length; i++) {
    for (let j = 0; j < projects[i].tasks.length; j++) {
      const indexNum = j;

      const taskCard = document.createElement("div");
      taskCard.className = `task-card`;

      const taskTitle = document.createElement("h3");
      taskTitle.textContent = projects[i].tasks[j].title;

      if (projects[i].tasks[j].priority === `Low`) {
        taskCard.style.backgroundColor = "green";
      } else if (projects[i].tasks[j].priority === `Medium`) {
        taskCard.style.backgroundColor = "yellow";
      } else if (projects[i].tasks[j].priority === `High`) {
        taskCard.style.backgroundColor = "red";
      }

      const taskCardDueDate = document.createElement("p");
      taskCardDueDate.textContent = `Due Date - ${projects[i].tasks[j].dueDate}`;

      if (projects[i].tasks[j].status === "completed") {
        taskTitle.style.textDecoration = "line-through";
        taskCardDueDate.style.textDecoration = "line-through";
      }

      div.append(taskCard);

      taskCard.append(
        taskTitle,
        taskCardDueDate,
        removeTaskBtn(i, indexNum, taskCard, div)
      );
    }
  }
}

export function removeTaskBtn(i, index, card, div) {
  const removeBtn = document.createElement("button");
  removeBtn.classList = `remove-btn`;
  removeBtn.innerHTML = `<img src = ${Icon} alt="delete" width="15px"/>`;
  removeBtn.addEventListener("click", () => {
    div.removeChild(card);
    projects[i].tasks.splice(index, 1);
    console.warn(projects);
  });

  return removeBtn;
}
