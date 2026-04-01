const noBtn = document.getElementById("noBtn");

document.addEventListener("mousemove", (e) => {
    const rect = noBtn.getBoundingClientRect();

    const distance = Math.hypot(
        e.clientX - (rect.left + rect.width / 2),
        e.clientY - (rect.top + rect.height / 2)
    );

    if (distance < 100) {
        noBtn.style.left = Math.random() * window.innerWidth + "px";
        noBtn.style.top = Math.random() * window.innerHeight + "px";
    }
});

function goYes() {
    window.location.href = "/celebrate";
}

setTimeout(() => {
    window.location.href = "/celebrate";
}, 12000);