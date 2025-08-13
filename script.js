const input_box=document.getElementById("input-box");
const List_Container=document.getElementById("list-container"); 
const button=document.getElementById("button");
button.addEventListener("click", ()=> {
if(input_box.value === '') {
   alert("Please write something");
}
else{
    let li=document.createElement("li");
    li.textContent = input_box.value; 
    List_Container.appendChild(li);
    input_box.value = "";
    let span=document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    saveData();
}
});
List_Container.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else{
        if(e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
            saveData();
        }
    }
},false);
function saveData(){
    localStorage.setItem("data", List_Container.innerHTML);
}
function showTask()
{
    List_Container.innerHTML = localStorage.getItem("data");   
}
showTask();