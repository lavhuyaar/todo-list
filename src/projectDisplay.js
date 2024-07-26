import { projects } from "./allProjects";
import Icon from './icons/delete-btn.png';


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

      console.warn("log", project.textContent.split("Delete")[0]);

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

            projectCard.append(
              projectCardTitle,
              projectCardDescription,
              projectCardDueDate,
              projectCardPriority,
              removeProjectTask(i, indexNum, projectCard),
              showMore(projectCardDescription, projectCardPriority)
            );

            projectContent.append(projectCard);
          }
        }
      }
    });
  });
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
  });
  return removeProjectTaskBtn;
}

function showMore(description, priority) {
  const showMoreBtn = document.createElement("button");
  showMoreBtn.className = `show-more-btn`;
  showMoreBtn.textContent = `Show More`;

  showMoreBtn.addEventListener("click", () => {
    if (showMoreBtn.textContent === `Show More`) {
      description.style.display = "block";
      priority.style.display = `block`;
      showMoreBtn.textContent = `Show Less`;
    } else if (showMoreBtn.textContent === `Show Less`) {
      description.style.display = "none";
      priority.style.display = 'none';
      showMoreBtn.textContent = `Show More`;
    }
  });
  return showMoreBtn;
}
