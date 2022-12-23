import _ from "lodash";
import "./style.css";
import Project from "./projects";
import { addnewProject, currentProjects } from "./createproject";
import { createproject } from "./DomMani";
import addnewTask from "./createtask";

const createprojectbtn = document.querySelector(`#createProject`);
const testbtn = document.querySelector(`#testbtn`);
createprojectbtn.addEventListener(`click`, createproject);

testbtn.addEventListener(`click`, function (e) {
  console.log(currentProjects);
});
addnewProject(`Todo List`, `Make  the Tododo List`, "3days", true, []);
addnewTask(0, `Test task`, `This is a Test task desc`, false, false);
// addnewProject(`Todo List`, `Make  the Tododo List`, "3days", true, {});
// console.log(currentProjects);
// const e = [];
// e.push(p);
// console.log(e);
