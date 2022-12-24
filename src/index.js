import _ from "lodash";
import "./style.css";
import Project from "./projects";
import {
  addnewProject,
  currentProjects,
  retriveStorage,
  stringfy,
} from "./manageproject";
import { createprojActive, createproject } from "./DomMani";
import { addnewTask, removeTask, updateItsDone } from "./taskmanager";
import { loadProject, loadNav } from "./loadProject";
import footer from "./footer";
const body = document.querySelector(`body`);
const createprojectbtn = document.querySelector(`#createProject`);
const addprojbtn = document.querySelector(`.addproj`);
// const testbtn = document.querySelector(`#testbtn`);
// const testbtn1 = document.querySelector(`#testbtn1`);
const inbox = document.querySelector(`#inbox`);
retriveStorage();
inbox.addEventListener(`click`, function (e) {
  loadProject(currentProjects[0], 0);
});
addprojbtn.addEventListener(`click`, createprojActive);

createprojectbtn.addEventListener(`click`, createproject);

// addnewProject(`Inbox`, []);
// addnewProject(`Todo List2`, []);
// addnewProject(`Todo List3`, []);
// addnewProject(`Todo List4`, []);
// addnewTask(
//   0,
//   `Test task`,
//   `This is a Test task desc`,
//   `low`,
//   "2022-12-31",
//   false
// );
// addnewTask(
//   0,
//   `Test task`,
//   `This is a Test task desc`,
//   `high`,
//   "2022-12-31",
//   true
// );
// addnewTask(
//   0,
//   `Test task`,
//   `This is a Test task desc`,
//   `extreme`,
//   "2022-12-31",
//   false
// );
// addnewTask(
//   2,
//   `Test task`,
//   `This is a Test task desc`,
//   `extreme`,
//   "2022-12-31",
//   false
// );
// addnewTask(1, `Test task`, `This is a Test task desc`, `low`, 123123, false);
loadProject(currentProjects[0], 0);
loadNav(currentProjects);

// testbtn.addEventListener(`click`, function (e) {
//   console.log(currentProjects);
// });

// testbtn1.addEventListener(`click`, function (e) {
//   updateItsDone(0, 0, true);
// });
footer(body);
stringfy();
