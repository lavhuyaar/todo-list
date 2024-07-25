import { createTask } from "./createTask";
import { viewAllTasks } from "./viewAllTasks";
import { projects } from "./allProjects";



export function createAddButton() {

  const ADD_BTN = document.createElement("button");
  ADD_BTN.textContent = `Add Task`;
  ADD_BTN.className = `add-btn`;

  addButton(ADD_BTN);
  
  return ADD_BTN;
}

function addButton(button) {
  button.addEventListener("click", () => {

    const select = document.querySelector('select');


    console.log(select.value);

    for (let i = 0; i < projects.length; i++) {
      if (select.value === projects[i].name) {
        projects[i].tasks.push(
          createTask(
            document.querySelector("#title").value,
            document.querySelector("#description").value,
            document.querySelector("#due-date").value
          )
        );
      }
    }
    
    console.log(projects);

    const taskPage = document.querySelector(".task-page");
    taskPage.style.display = "none";

    const content = document.querySelector('.content');
    if(content.querySelector('div[class="task-list"')) {
      viewAllTasks();
    }

  });
}