@@ -21,31 +21,31 @@ document.addEventListener("keypress", function (event) {
function makeSound(key) {
  switch (key) {
    case "w":
      let tom1 = new Audio("tom-1.mp3");
      let tom1 = new Audio("./tom-1.mp3");
      tom1.play();
      break;
    case "a":
      let tom2 = new Audio("tom-2.mp3");
      let tom2 = new Audio("./tom-2.mp3");
      tom2.play();
      break;
    case "s":
      let tom3 = new Audio("tom-3.mp3");
      let tom3 = new Audio("./tom-3.mp3");
      tom3.play();
      break;
    case "d":
      let tom4 = new Audio("tom-4.mp3");
      let tom4 = new Audio("./tom-4.mp3");
      tom4.play();
      break;
    case "j":
      let snare = new Audio("snare.mp3");
      let snare = new Audio("./snare.mp3");
      snare.play();
      break;
    case "k":
      let crash = new Audio("crash.mp3");
      let crash = new Audio("./crash.mp3");
      crash.play();
      break;
    case "l":
      let kick = new Audio("kick-bass.mp3");
      let kick = new Audio("./kick-bass.mp3");
      kick.play();
      break;
    default:
@@ -61,4 +61,4 @@ setTimeout(function() {
activeButton.classList.remove("pressed");
},100)

}
}
