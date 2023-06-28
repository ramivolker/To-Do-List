checkboxes = document.querySelectorAll(".checkbox");
checkboxes = Array.from(checkboxes);

//////////////////////////////////////////////////////////////////////
// CREAR TAREA 

function createTask(tarea){
    tarea = tarea.trim();
    if(tarea == ""){
        return;
    }

tasks = document.querySelector(".tasks");

taskTemp = document.createElement("DIV");
tasks.prepend(taskTemp);
taskTemp.classList.add("task-container");

primaryInfo = document.createElement("DIV");
primaryInfo.classList.add("primaryInfo")
taskTemp.prepend(primaryInfo);

taskIcon1 = document.createElement("I");
primaryInfo.appendChild(taskIcon1);
taskIcon1.classList.add("fa-regular","fa-circle","checkbox");

taskPara = document.createElement("P");
primaryInfo.appendChild(taskPara);
taskPara.innerHTML = tarea;
taskPara.classList.add("task");

taskIcon2 = document.createElement("I");
primaryInfo.appendChild(taskIcon2);
taskIcon2.classList.add("fa-solid","fa-trash-can","trash-can");


secondaryInfo = document.createElement("DIV");
secondaryInfo.classList.add("secondaryInfo");
taskTemp.appendChild(secondaryInfo);

let fecha = new Date();

siSpan1 = document.createElement("SPAN");
secondaryInfo.appendChild(siSpan1);
siSpan1.classList.add("day");
let dia = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
siSpan1.textContent = dia[fecha.getDay()];

siSpan2 = document.createElement("SPAN");
secondaryInfo.appendChild(siSpan2);
siSpan2.classList.add("fechaEntera");
siSpan2.textContent = fecha.toLocaleDateString();

siSpan3 = document.createElement("SPAN");
secondaryInfo.appendChild(siSpan3);
siSpan3.classList.add("hora");
texto = fecha.getHours() + ":" + fecha.getMinutes();
siSpan3.textContent = texto;



taskIcon2.addEventListener("click",(e)=>{
        e.target.parentElement.parentElement.remove();
    });

 taskIcon1.addEventListener("click",(e)=>{
        console.log(e.target);
        console.log(e.target.parentElement.textContent);
        finishTask(e.target.parentElement.textContent);
        e.target.parentElement.parentElement.remove();
    });
}

/////////////////////////////////////////////////////////////////////
// TERMINAR TAREA

function finishTask(tarea){
    tarea = tarea.trim();

checkeds = document.querySelector(".checkeds");

taskTemp = document.createElement("DIV");
checkeds.prepend(taskTemp);
taskTemp.classList.add("checked-container");

taskIcon11 = document.createElement("I");
taskTemp.appendChild(taskIcon11);
taskIcon11.classList.add("fa-sharp","fa-solid","fa-circle-check","checkedbox");

taskPara = document.createElement("P");
taskTemp.appendChild(taskPara);
taskPara.innerHTML = tarea;
taskPara.classList.add("checked");

taskIcon22 = document.createElement("I");
taskTemp.appendChild(taskIcon22);
taskIcon22.classList.add("fa-solid","fa-trash-can","trash-can");


        taskIcon11.addEventListener("click",(e)=>{
            console.log(e.target.parentElement.textContent);
            unfinishTask(e.target.parentElement.textContent);
            e.target.parentElement.parentElement.remove();
        });

        taskIcon22.addEventListener("click",(e)=>{
            e.target.parentElement.parentElement.remove();
        });
}

/////////////////////////////////////////////////////////////////////
// EVENT LISTENER DEL ENTER

document.querySelector(".task-input").addEventListener('keypress', function enterEL(e){
    if (e.key === 'Enter') {
        e.preventDefault();
        createTask(plusBtn.previousElementSibling.textContent);
        plusBtn.previousElementSibling.textContent = "";
    }
});


/////////////////////////////////////////////////////////////////////
// EVENT LISTENER DEL BOTON DE MÁS EN EL INPUT

plusBtn = document.getElementById("plus-circle");
plusBtn.addEventListener("click",()=>{
    createTask(plusBtn.previousElementSibling.innerHTML);
    plusBtn.previousElementSibling.innerHTML = "";
})
/////////////////////////////////////////////////////////////////////
// BORRAR TAREAS - EVENT LISTENER DEL TRASH CAN

function trashCansEL(){
trashCans = document.querySelectorAll(".trash-can");
trashCans.forEach((icon)=>{
    icon.addEventListener("click",()=>{
        icon.parentElement.parentElement.remove();
    })
});
}
//trashCansEL();
/////////////////////////////////////////////////////////////////////
// EVENT LISTENER CHECKBOX AL FINALIZAR TAREA

function checkboxsEL(){
    trashCans = document.querySelectorAll(".checkbox");
    trashCans.forEach((icon)=>{
        icon.addEventListener("click",()=>{
            console.log(icon.parentElement.textContent);
            finishTask(icon.parentElement.textContent);
            icon.parentElement.parentElement.remove();
        })
    });
    }
//checkboxsEL();
/////////////////////////////////////////////////////////////////////

function checkedsEL(){
    checkedBoxes = document.querySelectorAll(".checkedbox");
    checkedBoxes.forEach((icon)=>{
        icon.addEventListener("click",()=>{
            console.log(icon.parentElement.textContent);
            unfinishTask(icon.parentElement.textContent);
            icon.parentElement.parent.remove();
        })
    });
    }
//checkedsEL();

/////////////////////////////////////////////////////////////////////
// DEVOLVER TAREA

function unfinishTask(tarea){
    tarea = tarea.trim();

checkeds = document.querySelector(".tasks");

taskTemp = document.createElement("DIV");
checkeds.prepend(taskTemp);
taskTemp.classList.add("checked-container");

taskIcon11 = document.createElement("I");
taskTemp.appendChild(taskIcon11);
taskIcon11.classList.add("fa-regular","fa-circle","checkbox");

taskPara = document.createElement("P");
taskTemp.appendChild(taskPara);
taskPara.innerHTML = tarea;
taskPara.classList.add("checked");

taskIcon22 = document.createElement("I");
taskTemp.appendChild(taskIcon22);
taskIcon22.classList.add("fa-solid","fa-trash-can","trash-can");

taskIcon11.addEventListener("click",(e)=>{
    console.log(e.target);
    console.log(e.target.parentElement.textContent);
    finishTask(e.target.parentElement.textContent);
    e.target.parentElement.parentElement.remove();
});

taskIcon22.addEventListener("click",(e)=>{
    e.target.parentElement.parentElement.remove();
});
}

/////////////////////////////////////////////////////////////////////

var fecha = new Date();
console.log(fecha);

dia = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
console.log(dia[fecha.getDay()]);