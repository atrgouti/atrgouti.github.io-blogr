const lists = document.querySelectorAll('.lists')
const nav = document.querySelector('.nav')


lists.forEach((list) => {
    list.addEventListener('click', () => {
        list.classList.toggle('active')
    })
})





