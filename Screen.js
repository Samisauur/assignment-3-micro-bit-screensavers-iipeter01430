let awake: boolean = true
let screenOff: boolean = false
let gest: Gesture = Gesture.Shake
let gestures = [Gesture.Shake, Gesture.LogoDown, Gesture.TiltLeft, Gesture.TiltRight, Gesture.ThreeG]
let foos = [ss1, ss2, ss3, ss4, ss5]
let nTime: number = 45
let now: number = 0
input.onButtonPressed(Button.A, function () {
    awake = false
})

input.onButtonPressed(Button.B, function () {
    awake = true
})

input.onGesture(Gesture.Shake, function () {
    gest = Gesture.Shake
})

input.onGesture(Gesture.LogoDown, function () {
    gest = Gesture.LogoDown
})

input.onGesture(Gesture.TiltLeft, function () {
    gest = Gesture.TiltLeft
})

input.onGesture(Gesture.TiltRight, function () {
    gest = Gesture.TiltRight
})
input.onGesture(Gesture.ThreeG, function () {
    gest = Gesture.ThreeG
})
function ss1() {
    for (let i = 0; i < 1; i++) {
        led.plot(2, 2)
        led.plot(0, 0)
        led.plot(1, 1)
        led.plot(2, 2)
        led.plot(3, 3)
        led.plot(4, 4)
        basic.pause(80)
        basic.clearScreen()
        led.plot(2, 2)
    }
    for (let i = 0; i < 1; i++) {
        led.plot(2, 2)
        led.plot(2, 0)
        led.plot(2, 1)
        led.plot(2, 2)
        led.plot(2, 3)
        led.plot(2, 4)
        basic.pause(80)
        basic.clearScreen()
        led.plot(2, 2)
    }
    for (let i = 0; i < 1; i++) {
        led.plot(2, 2)
        led.plot(4, 0)
        led.plot(3, 1)
        led.plot(2, 2)
        led.plot(1, 3)
        led.plot(0, 4)
        basic.pause(80)
        basic.clearScreen()
        led.plot(2, 2)
    }
    for (let i = 0; i < 1; i++) {
        led.plot(2, 2)
        led.plot(0, 2)
        led.plot(1, 2)
        led.plot(2, 2)
        led.plot(3, 2)
        led.plot(4, 2)
        basic.pause(80)
        basic.clearScreen()
        led.plot(2, 2)
    }
}
function ss2() {
    let ups: number[] = [
        Math.randomRange(0, 4),
        Math.randomRange(0, 4),
        Math.randomRange(0, 4),
        Math.randomRange(0, 4),
        Math.randomRange(0, 4)
    ]
    for (let y = 4; y >= 0; y--) {
        for (let x = 0; x <= 4; x++) {
            if (ups[x] <= y)
                led.plot(x, y)
        }
        basic.pause(35)
    }
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= 4; x++) {

            if (ups[x] <= y)
                led.unplot(x, y)
        }
        basic.pause(55)
    }
    for (let x = 0; x <= 4; x++)
        led.unplot(x, ups[x])
}
function ss3() {
    basic.plotLeds(`
    # # . . .
    . # . . .
    # # . . .
    # . . . .
    # . . . .
    `)
    basic.pause(250)
    basic.plotLeds(`
    # # . . .
    . # . . .
    # # . . .
    # . . . .
    # . . . .
    `)
    basic.pause(250)
    basic.plotLeds(`
    # # . . .
    . # # . .
    # # . . .
    # . . . .
    # . . . .
    `)
    basic.pause(250)
    basic.plotLeds(`
    # # # . .
    . # . # .
    # # # . .
    # . . . .
    # . . . .
    `)
    basic.pause(300)
    basic.plotLeds(`
    # # . # .
    . # # . #
    # # . # .
    # . . . .
    # . . . .
    `)
    basic.pause(300)
    basic.plotLeds(`
    # # . . #
    . # . # .
    # # . . #
    # . . . .
    # . . . .
    `)
    basic.pause(300)
    basic.plotLeds(`
    # # . . .
    . # . . #
    # # . . .
    # . . . .
    # . . . .
    `)
    basic.pause(250)
    basic.clearScreen()
}
function ss4() {
    let three = [
        [0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [2, 0], [2, 1], [2, 2], [2, 3],
        [2, 4], [4, 0], [4, 1], [4, 2], [4, 3], [4, 4]
    ]
    let two = [
        [3, 4], [3, 3], [3, 2], [3, 1], [3, 0],
        [1, 4], [1, 3], [1, 2], [1, 1], [1, 0]
    ]
    for (let n = 0; n < 15; n++) {
        led.plot(three[n][0], three[n][1])
        basic.pause(30)
    }
    for (let n = 0; n < 15; n++) {
        led.unplot(three[n][0], three[n][1])
        basic.pause(60)
    }
    for (let m = 0; m < 10; m++) {
        led.plot(two[m][0], two[m][1])
        basic.pause(30)
    }
    for (let m = 0; m < 10; m++) {
        led.unplot(two[m][0], two[m][1])
        basic.pause(60)
    }
}
function ss5() {
    for (let i = 0; i < 5; i++) {
        led.plotBrightness(i, i, 100)
        led.plot(0, i)
        led.plot(2, i)
        led.plot(4, i)
        led.plot(i, 2)
        led.plot(i, 0)
        led.plot(i, 4)
        basic.pause(400)
        basic.clearScreen()
    }
}
function ticker(nTime: number, now: number) {
    if (nTime == now) {
        screenOff = true
        while (screenOff) {

        }
    }
}
basic.forever(function () {

    if (awake) {
        basic.showString("Hallo")
    }
    else {
        ticker(nTime, now)
        now++
        foos[gestures.indexOf(gest)]()

    }


})


