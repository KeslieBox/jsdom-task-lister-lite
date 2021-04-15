document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const input = document.getElementById('new-task-description')
  const form = document.getElementById('create-task-form')
  form.addEventListener("submit", handleSubmit)

});

function handleSubmit(e) {
  e.preventDefault()
  taskList(e.target.children[1].value)
  e.target.reset()
}

function taskList(input) {
  const li = document.createElement("li")
  const div = document.getElementById("list")
  li.innerText = input
  div.append(li)
}
