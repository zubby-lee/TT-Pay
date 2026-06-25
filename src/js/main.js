const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});


const servicesBtn = document.getElementById("services-btn");
const servicesMenu = document.getElementById("services-menu");

servicesBtn.addEventListener("click", () => {
    servicesMenu.classList.toggle("hidden");
});


const faqButtons = document.querySelectorAll(".faq-btn");

faqButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const currentContent =
            button.parentElement.querySelector(".faq-content");

        const currentIcon =
            button.querySelector(".faq-icon");

        document.querySelectorAll(".faq-content")
            .forEach(content => {

                if(content !== currentContent){
                    content.classList.add("hidden");
                }

            });

        document.querySelectorAll(".faq-icon")
            .forEach(icon => {

                if(icon !== currentIcon){
                    icon.textContent = "+";
                }

            });

        currentContent.classList.toggle("hidden");

        currentIcon.textContent =
            currentContent.classList.contains("hidden")
            ? "+"
            : "−";

    });

});