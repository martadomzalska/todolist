const list = document.querySelector(".list");
const form = document.querySelector("form");
const input = form.querySelector("input");
const button = form.querySelector("button");

form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  console.log(input.value);
  if (input.value.trim().length === 0) {
    Notiflix.Notify.failure("You have to write sth");
  } else {
    list.insertAdjacentHTML(
      "afterbegin",
      `<li class="list__element">
         <p> ${input.value} </p>
        <div>
        <button class="done" type="button"></button>  
        <button class="remove" type="button"></button>  
        </div>
    </li>`
    );
  }

  form.reset();
});

list.addEventListener("click", (event) => {
  const targetEl = event.target;
  const currTar = event.currentTarget;
  const task = event.target.parentNode.previousElementSibling;
  const listElement = event.target.parentNode.parentNode;

  if (targetEl.nodeName == "BUTTON" && targetEl.classList.contains("done")) {
    const checked = document.querySelector(".done");
    console.log(checked);
    targetEl.classList.toggle("checked");
    task.classList.toggle("done-task");
    if (targetEl.classList.contains("checked")) {
      Notiflix.Notify.success("Goooooooood Job!");
    }
  }
  if (targetEl.nodeName == "BUTTON" && targetEl.classList.contains("remove")) {
    listElement.remove();
  }
});
