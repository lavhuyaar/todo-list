import "./style.css";
import { addTask } from "./taskFormBox.js";
import { viewAllTasks } from "./viewAllTasks.js";
import { createNewProjectFormBox } from "./newProjectFormBox.js";

const addTaskBtn = document.querySelector('.add-task-btn');
addTaskBtn.addEventListener('click', ()=> {
    addTask();
});

const viewTasksBtn = document.querySelector('.view-tasks-btn');
viewTasksBtn.addEventListener('click', ()=> {
    viewAllTasks();
})

const createNewProjectBtn = document.querySelector('.create-project-btn');
createNewProjectBtn.addEventListener('click', ()=> {
    createNewProjectFormBox();
})

viewAllTasks();
