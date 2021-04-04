import {
    update as updateSnake,
    draw as drawSnake,
    SNAKE_SPEED, getSnakeHead, snakeIntersected
} from './snake.js'
import {
    update as updateFood,
    draw as drawFood
} from './food.js'

import { outsideGrid } from './grid.js'

let lastRenderedTime = 0;
let gameOver = false;
const gameBoard = document.getElementById('game-board')


function main(currentTime) {
    if (gameOver) {
        if (confirm('You lost. Press OK to restart')) {
window.location = '/'
        }
        return
    }


    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderedTime) / 1000
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return



    console.log('Render')
    lastRenderedTime = currentTime

    update()
    draw()
}

window.requestAnimationFrame(main)


function update() {
    updateSnake()
    updateFood()
    checkForFail()
}

function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkForFail() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersected()
}