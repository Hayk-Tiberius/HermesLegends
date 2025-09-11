let volume = 0

document.querySelectorAll(".music").forEach(musicBlock => {
    let icon = musicBlock.querySelector("i");
    let audio = musicBlock.querySelector("audio");

    icon.addEventListener("click", () => {
        if (audio.paused) {
            document.querySelectorAll("audio").forEach(a => {
                a.pause();
            });
            document.querySelectorAll(".music i").forEach(i => i.style.opacity = ".5");

            audio.play();
            icon.style.opacity = "1";
        } else {
            audio.pause();
            icon.style.opacity = ".5";
        }
    });
});


let a = document.querySelector(".Legends_name")

const b = []

b.push(...a.textContent)
a.innerHTML =""
for (let i = 0; i<b.length;i++) {
    setTimeout(() => {a.append(b[i]),console.log(b[i])},300*i)
}

