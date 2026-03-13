let audio = null;

function playSound(name) {

    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }

    audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function stopSound() {

    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }
}