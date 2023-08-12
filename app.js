window.onload = function () {
  let container = document.getElementsByClassName("list");
  let container1 = document.getElementsByClassName("StInpCont")[0];
  const divInput = document.createElement("div");
  divInput.setAttribute("class", "styleInput");
  container1.appendChild(divInput);
  const inputAdd = document.createElement("input");
  inputAdd.setAttribute("class", "inputAdd");
  inputAdd.type = "text";
  inputAdd.placeholder = "New Task";
  divInput.appendChild(inputAdd);
  
  inputAdd.addEventListener("keydown", (event) => {
    if (event.key == "Enter" && inputAdd.value !== "") {
      const taskCont = document.createElement("div");
      taskCont.setAttribute("class", "task");
      localStorage.setItem("tasks", container[0].innerHTML)
      container[0].appendChild(taskCont);
      let inputchk = document.createElement("input");
      inputchk.setAttribute("class", "input");
      inputchk.type = "checkbox";
      taskCont.appendChild(inputchk);
      let li = document.createElement("li");
      li.innerText = inputAdd.value;
      taskCont.appendChild(li);
      const btn = document.createElement("button");
      btn.setAttribute("class", "delTask");
      btn.innerText = "X";
      taskCont.appendChild(btn);
      inputAdd.value = "";
      inputchk.addEventListener("change", () => {
        if (inputchk.checked) {
          li.classList.add("checked");
        } else {
          li.classList.remove("checked");
        }
      });
      btn.addEventListener("click", () => {
        container[0].removeChild(taskCont);
      });
    }
  });
};