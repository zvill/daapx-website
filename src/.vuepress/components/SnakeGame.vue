<template>
  <div class="snake-game">
    <canvas ref="canvas" width="400" height="400"></canvas>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'

const canvas = ref(null)
let ctx
const box = 20
let snake = []
let direction = 'RIGHT'
let food
let gameInterval

function init() {
  snake = [{ x: 9 * box, y: 10 * box }]
  direction = 'RIGHT'
  createFood()
  if (gameInterval) clearInterval(gameInterval)
  gameInterval = setInterval(draw, 100)
}

function createFood() {
  food = {
    x: Math.floor(Math.random() * 20) * box,
    y: Math.floor(Math.random() * 20) * box,
  }
}

function changeDirection(e) {
  const key = e.key
  if (key === 'ArrowLeft' && direction !== 'RIGHT') direction = 'LEFT'
  else if (key === 'ArrowUp' && direction !== 'DOWN') direction = 'UP'
  else if (key === 'ArrowRight' && direction !== 'LEFT') direction = 'RIGHT'
  else if (key === 'ArrowDown' && direction !== 'UP') direction = 'DOWN'
}

function collision(head, array) {
  return array.some(part => head.x === part.x && head.y === part.y)
}

function draw() {
  ctx.fillStyle = '#fafafa'
  ctx.fillRect(0, 0, 400, 400)

  for (let i = 0; i < snake.length; i++) {
    ctx.fillStyle = i === 0 ? '#4caf50' : '#8bc34a'
    ctx.fillRect(snake[i].x, snake[i].y, box, box)
    ctx.strokeStyle = '#fff'
    ctx.strokeRect(snake[i].x, snake[i].y, box, box)
  }

  ctx.fillStyle = '#ff5722'
  ctx.fillRect(food.x, food.y, box, box)

  let head = { ...snake[0] }

  if (direction === 'LEFT') head.x -= box
  if (direction === 'UP') head.y -= box
  if (direction === 'RIGHT') head.x += box
  if (direction === 'DOWN') head.y += box

  if (
    head.x < 0 ||
    head.x >= 400 ||
    head.y < 0 ||
    head.y >= 400 ||
    collision(head, snake)
  ) {
    ctx.fillStyle = '#000'
    ctx.font = '40px sans-serif'
    ctx.fillText('Game Over', 70, 200)
    clearInterval(gameInterval)
    setTimeout(init, 1500)
    return
  }

  snake.unshift(head)

  if (head.x === food.x && head.y === food.y) {
    createFood()
  } else {
    snake.pop()
  }
}

onMounted(() => {
  ctx = canvas.value.getContext('2d')
  document.addEventListener('keydown', changeDirection)
  init()
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', changeDirection)
  clearInterval(gameInterval)
})
</script>

<style scoped>
.snake-game {
  max-width: 400px;
  margin: 0 auto;
}
canvas {
  border: 1px solid #ccc;
  background: #fafafa;
}
</style>
