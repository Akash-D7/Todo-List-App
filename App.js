var input = document.querySelector(".textplace");
var but = document.querySelector(".but");
var list = document.querySelector(".task_list");
var currentEditLi=null;
var isGreen=true;

but.addEventListener('click', call);


function call() {
    if (input.value === '') {
        alert("Please Enter The Text");
    } else { 
        if(currentEditLi){
            currentEditLi.querySelector('span').innerText=input.value
            currentEditLi=null;
            input.value = ''; 
        }
        else{
        let li = document.createElement("li");
        li.style.color = "#fff";
        // li.style.backgroundColor = "#8570d8";
        li.style.display = "flex"; 
        li.style.justifyContent = "space-between";
        li.style.alignItems = "center"; 
        li.style.padding = "10px"; 

        li.innerHTML = `<span>${input.value}</span><button class='tickbutton' onclick='green(event)'><i class="fa-solid fa-circle-check"></i><button class='editbutton' onclick='edit(event)'>Edit</button></button><button onclick='deletelist(event)' class='eee'>Delete</button>`;
        list.appendChild(li);
        input.value = ''; 
    }
}
}


function green(event){
    // const li_tag = event.target.closest('li');
    // if (isGreen) {
    //     li_tag.style.backgroundColor = "rgb(1, 184, 1)"; // Green
    // } 
    // else {
    //     li_tag.style.backgroundColor = "#5837dc"; // Orange
    // }
    // isGreen = !isGreen;
    
    event.target.parentElement.style.backgroundColor = "rgb(1, 184, 1)";

    event.target.parentElement.parentElement.style.backgroundColor = "rgb(1, 184, 1)";
}
function deletelist(event) {
    event.target.parentElement.remove();
    
}
function edit(event){
    const li_tag= event.target.closest('li');
    // console.log(li_tag)
    const spanText=li_tag.querySelector('span').innerText
    input.value=spanText
   currentEditLi=li_tag

}
