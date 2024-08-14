//scroll down
window.addEventListener("scroll", function(){
    const header = this.document.querySelector("header");
    header.classList.toggle("sticky", this.window.scrollY > 0);
});

//professions section - modal
const professionsModals = document.querySelectorAll(".professions-modal");
const learnmoreBtns = document.querySelectorAll(".learn-more-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

var modal = function(modalClick){
    professionsModals[modalClick].classList.add("active");
}

learnmoreBtns.forEach((learnmoreBtn, i) => {
    learnmoreBtn.addEventListener("click", () => {
        modal(i);
    });
});

modalCloseBtns.forEach((modalCloseBtn) => {
    modalCloseBtn.addEventListener("click", () => {
        professionsModals.forEach((modalView) => {
            modalView.classList.remove("active");
        });
    });
});

//projects section - modal
const projectModals = document.querySelectorAll(".projects-model");
const imgCards = document.querySelectorAll(".img-card");
const projectCloseBtns = document.querySelectorAll(".projects-close-btn");

var projectModal = function(modalClick){
    projectModals[modalClick].classList.add("active");
}

imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener("click", () => {
        projectModal(i);
    });
});

projectCloseBtns.forEach((projectCloseBtn) => {
    projectCloseBtn.addEventListener("click", () => {
        projectModals.forEach((projectmodalView) => {
            projectmodalView.classList.remove("active");
        });
    });
});

//scrollup 
const scrollTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
    scrollTopBtn.classList.toggle("active", window.scrollY > 500);
});

scrollTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

//menu active 
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        let id = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(".nav-items a[href*=" + id + "]").classList.add("active");
        }
        else{
            document.querySelector(".nav-items a[href*=" + id + "]").classList.remove("active");
        }
    });
});

//light and dark mode
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeBtn.classList.toggle("sun");

    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-icon", getCurrentIcon());
});

const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if(savedTheme){
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}

//responsive nav menu
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
});

navItems.forEach((navItem) => {
    navItem.addEventListener("click", () =>{
        navigation.classList.remove("active");
    });
});

ScrollReveal({
    reset: true,
    distance: "60px",
    duration: 2500,
    delay: 100
});

ScrollReveal().reveal('.home .info h1, .section-title-01, .section-title-02', { dealy: 500, origin: 'left'});
ScrollReveal().reveal('.home .info h3, .home .info p, .about-info .btn', { dealy: 600, origin: 'right'});
ScrollReveal().reveal('.home .info .btn, .img-card', { dealy: 700, origin: 'bottom'});
ScrollReveal().reveal('.media-icons i, .contact-left li', { dealy: 500, origin: 'left', interval: 200});
ScrollReveal().reveal('.home-img, .about-img', { dealy: 500, origin: 'bottom'});
ScrollReveal().reveal('.about .description, .copy-right', { dealy: 600, origin: 'right'});
ScrollReveal().reveal('.about .professions-list', { dealy: 500, origin: 'right', interval:200 });
ScrollReveal().reveal('.skills-description, .services-description, .contact-card, .professions-description', { dealy: 700, origin: 'left'});
ScrollReveal().reveal('.experience-card, .service-card, .education, .portfolio .img-card, .professions-card', { dealy: 800, origin: 'bottom', interval:200});
ScrollReveal().reveal('footer .group', { dealy: 500, origin: 'top', interval:200});
