const btnValider = document.getElementById("btnValider")
const input = document.getElementById('task').value // pour recupérer l'input dans le html
let taskAdd = []

// function inputValue(){

// //console.log(taskAdd);


// console.log(taskAdd)
// return input

// }
function getTask(){
    taskAdd.push(input)
    
}


function displayTask(){
    const test = getTask()
    
    btnValider.addEventListener('click', () =>{
        document.getElementById("displayTask").innerHTML = input  // on récupère et on affiche dans la page html la valeur de l'input
        
        test.forEach(task => {
            console.log(task)
            
        });
    
    }) 

}

console.log(inputValue())


