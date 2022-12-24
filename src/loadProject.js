import elements from "./create";
import trash from "./trash-can.svg";
import pencil from "./lead-pencil.svg";
import { addnewTask, removeTask, updateItsDone } from "./taskmanager";
import { currentProjects } from "./manageproject";

const loadProject = function (proj, projI) {
  const main = document.querySelector(`main`);
  main.textContent = "";
  const tasklist = elements.ul();

  tasklist.classList.add("task-list");
  proj.task.forEach((a, index) => {
    let temp = elements.li();
    temp.classList.toggle(a.priority);
    const dev1temp = elements.div(`leftDetails`);
    let input1 = elements.input(`checkbox`, `itsdone`);
    input1.checked = a.itsdone;
    input1.addEventListener(`click`, function (e) {
      updateItsDone(projI, index, input1.checked);
    });
    let divtemp = elements.div(`rightDetails`);
    let tempbtndetails = elements.button("Details", `details`);
    let span1 = elements.span(a.dueDate);
    let pencil1 = elements.img(pencil, "edit pencil", "20px");
    let trash1 = elements.img(trash, `trash can`, `20px`);
    trash1.addEventListener(`click`, function (e) {
      removeTask(projI, index);
    });
    divtemp.append(tempbtndetails, span1, pencil1, trash1);
    dev1temp.append(input1, elements.span(`${a.title}`));
    temp.append(dev1temp, divtemp);
    tasklist.appendChild(temp);
  });
  const addTask = elements.li(`Add Task`);
  addTask.addEventListener(`click`, function (e) {
    createtaskForm(projI);
    taskformActive(`.allforms`);
  });
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

const createtaskForm = function (projIndex) {
  const textinput = document.querySelector(`#title`);
  const descinput = document.querySelector(`#desc`);
  const radiobtns = document.querySelectorAll(`input[name="prio"]`);
  const duedateinput = document.querySelector(`#duedate`);
  const addnewtaskbtn = document.querySelector(`#addnewtaskbtn`);
  const form = document.querySelector(`.allforms`);

  addnewtaskbtn.addEventListener("click", function (e) {
    e.preventDefault();
    let prio;
    radiobtns.forEach((a) => {
      if (a.checked === true) {
        prio = a.value;
      }
    });
    if (
      textinput.value !== "" &&
      prio !== undefined &&
      duedateinput.value !== ""
    ) {
      addnewTask(
        projIndex,
        textinput.value,
        descinput.value,
        prio,
        duedateinput.value,
        false
      );
    } else {
      alert(`Fill all required inputs`);
    }
    resettaskform();
    loadProject(currentProjects[projIndex], projIndex);
    formremoveActive(`.allforms`);
    let fromclone = form.cloneNode(true);
    form.parentNode.replaceChild(fromclone, form);
  });
};

const taskformActive = function (a) {
  const form = document.querySelector(a);
  const gray = document.querySelector(`#grayout`);
  form.classList.add(`active`);
  gray.classList.add(`active`);
  gray.addEventListener(`click`, function (e) {
    formremoveActive(a);
  });
};

const formremoveActive = function (a) {
  const form = document.querySelector(a);
  const gray = document.querySelector(`#grayout`);
  form.classList.remove(`active`);
  gray.classList.remove(`active`);
  let clonegray = gray.cloneNode(true);
  gray.parentNode.replaceChild(clonegray, gray);
  resettaskform();
};

const resettaskform = function () {
  const textinput = document.querySelector(`#title`);
  const descinput = document.querySelector(`#desc`);
  const radiobtns = document.querySelectorAll(`input[name="prio"]`);
  const duedateinput = document.querySelector(`#duedate`);

  textinput.value = "";
  descinput.value = "";
  radiobtns.forEach((a) => {
    a.checked = false;
  });
  duedateinput.value = "";
};
