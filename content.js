const btnValider = document.getElementById("btnValider")
let taskAdd = []

function inputValue(){
const input = document.getElementById('task').value // pour recupérer l'input dans le html

btnValider.addEventListener('click', () =>{
document.getElementById("displayTask").innerHTML = input  // on récupère et on affiche dans la page html la valeur de l'input

taskAdd.forEach(task => {
    console.log(task)
    taskAdd.push(input)
});


//console.log(taskAdd);

})
console.log(taskAdd)
return input

}
console.log(inputValue())