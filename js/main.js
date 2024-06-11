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