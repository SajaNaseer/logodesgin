let btn = document.querySelector(".button-scroll");

window.addEventListener("scroll", function () {
    btn.classList.toggle("scroll-up-visible", window.scrollY > 100);
});

btn.onclick = function () {
window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
});
};
