let nrButtons

function generateButtons () {
    nrButtons = document.getElementById('nrButtons').value
    const paragraph = document.getElementById('generatedButtons')
    let copyNrButtons = nrButtons;
    winnerButton = getButton()
    if (nrButtons < 1) {
        alert('TOO SMALL NUMBER!')
    } else {
        paragraph.innerHTML = '<p>Choose one of the buttons below</p>'
        let i = 1
        while (copyNrButtons) {
            paragraph.innerHTML += `<button type="button" class="btn btn-primary" onclick="winner(${i})" >Button ${i}</button>`
            --copyNrButtons
            ++i
        }
    }
}

function getButton() {
    return Math.floor(Math.random() * nrButtons + 1)
}

let winnerButton

function winner(val) {
    if (val === winnerButton) {
        alert('Good!')
        winnerButton = getButton()
    } else {
        alert('Keep trying!')
    }
}