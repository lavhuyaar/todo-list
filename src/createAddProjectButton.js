import { allProjects } from "./allProjects";
import { viewAllTasks } from "./viewAllTasks";

//"Create" button in new project input form
export function createAddProjectButton() {
  const ADD_PROJECT_BTN = document.createElement("button");
  ADD_PROJECT_BTN.textContent = `Create`;
  ADD_PROJECT_BTN.className = `add-project-btn`;

  ADD_PROJECT_BTN.addEventListener("click", () => {
    if (document.querySelector("#project-name").value === ``) {
      alert("Project name missing");
      viewAllTasks();
    } else if (
      document.querySelector("#project-name").value.length > 20 ||
      document.querySelector("#project-name").value.length < 3
    ) {
      alert(
        `Project's name is either too short or too long. (Minimum letters - 3, Maximum letters - 20)`
      );
      viewAllTasks();
    } else {
      allProjects();
      viewAllTasks();
    }

    const projectPage = document.querySelector(".project-page");
    projectPage.style.display = "none";
  });
  return ADD_PROJECT_BTN;
}
