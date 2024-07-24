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

        card.append(titleP, indexNum + 1);

    }

}