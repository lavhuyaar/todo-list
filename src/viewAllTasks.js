export const tasks = [];

export function viewAllTasks() {
    const content = document.querySelector('.content');
    content.innerHTML = ``;
    console.warn(tasks);
    for(let i = 0; i < tasks.length; i++) {
        const indexNum = i;
        const card = document.createElement('div');
        card.className = `task`;

        content.append(card);
        
        const titleP = document.createElement('p');
        titleP.textContent = tasks[i].title;

        const removeBtn = document.createElement('button');
        removeBtn.classList = `remove-btn`;
        removeBtn.textContent = `Remove`;
        removeBtn.addEventListener('click', ()=> {
            content.removeChild(card);
            tasks.splice(indexNum, 1);
            console.warn(tasks);
        })

        card.append(titleP, indexNum + 1, removeBtn);

    }

}