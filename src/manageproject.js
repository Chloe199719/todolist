import { loadNav } from "./loadProject";
import Project from "./projects";

let currentProjects = [];

const addnewProject = function (name, task) {
  currentProjects.push(new Project(name, task));
  stringfy();
};

const removeProject = function (index) {
  currentProjects.splice(index, 1);
  loadNav(currentProjects);
  stringfy();
};

const updateName = function (index, value) {
  currentProjects[index].name = value;
};

const updateDesc = function (index, value) {
  currentProjects[index].desc = value;
};
const updatedueDate = function (index, value) {
  currentProjects[index].dueDate = value;
};
const updatePriority = function (index, value) {
  currentProjects[index].priority = value;
};

const stringfy = function () {
  let test1 = JSON.stringify(currentProjects);
  window.localStorage.setItem(`currentProjects`, test1);
};

const retriveStorage = function () {
  if (window.localStorage.currentProjects !== undefined) {
    let tempproj = window.localStorage.currentProjects;
    let tempproj2 = JSON.parse(tempproj);
    currentProjects = tempproj2;
  } else {
    addnewProject(`Inbox`, []);
  }
};
export {
  addnewProject,
  removeProject,
  updateName,
  updateDesc,
  updatedueDate,
  updatePriority,
  currentProjects,
  stringfy,
  retriveStorage,
};
