let circuit_imprimé = 0
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    circuit_imprimé = randint(0, 2)
    if (circuit_imprimé == 1) {
        basic.showLeds(`
            . . # # .
            . # # # #
            . # # # .
            . . . . .
            . . . . .
            `)
    } else if (circuit_imprimé == 2) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
