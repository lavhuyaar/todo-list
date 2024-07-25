import "./style.css";
import { addTasks } from "./taskForm.js";
import { viewAllTasks } from "./viewAllTasks.js";
import { createNewProject } from "./createNewProject.js";

const addTaskBtn = document.querySelector('.add-task-btn');
addTaskBtn.addEventListener('click', ()=> {
    addTasks();
});

const viewTasksBtn = document.querySelector('.view-tasks-btn');
viewTasksBtn.addEventListener('click', ()=> {
    viewAllTasks();
})

const createNewProjectBtn = document.querySelector('.create-project-btn');
createNewProjectBtn.addEventListener('click', ()=> {
    createNewProject();
})