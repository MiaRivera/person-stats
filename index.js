function changeDiv(ev) {
    ev.preventDefault()
    const f = ev.target
    const name = f.personName.value
    const age = f.personAge.value
    const color = f.favoriteColor.value
    const div = document.querySelector('#stats')

    const list = document.createElement('ul')

    const nameItem = document.createElement('li')
    nameItem.textContent = `Name: ${name}`
    list.appendChild(nameItem)

    const ageItem = document.createElement('li')
    ageItem.textContent = `Age: ${age}`
    list.appendChild(ageItem)

    const colorItem = document.createElement('li')
    colorItem.textContent = 'Favorite Color: '
    list.appendChild(colorItem)

    const colorDiv = document.createElement('div')
    colorDiv.style.backgroundColor = color
    colorDiv.style.width = '6rem'
    colorDiv.style.height = '3rem'
    colorItem.appendChild(colorDiv)

    //list.textContent = `${name} ${age}`

    div.appendChild(list)
    

    //div.innerHTML = `${name} ${age}`
}

const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', changeDiv)