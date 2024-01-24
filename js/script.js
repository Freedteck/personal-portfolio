const tabLinks = document.querySelectorAll('.tab-link')
const tabContents = document.querySelectorAll('.tab-content')
const menu = document.querySelector('.fa-bars')
const cancel = document.querySelector('.fa-xmark')
const menuBar = document.querySelector('nav ul')

tabLinks.forEach((tab, index) => {
    tab.addEventListener("click", (e) => {
        e.preventDefault()
        
        tabLinks.forEach(tab => {
            tab.classList.remove('active')
        })
        
        tabContents.forEach(tab => {
            tab.classList.remove('active')
        })
        tabContents[index].classList.add('active')
        tabLinks[index].classList.add('active')
    })
})
menu.addEventListener('click', () => {
    menuBar.classList.add('open')
})
cancel.addEventListener('click', () => {
    menuBar.classList.remove('open')
})