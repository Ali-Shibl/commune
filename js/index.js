const iconMenu=document.querySelector('.iconMenu')
const list=document.querySelector('nav ul')

iconMenu.addEventListener('click',()=>{
    list.classList.toggle('list')
})