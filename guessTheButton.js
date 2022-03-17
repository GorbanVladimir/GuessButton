function getButton() {
	return Math.floor(Math.random() * 3 + 1)
}
let winnerButton = getButton()
function winner(val) {
	if (val === winnerButton) {
		alert('Good!')
		winnerButton = getButton()
	} else {
		alert('Keep trying!')
	}
}
