import "./style.css";
import { addTasks } from "./taskForm.js";

const tasks = [];
const projects = [];

const addTaskBtn = document.querySelector('.add-task-btn');
addTaskBtn.addEventListener('click', ()=> {
    addTasks();
});