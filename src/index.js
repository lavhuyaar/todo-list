import "./style.css";
import { addTasks } from "./taskForm.js";
import { viewAllTasks } from "./viewAllTasks.js";


const projects = [];

const addTaskBtn = document.querySelector('.add-task-btn');
addTaskBtn.addEventListener('click', ()=> {
    addTasks();
});

const viewTasksBtn = document.querySelector('.view-tasks');
viewTasksBtn.addEventListener('click', ()=> {
    viewAllTasks();
})



