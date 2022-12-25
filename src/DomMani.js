import { loadProject, loadNav } from "./loadProject";
import { addnewProject, currentProjects } from "./manageproject";

// Runs the Add Project Button

const createproject = function (e) {
  e.preventDefault();
  const inputname = document.querySelector(`#name`);
  if (inputname.value === "") return;

  addnewProject(inputname.value, []);
  loadNav(currentProjects); // Reloads Nav
  createprojRemove();
};

// Open a Form to Type a New Project Name
const createprojActive = function () {
  const createform = document.querySelector(`#createproj`);
  const gray = document.querySelector(`#grayout`);
  createform.classList.add(`active`);
  gray.classList.add(`active`);
  gray.addEventListener(`click`, function (e) {
    createprojRemove(createform, gray);
  });
};

// Closes Form After making new Project Or Canceling
const createprojRemove = function () {
  const form = document.querySelector(`#createproj`);
  const gray = document.querySelector(`#grayout`);
  const inputname = document.querySelector(`#name`);
  inputname.value = "";
  form.classList.remove(`active`);
  gray.classList.remove(`active`);
  let clonegray = gray.cloneNode(true);
  gray.parentNode.replaceChild(clonegray, gray);
};

export { createproject, createprojActive };
