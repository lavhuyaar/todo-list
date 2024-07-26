import { projects } from "./allProjects";
import { createEditOKButton } from "./createEditOKButton";
import { createTitle, createCloseBtn, createDescription, createDueDate, createPriority } from "./createTaskFormElements";
import Icon from './icons/delete-btn.png';
import { priorities } from "./priorities";
import { viewAllTasks } from "./viewAllTasks";


export function projectDisplay() {
  document.querySelectorAll(".project").forEach((project) => {
    project.addEventListener("click", () => {
      const content = document.querySelector(".content");
      content.innerHTML = ``;

      const projectContent = document.createElement("div");
      projectContent.className = "project-content";

      const projectHeading = document.createElement("h2");
      projectHeading.className = `project-heading`;

      content.append(projectHeading, projectContent);

      console.warn(projects);


      for (let i = 0; i < projects.length; i++) {
        if (project.textContent.split("Delete")[0] === projects[i].name) {
          console.log(true);

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

            const projectCardPriority = document.createElement('p');
            projectCardPriority.textContent = `Priority - ${projects[i].tasks[j].priority}`;
            projectCardPriority.style.display = 'none';

            if(projects[i].tasks[j].priority === `Low`) {
              projectCard.style.backgroundColor = 'green';
            } else if (projects[i].tasks[j].priority === `Medium`) {
              projectCard.style.backgroundColor = 'yellow';
            }else if (projects[i].tasks[j].priority === `High`) {
              projectCard.style.backgroundColor = 'red';
            }

            const projectCardDueDate = document.createElement("p");
            projectCardDueDate.textContent = `Due Date - ${projects[i].tasks[j].dueDate}`;

            const projectCardBtn = createEditBtn(i, j);

            projectCard.append(
              projectCardTitle,
              projectCardDescription,
              projectCardDueDate,
              projectCardPriority,
              projectCardBtn,
              showMore(projectCardDescription, projectCardPriority, projectCardBtn),
              removeProjectTask(i, indexNum, projectCard)
            );

            projectContent.append(projectCard);
          }
        }
      }
    });
  });
}


function createEditBtn(i, j) {
  const editBtn = document.createElement('button');
  editBtn.className = `edit-btn`;
  editBtn.textContent = `Edit`;
  editBtn.style.display = 'none';

  editBtn.addEventListener('click', ()=> {
    console.log('click');

    const editPage = document.querySelector('.edit-page');
    editPage.innerHTML = ``;
    editPage.style.display = 'block';
    const editMenu = document.createElement('div');
    editMenu.className = `edit-menu`;
    const editForm = document.createElement('div');
    editForm.className = `edit-form`;

    editPage.append(editMenu);

    editMenu.append(editForm);

    editForm.append(createTitle(), createDescription(), createDueDate(), createPriority(priorities),createEditOKButton(i, j), createCloseBtn() );
  })

  return editBtn;
}

function showMore(description, priority, button) {
  const showMoreBtn = document.createElement("button");
  showMoreBtn.className = `show-more-btn`;
  showMoreBtn.textContent = `Show More`;

  showMoreBtn.addEventListener("click", () => {
    if (showMoreBtn.textContent === `Show More`) {
      description.style.display = "block";
      priority.style.display = 'block';
      button.style.display = 'block';
      showMoreBtn.textContent = `Show Less`;
    } else if (showMoreBtn.textContent === `Show Less`) {
      description.style.display = "none";
      priority.style.display = 'none';
      button.style.display = 'none';
      showMoreBtn.textContent = `Show More`;
    }
  });
  return showMoreBtn;
}

function removeProjectTask(i, num, card) {

  const projectContent = document.querySelector('.project-content');
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
