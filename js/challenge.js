// set count
let count = 0
let paused = true
let likeCount = 0

// grab elements
const timer = document.querySelector('#counter')
const body = document.querySelector('body')
const plus = document.querySelector('#plus')
const minus = document.querySelector('#minus')
const heart = document.querySelector('#heart')
const likes = document.querySelector(".likes")
const form = document.querySelector('#comment-form')
const div = document.querySelector('#list')

// create elements
const start = document.createElement("button")
start.id = 'start'
const reset = document.createElement('button')
const pause = document.createElement('button')
pause.id = 'pause'
reset.id = 'reset'
start.textContent = "start"
reset.textContent = "reset"
pause.textContent = 'puase'
body.insertBefore(start, body.children[5])
body.insertBefore(reset, body.children[6])



// timer button handelers
const incrementer = setInterval(() => {
    if(!paused){
        count ++
        timer.textContent = count
        likeCount = 0
    }
},1000)

function removeChildren(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild)
    }
}


start.addEventListener('click', () => {
    paused = false
    start.replaceWith(pause)
})

pause.addEventListener('click', () => {
    paused = true
    pause.replaceWith(start)
})
reset.addEventListener('click', () => {
    paused = true
    timer.textContent = count = 0
    removeChildren(likes)
    removeChildren(div)
})

plus.addEventListener('click', () => {
   timer.textContent = count++
})

minus.addEventListener('click', () => {
    timer.textContent = count--
})

heart.addEventListener('click', () => {
    likeCount++
   const li = document.createElement('li')
   li.textContent = `${count} has been liked ${likeCount} times`
   likes.appendChild(li)
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let input = e.target[0].value
    const comment = document.createElement('h3')
    comment.textContent = input
    div.appendChild(comment)
    e.target.reset()

})

// small bug when pressing the plus or minus button. The counter moves in the opisite firection once then moves in the right direction.





