var elements = document.querySelectorAll(".drum");
var audioSrc = 'sounds/';
var soundMap = new Map([
    ['w', 'crash.mp3'],
    ['a', 'kick-bass.mp3'],
    ['s', 'snare.mp3'],
    ['d', 'tom-1.mp3'],
    ['j', 'tom-2.mp3'],
    ['k', 'tom-3.mp3'],
    ['l', 'tom-4.mp3'],
]);
var keys = ['w', 'a', 's', 'd', 'j', 'k', 'l'];

elements.forEach((element) => {
    element.addEventListener("click", function () {
        var key = this.innerHTML;
        playMusic(soundMap.get(key));
        buttonAnimation(key);
    });
});

document.addEventListener("keydown", function (event) {
    var keybKey = event.key;
    if(keys.includes(keybKey)) {
        playMusic(soundMap.get(keybKey));
        buttonAnimation(keybKey);
    }
});

function playMusic(fileName) {
    var music = new Audio(audioSrc + fileName);
    music.play();
}

function buttonAnimation(key) {
    document.querySelector("." + key).classList.add("pressed");
    setTimeout(() => {
        document.querySelector("." + key).classList.remove("pressed")
      }, 100);
}
