let idInput = document.getElementById('id-input')
let colorInput = document.getElementById('color-input')

function setCard() {
    let card = document.getElementById(idInput.value)
    console.log(card)
    card.style.color = colorInput.value

}