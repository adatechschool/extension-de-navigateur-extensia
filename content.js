const card = document.getElementById("card")
const input = document.querySelector("input")
const button = document.querySelector("button")
const containerList = document.getElementById("containerList")
const ul = document.createElement("ul")
const date = document.getElementById("date")
<<<<<<< HEAD
const trashButtonWhite = document.querySelector('.trashButton')

=======
>>>>>>> a73f5de (add content.js)

button.innerHTML = "Valider"
containerList.appendChild(ul);

let uppercaseDate =  new Date().toLocaleDateString('fr-FR',{
   weekday: 'long',
   day: 'numeric',
   month: 'long',
});

// Le premier caractère de la date du jour passe en majuscule
uppercaseDate = uppercaseDate.charAt(0).toUpperCase() + uppercaseDate.slice(1);
date.innerHTML = uppercaseDate;

let taskList = []

input.addEventListener('keypress', function(event){
   if(event.key === "Enter"){
     button.click()
   }
 })

button.addEventListener('click', () => {
   let userTask = input.value

   if (!userTask) {
      alert("Veuillez saisir une tâche 😉 !");
      return;
  }

    taskList.push(userTask)
    // ul.innerHTML = ""; // on vide la liste avant de réafficher les tâches
    input.value = "";
    const listElement = document.createElement("li")
    const label = document.createElement("label")
    const trashButton = document.createElement("button")
    const inputCheckbox = document.createElement("input")

    taskList.forEach((task) => {
        trashButton.classList.add("trashButton")
        inputCheckbox.classList.add("taskUnChecked")
        inputCheckbox.type = "checkbox"

        inputCheckbox.addEventListener("change", (event) => {
         // on vérifie si les tâches sont cochées ou non
         if(inputCheckbox.checked){
            label.style.textDecorationLine = "line-through"               
            label.style.color = "#8f8f9d"              
         } else {
            label.style.color = "black"              
            label.style.textDecorationLine = "none"               
         }
         console.log(inputCheckbox.checked);

      });      

        label.innerText = task // affiche la tâche courante

        ul.style.listStyle = "none";
        ul.appendChild(listElement)
        listElement.appendChild(inputCheckbox)
        listElement.appendChild(label)
        listElement.appendChild(trashButton)
   })  
   console.log(taskList);
});


