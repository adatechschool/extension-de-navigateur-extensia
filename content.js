const input = document.querySelector("input")
const button = document.querySelector("button")
const ul = document.createElement("ul")
const card = document.getElementById("card")

card.appendChild(ul);

let taskList = []

input.addEventListener('keypress', function(event){
  if(event.key === "Enter"){
    button.click()
  }
})

button.addEventListener('click', () => {
   let userTask = input.value
    taskList.push(userTask)
    ul.innerHTML = "" // on vide la liste avant de réafficher les tâches
    input.value = ""

    taskList.forEach((task) => {
        const taskElement = document.createElement("li")
        taskElement.innerHTML = task // la tâche courante

        ul.style.listStyle = "none";
        ul.appendChild(taskElement)
  })  
   console.log(taskList)
})

