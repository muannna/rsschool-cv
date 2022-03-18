const pr = document.querySelectorAll('.link')
const md = document.querySelectorAll('.modal')

pr.forEach((el, index) => {
    el.addEventListener('mouseover', () => {
        md[index].classList.remove('unvisible')
    })
})

pr.forEach((el, index) => {
    el.addEventListener('mouseout', () => {
        md[index].classList.add('unvisible')
    })
})