const card = document.getElementById("card")
const input = document.querySelector("input")
const button = document.getElementById("btnValider")
const containerList = document.getElementById("containerList")
const ul = document.createElement("ul")
const trashButtonWhite = document.querySelector('.trashButton')
const clearContainer = document.getElementById("clearContainer") // ajout container bouton clear

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

let taskList = JSON.parse(localStorage.getItem('taskList')) || [] //
console.log("taskList", taskList)

input.addEventListener('keypress', function(event){
   if(event.key === "Enter"){
     button.click()
   }
 })

button.addEventListener('click', () => {
   let userTask = input.value.trim() 

   if (!userTask) {
      alert("Veuillez saisir une tâche 😉 !");
      input.value = ""
      return;
  }

    taskList.push(userTask)
    // ul.innerHTML = ""; // on vide la liste avant de réafficher les tâches
    input.value = "";

    localStorage.setItem("taskList", JSON.stringify(taskList))
    console.log(JSON.stringify(taskList));
 
    const listElement = document.createElement("li")
    const label = document.createElement("label")
    const trashButton = document.createElement("button")
    const inputCheckbox = document.createElement("input")

    trashButton.addEventListener('click', function(){
      listElement.remove()
     })

    taskList.forEach((task) => {
      listElement.classList.add('animate__animated', 'animate__slideInDown')
      savedTheme=localStorage.getItem('theme')
        trashButton.classList.add("trashButton")
        inputCheckbox.classList.add("taskUnChecked")
        inputCheckbox.type = "checkbox"

        inputCheckbox.addEventListener("change", (event) => {
         // on vérifie si les tâches sont cochées ou non
         if(inputCheckbox.checked){
            label.style.textDecorationLine = "line-through"               
            label.style.color = "#8f8f9d" 
            console.log("le theme est (input checked)", savedTheme)

         } else if (!inputCheckbox.checked && localStorage.getItem('theme')=== 'dark'){
         label.style.color = "#ffffff"
         label.style.textDecorationLine = "none"     
           console.log("le theme est", savedTheme)
         }else{
            label.style.textDecorationLine = "none"
             label.style.color = "#8f8f9d" 
            console.log("le theme est", savedTheme)
         }
      });

            // if( savedTheme=== 'dark'){
            //    label.style.color = "#8f8f9d"  
            // }
             /*label.style.color = "#8f8f9d"*/
            //savedtheme=== 'dark'? label.style.color = "black"  :    label.style.color = "black"         
            /*label.style.textDecorationLine = "none"*/               

        label.innerText = task // affiche la tâche courante

        ul.style.listStyle = "none";
        ul.appendChild(listElement)
        listElement.appendChild(inputCheckbox)
        listElement.appendChild(label)
        listElement.appendChild(trashButton)
   })  
   console.log(taskList);
});

// créer un bouton qui vide le localStorage
const clearButton = document.createElement('button')
clearButton.classList = 'clearButton'
clearContainer.appendChild(clearButton)

clearButton.addEventListener('click', () => {
   localStorage.clear()
   location.reload()
})

const toggleButton = document.getElementById("dark-mode-toggle")
const body= document.body

toggleButton.addEventListener('click',() => {
   
body.classList.toggle('dark-mode');

if(body.classList.contains('dark-mode')){
   localStorage.setItem('theme','dark')
}else{
   localStorage.setItem('theme','light');
}
});

let savedTheme= ''
chrome.addEventListener('load',()=>{
savedTheme=localStorage.getItem('theme');
if(savedTheme=== 'dark'){
   body.classList.add('dark-mode');
}
});





