    AOS.init({
        duration: 1000,
        once: true,
    });
    const heroSwiper = new Swiper('.hero-slider', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });




 var swiper = new Swiper('.subswiper-container', {
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
    });
    
    const header = document.getElementById('header');
    const heroSection = document.querySelector('.hero');
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > heroSection.offsetHeight) {
            if (scrollTop > lastScrollTop) {
                // Scrolling Up
                header.classList.add('header-scrolled');
                header.style.top = '0px';
            } else {

                                // Scrolling Down
                header.classList.remove('header-scrolled');
                header.style.top = '-200px'; 
            }
        } else {
            header.classList.remove('header-scrolled');
            header.style.top = '0px';
            header.classList.remove('bg-gray-800', 'bg-opacity-50');
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }, false);



     var swiper = new Swiper('.ixx-swiper-container', {
            slidesPerView: 1,
            spaceBetween: 10,
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            breakpoints: {
                340: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                268: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                924: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            }
        });


    let lastScrollTop = 0;
    const header = document.getElementById('header');
    const heroSection = document.querySelector('section');
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            // Scroll down
            if (scrollTop > heroSection.offsetHeight) {
                header.classList.add('header-scrolled');
                header.classList.remove('header-hidden');
            } else {
                 header.classList.add('header-hidden');
            }
        } else {
            // Scroll up
            if (scrollTop > heroSection.offsetHeight) {
                header.classList.add('header-scrolled');
                header.classList.remove('header-hidden');
            } else {
                header.classList.remove('header-hidden');
                header.classList.remove('header-scrolled');
            }
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = menuToggle.querySelector('.material-icons');
    menuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        if (mobileMenu.classList.contains('active')) {
            menuIcon.textContent = 'close';
        } else {
            menuIcon.textContent = 'menu';
        }
    });




