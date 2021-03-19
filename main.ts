radio.onReceivedNumber(function (receivedNumber) {
	
})
input.onButtonPressed(Button.A, function () {
    radio.setGroup(34)
})
radio.onReceivedString(function (receivedString) {
	
})
radio.onReceivedValue(function (name, value) {
	
})
basic.forever(function () {
    basic.showLeds(`
        # # . # #
        # # # # #
        # . # . #
        # . # . #
        # . # . #
        `)
})
