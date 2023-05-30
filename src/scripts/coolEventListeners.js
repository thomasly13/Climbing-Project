
export function animateSlider() {
    const imageButtons = document.querySelectorAll("[data-button]")

    for (let i = 0; i < imageButtons.length; i++) {
        imageButtons[i].addEventListener("click", () => {
            let change = -1;
            if (imageButtons[i].dataset.button === "next") {
                change = 1;
            } else {
                change = -1
            };
            let slides = imageButtons[i].closest("[data-carousel").querySelector("[data-slides]");
            let activeSlide = slides.querySelector("[data-active]");
            let newIndex = [...slides.children].indexOf(activeSlide) + change; 
            if (newIndex < 0) {
                newIndex = slides.children.length - 1;
            } else if (newIndex >= slides.children.length) {
                newIndex = 0;
            };

            slides.children[newIndex].dataset.active = true;
            delete activeSlide.dataset.active;
        })
        
    };

};

