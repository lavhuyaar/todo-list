import { createTask } from "./createTask";
const tasks = [];

export function createAddButton() {
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
  });
  return ADD_BTN;
}
