import _ from "lodash";
import "./style.css";
import Project from "./projects";
import { addnewProject, currentProjects } from "./manageproject";
import { createproject } from "./DomMani";
import { addnewTask, removeTask, updateItsDone } from "./taskmanager";
import { loadProject, loadNav } from "./loadProject";

const createprojectbtn = document.querySelector(`#createProject`);
const testbtn = document.querySelector(`#testbtn`);
const testbtn1 = document.querySelector(`#testbtn1`);
const inbox = document.querySelector(`#inbox`);

inbox.addEventListener(`click`, function (e) {
  loadProject(currentProjects[0], 0);
});

createprojectbtn.addEventListener(`click`, createproject);

testbtn.addEventListener(`click`, function (e) {
  console.log(currentProjects);
});

testbtn1.addEventListener(`click`, function (e) {
  updateItsDone(0, 0, true);
});

addnewProject(`Inbox`, `Make  the Tododo List`, "3days", true, []);
addnewProject(`Todo List2`, `Make  the Tododo List`, "3days", true, []);
addnewProject(`Todo List3`, `Make  the Tododo List`, "3days", true, []);
addnewProject(`Todo List4`, `Make  the Tododo List`, "3days", true, []);
addnewTask(0, `Test task`, `This is a Test task desc`, 0, "123124", false);
addnewTask(0, `Test task`, `This is a Test task desc`, 1, "123123", true);
addnewTask(0, `Test task`, `This is a Test task desc`, 2, "123123", false);
addnewTask(2, `Test task`, `This is a Test task desc`, 2, "1233123", false);
addnewTask(1, `Test task`, `This is a Test task desc`, 0, 123123, false);
loadProject(currentProjects[0], 0);
loadNav(currentProjects);
// addnewProject(`Todo List`, `Make  the Tododo List`, "3days", true, {});
// console.log(currentProjects);
// const e = [];
// e.push(p);
// console.log(e);
