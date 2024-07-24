import "./style.css";
import { addTasks } from "./taskForm.js";

const projects = [];

const addTaskBtn = document.querySelector('.add-task-btn');
addTaskBtn.addEventListener('click', ()=> {
    addTasks();
});


