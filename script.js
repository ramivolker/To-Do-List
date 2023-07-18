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

siCreated = document.createElement("DIV");
secondaryInfo.appendChild(siCreated);
siCreated.classList.add("si-created");

siFinished = document.createElement("DIV");
secondaryInfo.appendChild(siFinished);
siFinished.classList.add("si-finished");

siSpan1 = document.createElement("SPAN");
siCreated.appendChild(siSpan1);
siSpan1.classList.add("day");
let dia = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
siSpan1.textContent = dia[fecha.getDay()];

siSpan2 = document.createElement("SPAN");
siCreated.appendChild(siSpan2);
siSpan2.classList.add("fechaEntera");
siSpan2.textContent = fecha.toLocaleDateString();

siSpan3 = document.createElement("SPAN");
siCreated.appendChild(siSpan3);
siSpan3.classList.add("hora");
texto1 = fecha.toLocaleTimeString();
texto1 = texto1.toString();
texto1 = texto1.slice(0,5);
if(fecha.getHours().toString().length == 1){
    texto1 = texto1.slice(0,4);
}
siSpan3.textContent = texto1;





taskIcon2.addEventListener("click",(e)=>{
        e.target.parentElement.parentElement.remove();
    });

 taskIcon1.addEventListener("click",(e)=>{
        finishTask(e.target.parentElement);
        e.target.parentElement.parentElement.remove();
    });
}

/////////////////////////////////////////////////////////////////////
// TERMINAR TAREA

function finishTask(tarea){
    tareaText = tarea.textContent;
    tareaText = tareaText.trim();

checkeds = document.querySelector(".checkeds");

taskTemp = document.createElement("DIV");
checkeds.prepend(taskTemp);
taskTemp.classList.add("checked-container");

primaryInfo1 = document.createElement("DIV");
primaryInfo1.classList.add("primaryInfo")
taskTemp.prepend(primaryInfo1);

taskIcon11 = document.createElement("I");
primaryInfo1.appendChild(taskIcon11);
taskIcon11.classList.add("fa-sharp","fa-solid","fa-circle-check","checkedbox");

taskPara = document.createElement("P");
primaryInfo1.appendChild(taskPara);
taskPara.innerHTML = tareaText;
taskPara.classList.add("checked");

taskIcon22 = document.createElement("I");
primaryInfo1.appendChild(taskIcon22);
taskIcon22.classList.add("fa-solid","fa-trash-can","trash-can");

secondaryInfo1 = document.createElement("DIV");
secondaryInfo1.classList.add("secondaryInfo");
taskTemp.appendChild(secondaryInfo1);
/////

siCreated = document.createElement("DIV");
secondaryInfo1.appendChild(siCreated);
siCreated.classList.add("si-created");

siFinished = document.createElement("DIV");
secondaryInfo1.appendChild(siFinished);
siFinished.classList.add("si-finished");

siSpan1 = document.createElement("SPAN");
siCreated.appendChild(siSpan1);
siSpan1.classList.add("day");
siSpan1.textContent = tarea.nextElementSibling.children[0].children[0].textContent;

siSpan2 = document.createElement("SPAN");
siCreated.appendChild(siSpan2);
siSpan2.classList.add("fechaEntera");
siSpan2.textContent = tarea.nextElementSibling.children[0].children[1].textContent;

siSpan3 = document.createElement("SPAN");
siCreated.appendChild(siSpan3);
siSpan3.classList.add("hora");
siSpan3.textContent = tarea.nextElementSibling.children[0].children[2].textContent;
/////

fiSpanFinished = document.createElement("SPAN");
siFinished.appendChild(fiSpanFinished);
fiSpanFinished.textContent = "Finished:";
fiSpanFinished.classList.add("finished");

finFecha = new Date();

fiSpan1 = document.createElement("SPAN");
siFinished.appendChild(fiSpan1);
let dia = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
fiSpan1.textContent = dia[finFecha.getDay()];

fiSpan2 = document.createElement("SPAN");
siFinished.appendChild(fiSpan2);
fiSpan2.textContent = finFecha.toLocaleDateString();

fiSpan3 = document.createElement("SPAN");
siFinished.appendChild(fiSpan3);
texto1 = finFecha.toLocaleTimeString();
texto1 = texto1.toString();
texto1 = texto1.slice(0,5);
if(fecha.getHours().toString().length == 1){
    texto1 = texto1.slice(0,4);
}
fiSpan3.textContent = texto1;




        taskIcon11.addEventListener("click",(e)=>{
            unfinishTask(e.target.parentElement);
            e.target.parentElement.parentElement.remove();
        });

        taskIcon22.addEventListener("click",(e)=>{
            e.target.parentElement.parentElement.remove();
        });
}

/////////////////////////////////////////////////////////////////////
// EVENT LISTENER DEL ENTER
console.log(document.querySelector(".task-input"));
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
    tareaText = tarea.textContent
    tareaText = tareaText.trim();

checkeds = document.querySelector(".tasks");

taskTemp = document.createElement("DIV");
checkeds.prepend(taskTemp);
taskTemp.classList.add("checked-container");

primaryInfo11 = document.createElement("DIV");
primaryInfo11.classList.add("primaryInfo")
taskTemp.prepend(primaryInfo11);

taskIcon11 = document.createElement("I");
primaryInfo11.appendChild(taskIcon11);
taskIcon11.classList.add("fa-regular","fa-circle","checkbox");

taskPara = document.createElement("P");
primaryInfo11.appendChild(taskPara);
taskPara.innerHTML = tareaText;
taskPara.classList.add("checked");

taskIcon22 = document.createElement("I");
primaryInfo11.appendChild(taskIcon22);
taskIcon22.classList.add("fa-solid","fa-trash-can","trash-can");
/////
secondaryInfo11 = document.createElement("DIV");
secondaryInfo11.classList.add("secondaryInfo");
taskTemp.appendChild(secondaryInfo11);

////

siCreated = document.createElement("DIV");
secondaryInfo11.appendChild(siCreated);
siCreated.classList.add("si-created");

siFinished = document.createElement("DIV");
secondaryInfo11.appendChild(siFinished);
siFinished.classList.add("si-finished");

siSpan1 = document.createElement("SPAN");
siCreated.appendChild(siSpan1);
siSpan1.classList.add("day");
siSpan1.textContent = tarea.nextElementSibling.children[0].children[0].textContent;

siSpan2 = document.createElement("SPAN");
siCreated.appendChild(siSpan2);
siSpan2.classList.add("fechaEntera");
siSpan2.textContent = tarea.nextElementSibling.children[0].children[1].textContent;

siSpan3 = document.createElement("SPAN");
siCreated.appendChild(siSpan3);
siSpan3.classList.add("hora");
siSpan3.textContent = tarea.nextElementSibling.children[0].children[2].textContent;





taskIcon11.addEventListener("click",(e)=>{
    finishTask(e.target.parentElement);
    e.target.parentElement.parentElement.remove();
});

taskIcon22.addEventListener("click",(e)=>{
    e.target.parentElement.parentElement.remove();
});
}

/////////////////////////////////////////////////////////////////////

var fecha = new Date();

dia = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];

document.querySelector(".task-input").textContent = "Write your pending tasks here";
document.querySelector(".task-input").style.color = "#666";
document.querySelector(".task-input").addEventListener("focus",()=>{
    document.querySelector(".task-input").textContent = "";
    document.querySelector(".task-input").style.color = "#111";
});

document.querySelector(".task-input").addEventListener("blur",()=>{
    document.querySelector(".task-input").textContent = "Write your pending tasks here";
    document.querySelector(".task-input").style.color = "#666";
});