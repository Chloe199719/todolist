import elements from "./create";
import trash from "./trash-can.svg";
import pencil from "./lead-pencil.svg";
import {
  addnewTask,
  removeTask,
  updateItsDone,
  updateTask,
} from "./taskmanager";
import { currentProjects, removeProject } from "./manageproject";

// Loads the Selected Project into the  main area
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
    tempbtndetails.addEventListener(`click`, function (e) {
      loadDetails(projI, index);
    });
    let span1 = elements.span(a.dueDate);
    let pencil1 = elements.img(pencil, "edit pencil", "25px");
    pencil1.addEventListener(`click`, function (e) {
      editForm(projI, index);
    });
    let trash1 = elements.img(trash, `trash can`, `25px`);
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

//Loads side nav with Existing Projects

const loadNav = function (proj) {
  const projects = document.querySelector(`.projects`);
  projects.textContent = "";
  proj.forEach((element, a, b) => {
    if (a === 0) return;
    let temp = elements.li(element.name);
    temp.addEventListener(`click`, function (e) {
      loadProject(element, a);
    });
    let tempspan = elements.span();
    tempspan.innerHTML = `<svg style="width:30px;height:30px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z" />
</svg>`;
    tempspan.addEventListener(`click`, function (e) {
      removeProject(a);
    });
    temp.appendChild(tempspan);
    projects.appendChild(temp);
  });
};
export { loadProject, loadNav };

//  Opens a Form  to Create a new task and sumbits it

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

// Makes the Form visible

const taskformActive = function (a) {
  const form = document.querySelector(a);
  const gray = document.querySelector(`#grayout`);
  form.classList.add(`active`);
  gray.classList.add(`active`);
  gray.addEventListener(`click`, function (e) {
    formremoveActive(a);
  });
};

//  Makes the taskForm invisible and Cleans it
const formremoveActive = function (a) {
  const form = document.querySelector(a);
  const gray = document.querySelector(`#grayout`);
  form.classList.remove(`active`);
  gray.classList.remove(`active`);
  let clonegray = gray.cloneNode(true);
  gray.parentNode.replaceChild(clonegray, gray);
  resettaskform();
};

//  Cleans the Task form
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
//  Shows Details of the Tasks clicked
const loadDetails = function (projI, taskI) {
  const details = document.querySelector(`#details`);
  const titlespan = document.querySelector(`.title`);
  const descspan = document.querySelector(`.description`);
  const priospan = document.querySelector(`.Dpriority`);
  const duedatespan = document.querySelector(`.dueDate`);

  titlespan.textContent = currentProjects[projI].task[taskI].title;
  descspan.textContent = currentProjects[projI].task[taskI].description;
  priospan.textContent = currentProjects[projI].task[taskI].priority;
  priospan.classList.add(currentProjects[projI].task[taskI].priority);
  duedatespan.textContent = currentProjects[projI].task[taskI].dueDate;
  loadDetailsActive(details);
};

//  Loads the Form details
const loadDetailsActive = function (a) {
  const gray = document.querySelector(`#grayout`);
  const details = document.querySelector(`#details`);
  details.classList.add(`active`);
  gray.classList.add(`active`);
  gray.addEventListener(`click`, function (e) {
    removeDetailsActive(details);
  });
};
//  Unloads the form Details
const removeDetailsActive = function (a) {
  const gray = document.querySelector(`#grayout`);
  a.classList.remove(`active`);
  gray.classList.remove(`active`);
  resetDetails();
  let clonegray = gray.cloneNode(true);
  gray.parentNode.replaceChild(clonegray, gray);
};

// Removes data from Details Form after hiding
const resetDetails = function () {
  const titlespan = document.querySelector(`.title`);
  const descspan = document.querySelector(`.description`);
  const priospan = document.querySelector(`.Dpriority`);
  const duedatespan = document.querySelector(`.dueDate`);
  titlespan.textContent = "";
  descspan.textContent = "";
  priospan.textContent = "";
  priospan.className = "Dpriority";
  duedatespan.textContent = "";
};

//  Has the Data of clicked task avaible to edit
const editForm = function (projI, index) {
  const edittaskform = document.querySelector(`#edittask`);
  const textinput = document.querySelector(`#edit-title`);
  const descinput = document.querySelector(`#edit-desc`);
  const radiobtns = document.querySelectorAll(`input[name="edit-prio"]`);
  const duedateinput = document.querySelector(`#edit-duedate`);
  const sumbitedit = document.querySelector(`#submitedit`);
  textinput.value = currentProjects[projI].task[index].title;
  descinput.value = currentProjects[projI].task[index].description;
  duedateinput.value = currentProjects[projI].task[index].dueDate;
  radiobtns.forEach((a) => {
    if (a.value === currentProjects[projI].task[index].priority) {
      a.checked = true;
    }
  });
  openeditform();
  sumbitedit.addEventListener(`click`, function (e) {
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
      updateTask(
        projI,
        index,
        textinput.value,
        descinput.value,
        prio,
        duedateinput.value
      );
    } else {
      alert(`Fill all required inputs`);
    }
    closeeditform();
    let fromclone = edittaskform.cloneNode(true);
    edittaskform.parentNode.replaceChild(fromclone, edittaskform);
  });
};

//  Open Edit Form
const openeditform = function () {
  const edittaskform = document.querySelector(`#edittask`);
  const gray = document.querySelector(`#grayout`);
  edittaskform.classList.add(`active`);
  gray.classList.add(`active`);
  gray.addEventListener(`click`, function (e) {
    closeeditform();
  });
};

//  Close Edit form
const closeeditform = function () {
  const edittaskform = document.querySelector(`#edittask`);
  const gray = document.querySelector(`#grayout`);
  const textinput = document.querySelector(`#edit-title`);
  const descinput = document.querySelector(`#edit-desc`);
  const radiobtns = document.querySelectorAll(`input[name="edit-prio"]`);
  const duedateinput = document.querySelector(`#edit-duedate`);
  edittaskform.classList.remove(`active`);
  gray.classList.remove(`active`);
  let clonegray = gray.cloneNode(true);
  gray.parentNode.replaceChild(clonegray, gray);
  textinput.value = "";
  descinput.value = "";
  duedateinput.value = "";
  radiobtns.forEach((a) => {
    a.checked = false;
  });
};
