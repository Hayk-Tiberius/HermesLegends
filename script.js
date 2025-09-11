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


document.querySelectorAll(".animate").forEach(animateBlock => {
    let textAnimate = animateBlock.querySelector("i");
    if (!textAnimate) return;

    let scoreAnimate = 0;
    let a = animateBlock.closest(".Legends_portfolio").querySelector(".Legends_name");
    let originalText = a.textContent;
    let chars = [...originalText];

    textAnimate.addEventListener("click", () => {
        if (scoreAnimate === 0) {
            a.innerHTML = "";
            chars.forEach((ch, i) => {
                setTimeout(() => {
                    a.innerHTML += ch;
                }, 300 * i);
            });
            textAnimate.style.opacity = "1";
            scoreAnimate++;
        } else {
            console.log(originalText);
            textAnimate.style.opacity = ".5";
            scoreAnimate = 0;
        }
    });
});

