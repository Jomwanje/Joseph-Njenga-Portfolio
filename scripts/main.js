document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul.nav-list li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        });
    });

    // LinkedIn and GitHub links (update href accordingly)
    const linkedinLink = document.querySelector('.social-links li:nth-child(1) a');
    linkedinLink.href = 'https://www.linkedin.com/your-profile';
    
    const githubLink = document.querySelector('.social-links li:nth-child(2) a');
    githubLink.href = 'https://github.com/your-username';

    // Contact form submission using EmailJS
    const contactForm = document.getElementById('contact-form');
    const formResponse = document.getElementById('form-response');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                formResponse.textContent = 'Your message has been sent successfully!';
                formResponse.style.color = 'green';
                contactForm.reset();
            }, function(error) {
                console.log('FAILED...', error);
                formResponse.textContent = 'There was an error sending your message. Please try again later.';
                formResponse.style.color = 'red';
            });
    });

    // Display current date and time
    function updateTime() {
        const currentTimeElement = document.getElementById('current-time');
        const currentDateElement = document.getElementById('current-date');
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        const date = now.toLocaleDateString();
        currentTimeElement.textContent = `${hours}:${minutes}:${seconds}`;
        currentDateElement.textContent = date;
    }

    setInterval(updateTime, 1000);
    updateTime(); // initial call to display time immediately

    // Toggle navigation menu on mobile
    const menuIcon = document.querySelector('.menu-icon');
    const nav = document.querySelector('nav');

    menuIcon.addEventListener('click', function() {
        nav.classList.toggle('nav-hidden');
    });
});

// Smooth scrolling for anchor links using jQuery
$('a[href^="#"]').on('click', function(event) {
    var target = $($(this).attr('href'));
    if (target.length) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});
