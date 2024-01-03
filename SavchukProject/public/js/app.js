document.addEventListener('DOMContentLoaded', function () {
    function navSlide() {
        var burger = document.querySelector(".burger-menu");
        var nav = document.querySelector(".nav-menu");

        if (burger && nav) {
            burger.addEventListener('click', () => {
                nav.classList.toggle('nav-active');
            });
        }
    }

    navSlide();

    var faq = document.getElementsByClassName('content');
    for (a of faq) {
        a.addEventListener('click', function () {
            var icon = this.querySelector("i");
            icon.classList.toggle('fa-plus');
            icon.classList.toggle('fa-minus');
            this.classList.toggle('faq-active');
        });
    }
});
