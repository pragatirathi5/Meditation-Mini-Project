const container = document.getElementById('container');
const info = document.getElementById("info");

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;


const breathNow = () => {
    info.innerText = "Breathe In !";
    container.className = "container grow"

    setTimeout(() => {
        info.innerText = "Hold";

    setTimeout(() => {
        info.innerText = "Now Breathe Out !";
        container.className = "container shrink";
    }, holdTime);
    }, breatheTime);
}

breathNow();
setInterval(breathNow, totalTime);