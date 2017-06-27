function changeDiv(ev) {
    ev.preventDefault()
    const f = ev.target
    const name = f.personName.value
    const age = f.personAge.value
    const div = document.querySelector('#stats-p')
    div.innerHTML = `${name} ${age}`
}

function changeColor(color) {
    color.preventDefault()
    const f = color.target
    const input = f.textColor.value
    const paragraph = document.querySelector('#stats-p')
    paragraph.style.color = input
}

const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', changeDiv)

const colorChange = document.querySelector('#color-choice')
colorChange.addEventListener('submit', changeColor)