function changeDiv(ev) {
    ev.preventDefault()
    const f = ev.target
    const name = f.personName
    const age = f.personAge
    const color = f.favoriteColor
    

    renderList(name, age, color)
    //colorItem.appendChild(renderColor)

    //list.textContent = `${name} ${age}`

    //div.innerHTML = `${name} ${age}`
}

function renderList(name, age, color) {
    const div = document.querySelector('#stats')
    const list = document.createElement('ul')

    list.appendChild(renderListItem(name))
    list.appendChild(renderListItem(age))
    list.appendChild(renderListItem(color))
    
    div.appendChild(list)
}

const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', changeDiv)



function renderListItem(input) {
    const lineValue = input.value
    const lineItem = document.createElement('li')

    if(input.type === "text") {
        console.log("found text")
        lineItem.textContent = `Name: ${lineValue}`
    } else if (input.type === "number") {
        lineItem.textContent = `Age: ${lineValue}`
    } else if (input.type === "color") {
        lineItem.textContent = 'Favorite Color: '
        lineItem.appendChild(renderColor(lineValue))
    }

    return lineItem
}

function renderColor(color) {
    const colorDiv = document.createElement('div')

    colorDiv.style.backgroundColor = color
    colorDiv.style.width = '6rem'
    colorDiv.style.height = '3rem'

    return colorDiv
}