import { loadProject, loadNav } from "./loadProject";
import { addnewProject, currentProjects } from "./manageproject";

const createproject = function (e) {
  e.preventDefault();
  const inputname = document.querySelector(`#name`);
  if (inputname.value === "") return;

  addnewProject(inputname.value, []);
  loadNav(currentProjects);
  createprojRemove();
};
const createprojActive = function () {
  const createform = document.querySelector(`#createproj`);
  const gray = document.querySelector(`#grayout`);
  createform.classList.add(`active`);
  gray.classList.add(`active`);
  gray.addEventListener(`click`, function (e) {
    createprojRemove(createform, gray);
  });
};
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
