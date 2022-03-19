const pr = document.querySelectorAll('.link')
const md = document.querySelectorAll('.modal')

pr.forEach((el, index) => {
    el.addEventListener('mouseover', () => {
        //md[index].classList.remove('unvisible')
        md[index].classList.add('visible')
    })
})

pr.forEach((el, index) => {
    el.addEventListener('mouseout', () => {
        //md[index].classList.add('unvisible')
        md[index].classList.remove('visible')
    })
})