function changeDiv(ev) {
    ev.preventDefault()
    const f = ev.target
    const name = f.personName.value
    const age = f.personAge.value
    const color = f.favoriteColor.value
    const div = document.querySelector('#stats')

    const p = document.createElement('p')
    p.textContent = `${name} ${age}`
    p.style.color = color

    div.appendChild(p)

    //div.innerHTML = `${name} ${age}`
}

const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', changeDiv)