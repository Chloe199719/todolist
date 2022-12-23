import Project from "./projects";

const currentProjects = [];

const addnewProject = function (name, desc, dueDate, priority, task) {
  currentProjects.push(new Project(name, desc, dueDate, priority, task));
};

const removeProject = function (index) {
  currentProjects.splice(index, 1);
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
export {
  addnewProject,
  removeProject,
  updateName,
  updateDesc,
  updatedueDate,
  updatePriority,
  currentProjects,
};
