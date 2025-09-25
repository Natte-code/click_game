let clicks = 0;
let clickers = false;

document.getElementById("btn").addEventListener("click", function() {
    clicks++;
    document.getElementById("num").innerText = clicks;
});