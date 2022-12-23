import { addnewProject } from "./manageproject";

const createproject = function (e) {
  e.preventDefault();
  const inputname = document.querySelector(`#name`);
  const inputdesc = document.querySelector(`#desc`);
  const inputduedate = document.querySelector(`#duedate`);
  const inputprio = document.querySelector(`#priority`);
  if (inputname.value === "" || inputdesc.value === "") return;

  addnewProject(
    inputname.value,
    inputdesc.value,
    inputduedate.value,
    inputprio.checked,
    {}
  );
};

export { createproject };
