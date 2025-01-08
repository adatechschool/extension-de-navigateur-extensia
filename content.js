const btnValider = document.getElementById("btnValider")

let taskAdd = []

function inputValue(){
const input = document.getElementById('task').value // pour recupérer l'input dans le html

btnValider.addEventListener('click', () =>{
document.getElementById("displayTask").innerHTML = input  // on récupère et on affiche dans la page html la valeur de l'input
taskAdd += input
console.log(taskAdd);

})
return input

}
console.log(inputValue())