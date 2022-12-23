import { currentProjects } from "./createproject";
import Task from "./task";

const addnewTask = function (index, title, description, priority, itsdone) {
  currentProjects[index].task.push(
    new Task(title, description, priority, itsdone)
  );
};

export default addnewTask;
