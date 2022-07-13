const canvas = document.querySelector('canvas')
const cTex = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

cTex.fillRect(0,0,canvas.width, canvas.height)

class Sprite {
    constructor(position){
        this.position = position
    }

    draw(){
        cTex.fillStyle = 'red'
        cTex.fillRect(this.position.x, this.position.y, 50, 150)
    }
}

const player = new Sprite({
    x: 0,
    y: 0
})

player.draw()

const enemy = new Sprite({
    x: 974,
    y: 0
})

enemy.draw()

console.log(player)