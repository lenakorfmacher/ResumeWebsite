
// Copyright (c) 2024 Lena Korfmacher

// This work is licensed under the Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License (https://creativecommons.org/licenses/by-nc-nd/4.0/).
// For more information, see the LICENSE file in the root of this repository.

/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/

// Scrollspy - substantial parts taken from Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 100 
        });
    }

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


// #about - background image parallax effect
document.addEventListener('scroll', function () {
    const aboutSection = document.getElementById('about');
    const scrollPosition = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;

    // Calculate the new scale value based on scroll position
    const scaleValue = 1.1 + (scrollPosition / maxScroll) * 1.5; // Adjust to change zoom range

    // Apply the scale value to the pseudo-element
    aboutSection.style.setProperty('--zoom-scale', scaleValue);
});
