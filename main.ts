input.onButtonPressed(Button.A, function () {
    JUGADORXD.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    JUGADORXD.change(LedSpriteProperty.X, 1)
})
let OBJ: game.LedSprite = null
let JUGADORXD: game.LedSprite = null
JUGADORXD = game.createSprite(2, 4)
basic.forever(function () {
    basic.pause(randint(1000, 1500))
    OBJ = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(200)
        OBJ.change(LedSpriteProperty.Y, 1)
    }
    if (OBJ.isTouching(JUGADORXD)) {
        game.gameOver()
    }
    basic.pause(200)
    game.addScore(1)
    OBJ.delete()
})
