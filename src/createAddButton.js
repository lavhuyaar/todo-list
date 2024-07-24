import { createTask } from "./createTask";
import { tasks, viewAllTasks } from "./viewAllTasks";

export function createAddButton() {
  const content = document.querySelector('.content');

  const ADD_BTN = document.createElement("button");
  ADD_BTN.textContent = `Add Task`;
  ADD_BTN.className = `add-btn`;

  ADD_BTN.addEventListener("click", () => {
    console.log("click");
    tasks.push(
      createTask(
        document.querySelector("#title").value,
        document.querySelector("#description").value,
        document.querySelector("#due-date").value
      )
    );
    console.log();
    console.log(tasks);

    const taskPage = document.querySelector(".task-page");
    taskPage.style.display = "none";

    if(content.querySelector('div[class="task-list"')) {
      viewAllTasks();
    }

  });
  return ADD_BTN;
}
