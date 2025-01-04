let a = 0
let B = 0
input.onButtonPressed(Button.A, function () {
    a = randint(0, 10)
    basic.showNumber(a)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(a * B)
})
input.onButtonPressed(Button.B, function () {
    B = randint(0, 10)
    basic.showNumber(B)
})
