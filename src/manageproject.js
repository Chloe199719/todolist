import { loadNav } from "./loadProject";
import Project from "./projects";

let currentProjects = []; // Stores Projects and Tasks

// Calling this function Adds a new Object to the array
const addnewProject = function (name, task) {
  currentProjects.push(new Project(name, task));
  stringfy();
};

//  Calling this functions removes a certain object from the array
const removeProject = function (index) {
  currentProjects.splice(index, 1);
  loadNav(currentProjects);
  stringfy();
};
//  Deprecated function
const updateName = function (index, value) {
  currentProjects[index].name = value;
};

//  Deprecated function
const updateDesc = function (index, value) {
  currentProjects[index].desc = value;
};

//  Deprecated function
const updatedueDate = function (index, value) {
  currentProjects[index].dueDate = value;
};

//  Deprecated function
const updatePriority = function (index, value) {
  currentProjects[index].priority = value;
};

//  Saves the Entire Array of Objects in your browser local storage
const stringfy = function () {
  let test1 = JSON.stringify(currentProjects);
  window.localStorage.setItem(`currentProjects`, test1);
};

// Retrives Data from your browser Local Storage
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
