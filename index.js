console.log("it worked");
function changeHeading(ev) {
    ev.preventDefault()
    const f = ev.target
    const input = f.personName.value
    const div = document.querySelector('#stats-p')
    div.innerHTML = input
}

function addInput(text) {
    text.preventDefault()
    const f = text.target
    const input = f.yourInput.value
    const div = document.querySelector('#stats-p')
    div.innerHTML += '<l> </l>' + input
}

function changeColor(color) {
    color.preventDefault()
    const f = color.target
    const input = f.textColor.value
    const paragraph = document.querySelector('#stats-p')
    paragraph.style.color = input
}

const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', changeHeading)

const formTwo = document.querySelector('#input-two')
formTwo.addEventListener('submit', addInput)

const colorChange = document.querySelector('#color-choice')
colorChange.addEventListener('submit', changeColor)