radio.onReceivedString(function (receivedString) {
    if (receivedString == "0") {
        znamenka += 1
        r = (znamenka - 1) % 5
        s = Math.trunc((znamenka - 1) / 5)
        led.plot(r, s)
    }
})
let s = 0
let r = 0
let znamenka = 0
radio.setGroup(1)
znamenka = 0
r = 0
s = 0
