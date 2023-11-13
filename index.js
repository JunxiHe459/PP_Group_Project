var drumButtons = document.querySelectorAll(".drum");

for (var i = 0; i < drumButtons.length; i++) {
    drumButtons[i].addEventListener("click", function() {
        var drumName = this.innerHTML;
        makeSound(drumName);
        buttonAnimation(drumName);
        // setTimeout(makeSound(drumName), 1000);
        setTimeout(function() {makeSound(drumName)}, 1000) //must wrap it inside a closure
    });
}

document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});


function buttonAnimation(currentKey) {
    document.querySelector("." + currentKey).classList.toggle("pressed");
    setTimeout(function() {
        document.querySelector("." + currentKey).classList.toggle("pressed");
    }, 100);
}

function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var bass = new Audio("sounds/kick-bass.mp3");
            bass.play();
            break;
        default:
            break;
    }
}