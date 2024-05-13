document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".button");

    buttons.forEach(button => {
        button.addEventListener("mouseenter", function() {
            this.style.backgroundColor = "red";
        });

        button.addEventListener("mouseleave", function() {
            this.style.backgroundColor = "rgb(86, 84, 84)";
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".button");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const buttonText = this.textContent;

            const banners = document.querySelectorAll(".banner");
            banners.forEach(banner => {
                banner.style.display = "none";
            });

            const initialBanner = document.querySelector(".banner.About");
            initialBanner.style.display = "block";

            const bannerToShow = document.querySelector("." + buttonText);
            bannerToShow.style.display = "block";
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const banners = document.querySelectorAll(".banner");

    banners.forEach(banner => {
        banner.style.display = "none";
    });

    const initialBanner = document.querySelector(".banner.About");
    initialBanner.style.display = "block";

    const buttons = document.querySelectorAll(".button");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const buttonText = this.textContent;

            banners.forEach(banner => {
                banner.style.display = "none";
            });

            const bannerToShow = document.querySelector("." + buttonText);
            bannerToShow.style.display = "block";

            if (buttonText !== "About") {
                const aboutBanner = document.querySelector(".banner.About");
                aboutBanner.style.display = "none";
            }
        });
    });
});
