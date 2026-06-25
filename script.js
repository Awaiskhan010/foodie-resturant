const orderButton = document.querySelector(".order-btn");

if (orderButton) {

    orderButton.addEventListener("click", function () {

        alert("🍕 Thank you! Your order request has been received.");

    });

}

const menuButton = document.querySelector(".menu-btn");

if (menuButton) {

    menuButton.addEventListener("click", function () {

        document.querySelector(".menu").scrollIntoView({

            behavior: "smooth"

        });

    });

}
const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function(event){

    event.preventDefault();

    alert("Thank you! Your message has been sent.");

});
const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

hiddenElements.forEach((el) => observer.observe(el));
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", function(){

    nav.classList.toggle("active");

});