export const tasks = [];

export function viewAllTasks() {
    const content = document.querySelector('.content');
    content.innerHTML = ``;

    const tasksList = document.createElement('div');
    tasksList.className = `task-list`;
    content.append(tasksList);
    console.warn(tasks);

    for(let i = 0; i < tasks.length; i++) {
        const indexNum = i;
        const card = document.createElement('div');
        card.className = `task`;

        tasksList.append(card);
        
        const titleP = document.createElement('p');
        titleP.textContent = tasks[i].title;

        const removeBtn = document.createElement('button');
        removeBtn.classList = `remove-btn`;
        removeBtn.textContent = `Remove`;
        removeBtn.addEventListener('click', ()=> {
            tasksList.removeChild(card);
            tasks.splice(indexNum, 1);
            console.warn(tasks);
        })

        card.append(titleP, indexNum + 1, removeBtn);

    }

}