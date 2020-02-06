let awakeMode: boolean = true
input.onButtonPressed(Button.A, function () {
    awakeMode = false
})
input.onButtonPressed(Button.B, function () {
    awakeMode = true

})
basic.forever(function () {
    if (awakeMode) {

        basic.showString("AWAKE")

    } else {

        basic.showString("Sleep!")
    }
})
