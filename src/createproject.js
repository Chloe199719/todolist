import Project from "./projects";

const currentProjects = [];

const addnewProject = function (name, desc, dueDate, priority, task) {
  currentProjects.push(new Project(name, desc, dueDate, priority, task));
};

export { addnewProject, currentProjects };
