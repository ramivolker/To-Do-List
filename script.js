checkboxes = document.querySelectorAll(".checkbox");
checkboxes = Array.from(checkboxes);
console.log(checkboxes);

checkboxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log(box.parentElement);
    })
});
 
