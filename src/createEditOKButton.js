import { projects } from "./allProjects";
import { format } from "date-fns";
import { viewAllTasks } from "./viewAllTasks";

export function createEditOKButton(i, j) {
  const editOKBtn = document.createElement("button");
  editOKBtn.textContent = `Ok`;
  editOKBtn.className = "edit-ok-btn";

  okBtn(editOKBtn, i, j);
  return editOKBtn;
}

function okBtn(button, i, j) {
  button.addEventListener("click", () => {
    projects[i].tasks[j].title = document.querySelector("#title").value;
    console.warn(true, 2);
    projects[i].tasks[j].description =
      document.querySelector("#description").value;
    console.log("true pri");
    projects[i].tasks[j].priority =
      document.querySelector("#priorities-select").value;
    projects[i].tasks[j].dueDate = format(
      new Date(document.querySelector("#due-date").value),
      "dd-MM-yyyy"
    );
    viewAllTasks();

    const editPage = document.querySelector(".edit-page");
    editPage.style.display = "none";
  });
}
