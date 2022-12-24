import { loadProject } from "./loadProject";
import { currentProjects } from "./manageproject";
import Task from "./task";

//  Creates New Task and Stores in the Project.task Array
const addnewTask = function (
  index,
  title,
  description,
  priority,
  dueDate,
  itsdone
) {
  currentProjects[index].task.push(
    new Task(title, description, priority, dueDate, itsdone)
  );
};

//  Removes Task From the Task Array
const removeTask = function (projI, taskI) {
  currentProjects[projI].task.splice(taskI, 1);
  loadProject(currentProjects[projI], projI);
};
//  Updates Its Done value
const updateItsDone = function (projI, taskI, uitsdone) {
  currentProjects[projI].task[taskI].itsdone = uitsdone;
  loadProject(currentProjects[projI], projI);
};

//  Updates  Prio Value
const updatePriority = function (projI, taskI, upriority) {
  currentProjects[projI].task[taskI].priority = upriority;
};

// Update Description
const updatedesc = function (projI, taskI, udesc) {
  currentProjects[projI].task[taskI].description = udesc;
};
// Update Title
const updateTitle = function (projI, taskI, utitle) {
  currentProjects[projI].task[taskI].title = utitle;
};

export {
  addnewTask,
  removeTask,
  updateItsDone,
  updatePriority,
  updatedesc,
  updateTitle,
};
