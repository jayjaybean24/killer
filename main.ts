namespace SpriteKind {
    export const killer = SpriteKind.create()
    export const suvivor1 = SpriteKind.create()
    export const suvivor2 = SpriteKind.create()
    export const suvivor3 = SpriteKind.create()
    export const suvivor4 = SpriteKind.create()
}
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, SpriteKind.Player))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    `, SpriteKind.Player))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three), sprites.create(img`
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    `, SpriteKind.Player))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four), sprites.create(img`
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    `, SpriteKind.Player))
tiles.setCurrentTilemap(tilemap`level1`)
if (randint(1, 4) == 1) {
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setKind(SpriteKind.killer)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setKind(SpriteKind.suvivor2)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).setKind(SpriteKind.suvivor3)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)).setKind(SpriteKind.suvivor4)
}
if (randint(1, 4) == 2) {
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setKind(SpriteKind.suvivor1)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setKind(SpriteKind.killer)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).setKind(SpriteKind.suvivor3)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)).setKind(SpriteKind.suvivor4)
}
if (randint(1, 4) == 3) {
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setKind(SpriteKind.suvivor1)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setKind(SpriteKind.suvivor2)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).setKind(SpriteKind.killer)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)).setKind(SpriteKind.suvivor4)
}
if (randint(1, 4) == 4) {
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setKind(SpriteKind.suvivor1)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setKind(SpriteKind.suvivor2)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).setKind(SpriteKind.suvivor3)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)).setKind(SpriteKind.killer)
}
