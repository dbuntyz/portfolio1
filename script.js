// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100; // Adjust offset if header height changes significantly
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                // Ensure querySelector finds the link even if ID has numbers/special chars
                // For simple IDs like 'home', 'about', this is fine.
                // For more complex IDs, consider `document.querySelector('header nav a[href="#${id}"]')`
                let activeLink = document.querySelector('header nav a[href*=' + id + ']');
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            });
            // active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        // if want to animation that repeats on scroll use this
        // else {
        //     sec.classList.remove('show-animate');
        // }
    });

    // sticky navbar
    let header = document.querySelector('header');
    if (header) { // Check if header exists
        header.classList.toggle('sticky', window.scrollY > 100);
    }


    // remove toggle icon and navbar when click navbar links (scroll)
    // or when scrolling away from the top if menu is open
    if (navbar.classList.contains('active')) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    }


    // animation footer on scroll
    let footer = document.querySelector('footer');
    if (footer) { // Check if footer exists
         // Check if the bottom of the page is reached
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) { // -50 to trigger a bit earlier
            footer.classList.add('show-animate');
        } else {
             // Optionally remove if you don't want footer animation to repeat
            // footer.classList.remove('show-animate');
        }
    }
};

// Optional: Close mobile menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navbar.classList.contains('active')) {
            menuIcon.classList.remove('bx-x');
            navbar.classList.remove('active');
        }
    });
});

// You can add JavaScript for the achievements accordion functionality here if needed
// Example:
const achievementRows = document.querySelectorAll('.achievement-row');
achievementRows.forEach(row => {
    row.addEventListener('click', () => {
        row.classList.toggle('open');
        const details = row.nextElementSibling;
        if (details && details.classList.contains('achievement-details')) {
            details.classList.toggle('visible');
        }
    });
});
