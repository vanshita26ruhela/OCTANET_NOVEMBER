const item=document.querySelector("#item")
const todowork= document.querySelector("#to-do-work")

item.addEventListener(
    "keyup",
    function(Event){
        if(Event.key=="Enter"){
            addToDo(this.value)
            this.value=""
        }
    }
)

const addToDo = (item) => {
    const listItem=document.createElement("li");
    listItem.innerHTML=`
     ${item}
    <i class="fas fa-times"></i>
    `;
    listItem.addEventListener(
        "click",
        function(){
            this.classList.toggle("done");
        }
    )
   listItem.querySelector("i").addEventListener(
    "click",
    function(){
        listItem.remove()
    }
   )
  todowork.appendChild(listItem)
}