input.onGesture(Gesture.TiltLeft, function () {
    R_最小值表現 += 50
})
input.onButtonPressed(Button.A, function () {
    mode += -1
})
function blink () {
    R_光亮度 = 1023
    pins.analogWritePin(AnalogPin.P0, R_光亮度)
    basic.pause(100)
    pins.analogWritePin(AnalogPin.P0, R_最小值表現)
    basic.pause(100)
}
input.onButtonPressed(Button.AB, function () {
    mode = 0
    pins.analogWritePin(AnalogPin.P0, 1023)
    pins.analogWritePin(AnalogPin.P1, 1023)
    pins.analogWritePin(AnalogPin.P2, 1023)
})
input.onButtonPressed(Button.B, function () {
    mode += 1
})
input.onGesture(Gesture.TiltRight, function () {
    R_最小值表現 += -50
})
let R_光亮度 = 0
let R_最小值表現 = 0
let mode = 0
mode = 1
pins.analogWritePin(AnalogPin.P0, 1023)
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    basic.showNumber(mode)
    if (mode == 1) {
        blink()
    }
})
