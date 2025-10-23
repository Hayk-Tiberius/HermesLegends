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
    const textAnimate = animateBlock.querySelector("i");
    if (!textAnimate) return;

    const a = animateBlock.closest(".Legends_portfolio").querySelector(".Legends_name");
    const originalText = a.textContent;
    const chars = [...originalText];

    let isAnimating = false; 

    textAnimate.addEventListener("click", async () => {
        if (isAnimating) return; 

        if (textAnimate.style.opacity === "1") {
            textAnimate.style.opacity = ".5";
            a.textContent = originalText;
            return;
        }

        textAnimate.style.opacity = "1";
        a.textContent = "";
        isAnimating = true;

        await new Promise(resolve => {
            chars.forEach((ch, i) => {
                setTimeout(() => {
                    a.textContent += ch;
                    if (i === chars.length - 1) resolve(); 
                }, 300 * i);
            });
        });

        isAnimating = false; 
    });
});
