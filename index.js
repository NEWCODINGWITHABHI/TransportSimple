



const menu=document.querySelector("#menu");
const cross=document.querySelector("#cross");
const nav=document.querySelector("nav");

let toggle=true;

menu.addEventListener("click",()=>{
  navToggle();
})
cross.addEventListener("click",()=>{
   navToggle()
}) 


function navToggle(){
if (toggle) {
  nav.classList.add("nav-active");
  toggle = false;
  cross.style.display = "block";
  menu.style.display = "none";
} else {
  nav.classList.remove("nav-active");
  toggle = true;
  cross.style.display = "none";
  menu.style.display = "block";
} 
}
