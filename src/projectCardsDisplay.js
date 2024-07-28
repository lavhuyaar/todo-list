import { projects } from "./allProjects";
import { createEditOKButton } from "./createEditOKButton";
import {
  createTitleInput,
  createCloseBtn,
  createDescriptionInput,
  createDueDateInput,
  createPriority,
  createCheckbox,
} from "./createTaskFormElements";
import Icon from "./icons/delete-btn.png";
import { priorities } from "./priorities";
import { viewAllTasks } from "./viewAllTasks";
import { format } from "date-fns";

//Displays all project cards of the respective project in content div
export function projectCardsDisplay() {
  document.querySelectorAll(".project").forEach((project) => {
    project.addEventListener("click", () => {
      const content = document.querySelector(".content");
      content.innerHTML = ``;

      const projectContent = document.createElement("div");
      projectContent.className = "project-content";

      const projectHeading = document.createElement("h2");
      projectHeading.className = `project-heading`;

      content.append(projectHeading, projectContent);

      for (let i = 0; i < projects.length; i++) {
        if (project.textContent.split("Delete")[0] === projects[i].name) {
          projectHeading.textContent = projects[i].name;

          for (let j = 0; j < projects[i].tasks.length; j++) {
            const indexNum = j;

            const projectCard = document.createElement("div");
            projectCard.className = `project-card`;

            const projectCardTitle = document.createElement("h3");
            projectCardTitle.textContent = projects[i].tasks[j].title;

            const projectCardDescription = document.createElement("p");
            projectCardDescription.textContent =
              projects[i].tasks[j].description;
            projectCardDescription.style.display = "none";

            const projectCardPriority = document.createElement("p");
            projectCardPriority.textContent = `Priority - ${projects[i].tasks[j].priority}`;
            projectCardPriority.style.display = "none";

            const projectCardDueDate = document.createElement("p");
            projectCardDueDate.textContent = `Due Date - ${projects[i].tasks[j].dueDate}`;

            const projectCheckedBox = document.createElement("input");
            projectCheckedBox.type = "checkbox";
            projectCheckedBox.id = "myCheckBox";

            priorityColorSet(i, j, projectCard);
            taskCompletion(
              projectCardTitle,
              projectCardDescription,
              projectCardDueDate,
              projectCardPriority,
              i,
              j,
              projectCheckedBox
            );

            const projectCardBtn = createEditButton(i, j);

            projectCard.append(
              projectCardTitle,
              projectCheckedBox,
              projectCardDescription,
              projectCardDueDate,
              projectCardPriority,
              projectCardBtn,
              showMore(
                projectCardDescription,
                projectCardPriority,
                projectCardBtn
              ),
              removeProjectTask(i, indexNum, projectCard)
            );

            projectContent.append(projectCard);
          }
        }
      }
    });
  });
}

//Edit button inside project card
function createEditButton(i, j) {
  const editBtn = document.createElement("button");
  editBtn.className = `edit-btn`;
  editBtn.textContent = `Edit`;
  editBtn.style.display = "none";

  editBtn.addEventListener("click", () => {
    const editPage = document.querySelector(".edit-page");
    editPage.innerHTML = ``;
    editPage.style.display = "block";

    const editMenu = document.createElement("div");
    editMenu.className = `edit-menu`;

    const editForm = document.createElement("div");
    editForm.className = `edit-form`;

    editPage.append(editMenu);
    editMenu.append(editForm);
    editForm.append(
      createEditTaskHeading(),
      createTitleInput(),
      createDescriptionInput(),
      createDueDateInput(),
      createPriority(priorities),
      createCheckbox(),
      createEditOKButton(i, j),
      createCloseBtn()
    )
    
    editFormDefaultDetails(i, j);
  });
  return editBtn;
}

//Show more button inside project card
function showMore(description, priority, button) {
  const showMoreBtn = document.createElement("button");
  showMoreBtn.className = `show-more-btn`;
  showMoreBtn.textContent = `Show More`;

  showMoreBtn.addEventListener("click", () => {
    if (showMoreBtn.textContent === `Show More`) {
      description.style.display = "block";
      priority.style.display = "block";
      button.style.display = "block";
      showMoreBtn.textContent = `Show Less`;
    } else if (showMoreBtn.textContent === `Show Less`) {
      description.style.display = "none";
      priority.style.display = "none";
      button.style.display = "none";
      showMoreBtn.textContent = `Show More`;
    }
  });
  return showMoreBtn;
}

//Remove button inside project card which removes task from the respective project inside projects array as well
function removeProjectTask(i, num, card) {
  const projectContent = document.querySelector(".project-content");
  const removeProjectTaskBtn = document.createElement("button");
  removeProjectTaskBtn.innerHTML = `<img src = ${Icon} alt="delete" width="15px"/>`;
  removeProjectTaskBtn.className = `remove-project-task-btn`;

  removeProjectTaskBtn.addEventListener("click", () => {
    projectContent.removeChild(card);
    projects[i].tasks.splice(num, 1);
    console.warn(projects);

    viewAllTasks();
  });
  return removeProjectTaskBtn;
}

//Heading of edit form
function createEditTaskHeading() {
  const editTaskHeading = document.createElement("h2");
  editTaskHeading.textContent = "Edit task";
  editTaskHeading.className = `edit-task-heading`;

  return editTaskHeading;
}

//Adds color to card according to the priority
function priorityColorSet(i, j, card) {
  if (projects[i].tasks[j].priority === `Low`) {
    card.style.backgroundColor = "green";
  } else if (projects[i].tasks[j].priority === `Medium`) {
    card.style.backgroundColor = "yellow";
  } else if (projects[i].tasks[j].priority === `High`) {
    card.style.backgroundColor = "red";
  }
}

//Indicates whether a task/card is completed or not
function taskCompletion(title, description, dueDate, priority, i, j, checkBox) {
  if (projects[i].tasks[j].status === "completed") {
    title.style.textDecoration = "line-through";
    description.style.textDecoration = "line-through";
    dueDate.style.textDecoration = "line-through";
    priority.style.textDecoration = "line-through";
  }

  if (projects[i].tasks[j].status === "completed") {
    checkBox.checked = true;
  } else if (projects[i].tasks[j].status === "pending") {
    checkBox.checked = false;
  }

  checkBox.addEventListener("change", () => {
    if (document.getElementById("myCheckBox").checked) {
      projects[i].tasks[j].status = "completed";
      viewAllTasks();
    } else if (!document.getElementById("myCheckBox").checked) {
      projects[i].tasks[j].status = "pending";
      viewAllTasks();
    }
  });
}

//Fills edit form with already available details of respective div
function editFormDefaultDetails(i, j) {
  document.getElementById('title').value = projects[i].tasks[j].title;
  document.getElementById('description').value = projects[i].tasks[j].description;
}
