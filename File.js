let navbar = document.querySelector("nav");
let muneIcon = document.querySelector(".fa-bars");

muneIcon.onclick = () => {
   navbar.classList.toggle("active")
}