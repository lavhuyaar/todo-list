import { createTask } from "./createTask";
import { viewAllTasks } from "./viewAllTasks";
import { projects } from "./allProjects";
import { format } from "date-fns";

//Add Button in add task input form
export function createAddButton() {
  const ADD_BTN = document.createElement("button");
  ADD_BTN.textContent = `Add`;
  ADD_BTN.className = `add-btn`;
  addButton(ADD_BTN);
  return ADD_BTN;
}

function addButton(button) {
  button.addEventListener("click", () => {
    const select = document.querySelector("#project-options");

    if (
      document.querySelector("#title").value === `` ||
      document.querySelector("#description").value === `` ||
      document.querySelector("#due-date").value === ``
    ) {
      alert("Title, Description or Due Date missing.");
    } else if (projects.length === 0) {
      alert("NO PROJECTS!! Create a project first.");
    } else {
      for (let i = 0; i < projects.length; i++) {
        if (select.value === projects[i].name) {
          projects[i].tasks.push(
            createTask(
              document.querySelector("#title").value,
              document.querySelector("#description").value,
              format(
                new Date(document.querySelector("#due-date").value),
                "dd-MM-yyyy"
              ),
              document.querySelector("#priorities-select").value,
              checkBox()
            )
          );
        }
      }

      const taskPage = document.querySelector(".task-page");
      taskPage.style.display = "none";

      viewAllTasks();
    }
  });
}

export function checkBox() {
  if (document.querySelector("#checkbox").checked) {
    return "completed";
  } else {
    return "pending";
  }
}
