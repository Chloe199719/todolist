import elements from "./create";

const loadProject = function (proj) {
  const main = document.querySelector(`main`);
  main.textContent = "";
  const tasklist = elements.ul();
  proj.task.forEach((a) => {
    let temp = elements.li(a.title);
    tasklist.appendChild(temp);
  });
  const addTask = elements.li(`Add Task`);
  tasklist.appendChild(addTask);
  addTask.setAttribute(`id`, `addtask`);
  main.append(elements.h2(proj.name), tasklist);
};

const loadNav = function (proj) {
  const projects = document.querySelector(`.projects`);
  projects.textContent = "";
  proj.forEach((element, a, b) => {
    if (a === 0) return;
    let temp = elements.li(element.name);
    temp.addEventListener(`click`, function (e) {
      loadProject(element);
    });
    projects.appendChild(temp);
  });
};
export { loadProject, loadNav };
