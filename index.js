const form = document.getElementById("newtaskform");
const input = document.getElementById("newtaskinput");
const list_el = document.getElementById("tasks");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const task = input.value;
  if (!task) {
    alert("enter the task")
  } 
  
  else {
    const task_el = document.createElement("div");
    task_el.classList.add("task");

    const task_con_el = document.createElement("div");
    task_el.classList.add("content");
    task_con_el.innerHTML = task;

    task_el.appendChild(task_con_el);

    const task_input_el = document.createElement("input");
    task_input_el.classList.add("text");
    task_input_el.type = "text";

    task_input_el.setAttribute("readonly", "readonly");
    task_con_el.appendChild(task_input_el);

    const task_action_el = document.createElement("div");
    task_action_el.classList.add("actions");

    const task_edit_el = document.createElement("button");
    task_edit_el.innerHTML = "Edit";
    task_edit_el.classList.add("edit");

    const task_delete_el = document.createElement("button");
    task_delete_el.innerHTML = "Delete";
    task_delete_el.classList.add("delete");

    task_action_el.appendChild(task_edit_el);
    task_action_el.appendChild(task_delete_el);

    task_el.appendChild(task_action_el);
    list_el.appendChild(task_el);

    task_edit_el.addEventListener("click", () => {
      if (task_edit_el.innerText.toLowerCase() == "edit") {
        task_edit_el.innerText = "Save";
        task_input_el.removeAttribute("readonly");
        task_input_el.focus();
      } else {
        task_edit_el.innerText = "Edit";
        task_input_el.setAttribute("readonly", "readonly");
      }
    });

    task_delete_el.addEventListener("click", () => {
      list_el.removeChild(task_el);
    });

    input.value = "";
  }
});
