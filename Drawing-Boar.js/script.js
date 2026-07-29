const canvas = document.getElementById("paintCanvas")
const ctx = canvas.getContext('2d')
const clearbtn = document.getElementById('clearBtn')

let isDrawing = false 
let brushColor = "#424242"
let brushWidth = 5


// mousedown & mouseup
canvas.addEventListener("mousedown",(e)=>{
  isDrawing = true
  ctx.beginPath()
  ctx.moveTo(e.offsetX,e.offsetY)
})

canvas.addEventListener("mouseup",()=>{
  isDrawing = false
  ctx.closePath() 
})


canvas.addEventListener("mousemove",(e)=>{
  if(!isDrawing) return 

  ctx.lineWidth = brushWidth
  ctx.lineCap = 'round'
  ctx.strokeStyle = brushColor

  ctx.lineTo(e.offsetX,e.offsetY)  
  ctx.stroke()
})

canvas.addEventListener('mouseleave',()=>{
  isDrawing = false
})

canvas.addEventListener('mouseenter',()=>{
  console.log("You can draw")
})


canvas.addEventListener('dblclick',()=>{
  const randomBg = `hsl(${Math.random()*360},80%,90%)`
  canvas.style.backgroundColor = randomBg
})

// hsl()

canvas.addEventListener("contextmenu",(e)=>{
  e.preventDefault()

  const colors = ["red","blue","green","white","black","yellow"]
  const randomColor = colors[Math.floor(Math.random()*colors.length)] 
  brushColor = randomColor
  alert(`Brush color changed to:${brushColor}`)
})


clearbtn.addEventListener("click",()=>{
  ctx.clearRect(0,0,canvas.width,canvas.height)
})
