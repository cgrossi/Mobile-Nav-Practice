const navSlide = () => {
        const burger = document.querySelector('.burger');
        const navMenu = document.querySelector('.nav-menu');
        const navMenuLink = document.querySelectorAll('.nav-menu-item');

        // Nav toggle
        burger.addEventListener('click', e => {
                navMenu.classList.toggle('nav-menu-active');

                // Animate Menu Items
                navMenuLink.forEach((link, index) => {
                        if (link.style.animation) {
                                link.style.animation = '';
                        } else {
                                link.style.animation = `navLinkFade .5s ease forwards ${index / 7 + 0.5}s`;
                        }
                });

                // Burger menu
                burger.classList.toggle('toggle');
        });
};

const app = () => {
        navSlide();
};

app();
