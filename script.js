let volume = 0

let tag = document.querySelector("i")

tag.addEventListener("click", function() {
    if (volume==0) {
        document.querySelector("audio").play();
        volume++;
        document.querySelector("i").style.opacity="1";
    }
    else {
        document.querySelector("audio").pause();
        volume--;
        document.querySelector("i").style.opacity=".5";
    }
})

console.log("hello")