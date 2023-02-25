basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    led.plot(randint(0, 4), randint(0, 4))
    basic.pause(100)
    led.unplot(randint(0, 4), randint(0, 4))
    basic.pause(100)
})
