//your JS code here. If required.
let sounds = [
"applause",
"boo",
"gasp",
"tada",
"victory",
"wrong"
]

let currentAudio = null

document.querySelectorAll(".btn").forEach((btn,index)=>{

btn.addEventListener("click",()=>{

if(currentAudio){
currentAudio.pause()
}

currentAudio = new Audio("sounds/"+sounds[index]+".mp3")

currentAudio.play()

})

})

document.querySelector(".stop").addEventListener("click",()=>{

if(currentAudio){
currentAudio.pause()
currentAudio.currentTime = 0
}

})