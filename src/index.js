import "./style.css";
import { addTask } from "./taskFormBox.js";
import { viewAllTasks } from "./viewAllTasks.js";
import { createNewProjectFormBox } from "./newProjectFormBox.js";
import { allProjects, projects } from "./allProjects.js";

//Retrieves saved projects array inside local storage
if (localStorage.getItem("projects")) {
  projects = JSON.parse(localStorage.getItem("projects"));
} else {
  projects = [];
}

const addTaskBtn = document.querySelector(".add-task-btn");
addTaskBtn.addEventListener("click", () => {
  addTask();
});

const viewTasksBtn = document.querySelector(".view-tasks-btn");
viewTasksBtn.addEventListener("click", () => {
  viewAllTasks();
});

const createNewProjectBtn = document.querySelector(".create-project-btn");
createNewProjectBtn.addEventListener("click", () => {
  createNewProjectFormBox();
});

allProjects();
viewAllTasks();
