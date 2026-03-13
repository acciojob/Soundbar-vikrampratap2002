let audio = document.getElementById("audio");

function playSound(name) {

    audio.src = "sounds/" + name + ".mp3";
    audio.play();

}

function stopSound() {

    audio.pause();
    audio.currentTime = 0;

}