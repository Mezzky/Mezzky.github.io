// Variables
const hamburger = document.querySelector('#hamburger');
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("header .navbar");
const header = document.querySelector('header');
const year = document.getElementById('year');


// Scrolled Animation
window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        header.classList.add('scrolled');
        nav.classList.add('scrolled');
    } else{
        header.classList.remove('scrolled');
        nav.classList.remove('scrolled');
    }
});

// Hamburger
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger-active');
});

// Menu Toggle
menuToggle.addEventListener('click', () => {
    nav.classList.toggle('slide');
    // header.classList.remove('slide');
});

// Copyright
let date = new Date().getFullYear();
year.innerHTML = date;