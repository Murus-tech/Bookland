const NAV_BTN = document.querySelector(".nav-btn i");

const NAV_MOB_LINKS = document.querySelector(".nav-links-mob");

const CONTENT = document.querySelector(".content");

let navOpen = false;

NAV_BTN.addEventListener("click", () => {
    if (!navOpen) {
        // CONTENT.style.filter = "blur(2px)";
        NAV_MOB_LINKS.style.height = "195px";
        document.querySelector(".content").style.filter = "blur(3px)"
    } else {
        // CONTENT.style.filter = "blur(0px)";
        NAV_MOB_LINKS.style.height = "0px";
        document.querySelector(".content").style.filter = "blur(0px)"
    }
    navOpen = !navOpen;
});



document.addEventListener("scroll", () => {
    if (navOpen) {
        NAV_MOB_LINKS.style.height = "0px";
        navOpen = false;
        document.querySelector(".content").style.filter = "blur(0px)"
    }
});

CONTENT.addEventListener("click", () => {
    if (navOpen) {
        NAV_MOB_LINKS.style.height = "0px";
        navOpen = false;
        document.querySelector(".content").style.filter = "blur(0px)"
    }
});