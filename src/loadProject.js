import elements from "./create";
import trash from "./trash-can.svg";
import pencil from "./lead-pencil.svg";
import { removeTask, updateItsDone } from "./taskmanager";

const loadProject = function (proj, projI) {
  const main = document.querySelector(`main`);
  main.textContent = "";
  const tasklist = elements.ul();

  tasklist.classList.add("task-list");
  proj.task.forEach((a, index) => {
    let temp = elements.li();
    const dev1temp = elements.div(`leftDetails`);
    let input1 = elements.input(`checkbox`, `itsdone`);
    input1.checked = a.itsdone;
    input1.addEventListener(`click`, function (e) {
      updateItsDone(projI, index, input1.checked);
    });
    let divtemp = elements.div(`rightDetails`);
    let tempbtndetails = elements.button("Details", `details`);
    let span1 = elements.span(a.dueDate);
    let pencil1 = elements.img(pencil, "20px", "20px");
    let trash1 = elements.img(trash, `20px`, `20px`);
    trash1.addEventListener(`click`, function (e) {
      removeTask(projI);
    });
    divtemp.append(tempbtndetails, span1, pencil1, trash1);
    dev1temp.append(input1, elements.span(`${a.title}`));
    temp.append(dev1temp, divtemp);
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
      loadProject(element, a);
    });
    projects.appendChild(temp);
  });
};
export { loadProject, loadNav };
