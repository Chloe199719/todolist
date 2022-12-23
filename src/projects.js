import _ from "lodash";

class Project {
  constructor(name, desc, dueDate, priority, task) {
    this.name = name;
    this.desc = desc;
    this.dueDate = dueDate;
    this.priority = priority;
    this.task = task;
  }
}

export default Project;
