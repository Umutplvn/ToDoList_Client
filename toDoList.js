const addBtn = document.getElementById("add");

const ul = document.createElement("ul");
const p = document.querySelector(".p");
p.after(ul);

ul.className = "ul";



addBtn.addEventListener("click", () => {
  if (!input.value) {
    alert("Don't you have anything to do?");
  } else {
    const input = document.getElementById("input");
    const text = document.createTextNode(input.value);
    const li = document.createElement("li");
    li.className = "li";
    
    li.appendChild(text);
    ul.appendChild(li);
    input.value = "";
    input.focus();

  }
});

document.querySelector("#input").addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    addBtn.click();
  }
});

const sil=document.querySelector("#delete")


sil.addEventListener("click",()=>{
    al = ul.firstElementChild
    al.remove()
  })

const body = document.querySelector("body")
console.log(body);

document.querySelector("#input").addEventListener("keydown", (e)=>{
    al = ul.firstElementChild
    if(e.key=="Backspace"){
        if(!al){
            alert("There is nothing to delete!")
        }else{
         sil.click();
         }
 }})

 
