var slides = document.getElementsByClassName("slide");
var dots = document.getElementsByClassName("dot");
var prev = document.querySelector(".prev");
var next = document.querySelector(".next");
var counter = 0;

function noactive() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
        dots[i].classList.remove('active');
    }
}
next.addEventListener("click", function () {
    counter++;
    if (counter > slides.length - 1) {
        counter = 0;
    }
    noactive();
    slides[counter].classList.add('active');
    dots[counter].classList.add('active');

})
prev.addEventListener("click", function () {
    counter--;
    if (counter < 0) {
        counter = slides.length - 1;
    }
    noactive();
    slides[counter].classList.add('active');
    dots[counter].classList.add('active');
})

setInterval(function () {
    counter++;
    if (counter > slides.length - 1) {
        counter = 0;
    }
    noactive();
    slides[counter].classList.add('active');
    dots[counter].classList.add('active');
}, 5000)

