const text = document.getElementById("text");
const deleteBtn = document.getElementById("dlt-btn");
const inputField = document.getElementById("input-field")

document.getElementById("input-field").addEventListener("keyup", function (event){
   if(event.target.value === "Delete"){
    deleteBtn.removeAttribute("disabled");
    alert('Hello Mister/Mis Your Delete button is enabled now');
   }
   else{
    deleteBtn.setAttribute("disabled", true)
   }
})
document.getElementById("dlt-btn").addEventListener("click", function(){
    text.style.display = "none"
    inputField.value = "";
})