checkboxes = document.querySelectorAll(".checkbox");
checkboxes = Array.from(checkboxes);
console.log(checkboxes);

//////////////////////////////////////////////////////////////////////

function createTask(tarea){

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

/////////////////////////////////////////////////////////////////////
plusBtn = document.getElementById("plus-circle");
plusBtn.addEventListener("click",()=>{
    createTask(plusBtn.previousElementSibling.innerHTML);
    plusBtn.previousElementSibling.innerHTML = "";
})
/////////////////////////////////////////////////////////////////////

trashCans = document.querySelectorAll(".trash-can");
console.log(trashCans);
trashCans.forEach((icon)=>{
    
});


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