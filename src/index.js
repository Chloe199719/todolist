import _ from "lodash";
import "./style.css";
import Project from "./projects";
import { addnewProject, currentProjects } from "./manageproject";
import { createproject } from "./DomMani";
import { addnewTask, removeTask, updateItsDone } from "./taskmanager";

const createprojectbtn = document.querySelector(`#createProject`);
const testbtn = document.querySelector(`#testbtn`);
const testbtn1 = document.querySelector(`#testbtn1`);
createprojectbtn.addEventListener(`click`, createproject);

testbtn.addEventListener(`click`, function (e) {
  console.log(currentProjects);
});

testbtn1.addEventListener(`click`, function (e) {
  updateItsDone(0, 0, true);
});

addnewProject(`Todo List`, `Make  the Tododo List`, "3days", true, []);
addnewTask(0, `Test task`, `This is a Test task desc`, false, false);
// addnewProject(`Todo List`, `Make  the Tododo List`, "3days", true, {});
// console.log(currentProjects);
// const e = [];
// e.push(p);
// console.log(e);
