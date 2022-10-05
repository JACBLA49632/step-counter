input.onGesture(Gesture.Shake, function () {
    STEP += 1
    led.stopAnimation()
})
let STEP = 0
basic.forever(function () {
    basic.showNumber(STEP)
})
