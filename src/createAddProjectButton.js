export function createAddProjectButton() {
    const content = document.querySelector('.content');

    const ADD_PROJECT_BTN = document.createElement('button');
    ADD_PROJECT_BTN.textContent = `Create Project`;
  ADD_PROJECT_BTN.className = `add-project-btn`;

  ADD_PROJECT_BTN.addEventListener('click', ()=> {
    console.log('click');

    const projectPage = document.querySelector(".project-page");
    projectPage.style.display = "none";
  })
  return ADD_PROJECT_BTN;
}