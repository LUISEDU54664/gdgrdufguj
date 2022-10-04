input.onButtonPressed(Button.A, function () {
    basic.showString("" + (total + 1))
})
let distancia = 0
let total = 0
if (total == 0) {
    distancia = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    basic.showNumber(total)
}
basic.forever(function () {
	
})
