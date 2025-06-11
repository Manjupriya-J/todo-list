


const but1=document.getElementById("add");

const but2=document.getElementById("delete");
const ul = document.getElementById("taskList");
but1.addEventListener('click',()=>{
    const input=document.getElementById("input");
     const divi=document.getElementById("container");
   
 
     const taskText = input.value.trim();
  
      
    const li=document.createElement('li');
     li.textContent=taskText;
   ul.appendChild(li);
   

    divi.appendChild(ul);

    input.value=" ";

})
but2.addEventListener('click', () => {
    if (ul.lastChild) {
        ul.removeChild(ul.lastChild);  // Remove the last task
    }
})
