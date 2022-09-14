document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector('#create-task-form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    buildToDo(e.target.new_task_description.value)
    form.reset()
  })
});
 function buildToDo(todo){
  let list = document.createElement('li')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = `x`
  list.textContent = `${todo}`
  list.appendChild(btn)
  console.log(list)
  document.querySelector('#tasks').appendChild(list)
 }

 function handleDelete(e){
  e.target.parentNode.remove()
 }