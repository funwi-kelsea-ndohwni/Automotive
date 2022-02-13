(function () {
    "use strict";

    const select = (el, all = false) => {
        el = el.trim();
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el);
        }
    }

    // onscroll listener
    const onscroll = (el, listener) => {
        window.addEventListener("scroll", listener)
    }

    let backtotop = select(".back-to-top");
    if (backtotop) {
        const toggleBackToTop = () => {
            if (window.scrollY > 100) {
                backtotop.classList.add("active");
            } else {
                backtotop.classList.remove("active");
            }
        }
        window.addEventListener("load", toggleBackToTop);
        onscroll(document, toggleBackToTop);
    }

    // Animation on scroll
    window.addEventListener("load", () => {
        AOS.init({
            duration: 1000,
            ease: "ease-in-out",
            once: true,
            mirror: false,
        })
    });
})();