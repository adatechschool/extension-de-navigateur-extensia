const btnValider = document.getElementById("btnValider")
const input = document.getElementById("task").innerText
console.log("input", input)
const p = document.getElementById("displayTask")

const ulList = document.createElement("ul")

let listTache = []

btnValider.addEventListener('click', function() {
    console.log(document.querySelector('#task').value)

    let task= document.querySelector('#task').value

    listTache.push(task)// pour ajouter les tâches dans le tableau grace a la méthode push et à la variable taskAdd  qui stoke [] le tableau
    console.log(listTache)
    const listElement = document.createElement("li")
  listTache.forEach((task) =>{ // boucle forEach qui va servir a mettre un liste dedan ( utilise la id task)
    // const listElement = document.createElement("li")
    console.log(listElement);
    
    listElement.innerHTML = task//pour chaque tâche il crée une liste
    document.body.appendChild(listElement)
    //taskList.appendChild(input)
  })
})

// function inputValue(){
// const input = document.getElementById('task').value // pour recupérer l'input dans le html
// btnValider.addEventListener('click', () =>{
//     console.log(input)
// document.getElementById("displayTask").innerHTML = input  // on récupère et on affiche dans la page html la valeur de l'input
// taskAdd.forEach(task => {
//     console.log(task)

// })
// //console.log(taskAdd);
// })
// return input
// }
// console.log(inputValue())