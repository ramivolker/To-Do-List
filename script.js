checkboxes = document.querySelectorAll(".checkbox");
checkboxes = Array.from(checkboxes);
console.log(checkboxes);

//////////////////////////////////////////////////////////////////////

function createTask(tarea){
    tarea = tarea.trim();
    if(tarea == ""){
        return;
    }

tasks = document.querySelector(".tasks");

taskTemp = document.createElement("DIV");
tasks.prepend(taskTemp);
taskTemp.classList.add("task-container");

taskIcon1 = document.createElement("I");
taskTemp.appendChild(taskIcon1);
taskIcon1.classList.add("fa-regular","fa-circle","checkbox");

taskPara = document.createElement("P");
taskTemp.appendChild(taskPara);
taskPara.innerHTML = tarea;
taskPara.classList.add("task");

taskIcon2 = document.createElement("I");
taskTemp.appendChild(taskIcon2);
taskIcon2.classList.add("fa-solid","fa-trash-can","trash-can");
}

document.querySelector(".task-input").addEventListener('keypress', function enterEL(e){
    if (e.key === 'Enter') {
        e.preventDefault();
        createTask(plusBtn.previousElementSibling.textContent);
        plusBtn.previousElementSibling.textContent = "";
        document.querySelector(".task-input").removeEventListener("click",enterEL());
    }
});

/////////////////////////////////////////////////////////////////////
plusBtn = document.getElementById("plus-circle");
plusBtn.addEventListener("click",()=>{
    createTask(plusBtn.previousElementSibling.innerHTML);
    plusBtn.previousElementSibling.innerHTML = "";
})
/////////////////////////////////////////////////////////////////////

function trashCansEL(){
trashCans = document.querySelectorAll(".trash-can");
trashCans.forEach((icon)=>{
    icon.addEventListener("click",()=>{
        icon.parentElement.remove();
    })
});
}

trashCansEL();
/////////////////////////////////////////////////////////////////////


checkboxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log(box.parentElement);
    })
});


/*
        <div class="task-container">
            <i class="fa-regular fa-circle checkbox"></i>
            <p class="task">Example Task</p>
            <i class="fa-solid fa-trash-can trash-can"></i>
        </div>
*/

    document.querySelector(".task-input").textContent.trim();
