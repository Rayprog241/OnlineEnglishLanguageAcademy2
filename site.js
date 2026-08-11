/* =========================================================
   ONLINE ENGLISH LANGUAGE ACADEMY
   Main Website JavaScript
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       ELEMENTS
       ===================================================== */

    const header = document.getElementById("header");
    const menuToggle = document.getElementById("menuToggle");
    const navbar = document.getElementById("navbar");
    const navLinks = document.querySelectorAll(".nav-link");
    const backToTop = document.getElementById("backToTop");
    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");
    const currentYear = document.getElementById("currentYear");


    /* =====================================================
       CURRENT YEAR
       ===================================================== */

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }


    /* =====================================================
       MOBILE MENU
       ===================================================== */

    if (menuToggle && navbar) {

        menuToggle.addEventListener("click", function () {

            navbar.classList.toggle("active");

            const icon = menuToggle.querySelector("i");

            if (navbar.classList.contains("active")) {

                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        });


        /* Close mobile menu after clicking a link */

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                navbar.classList.remove("active");

                const icon = menuToggle.querySelector("i");

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            });

        });

    }


    /* =====================================================
       HEADER SCROLL EFFECT
       ===================================================== */

    function updateHeader() {

        if (!header) {
            return;
        }

        if (window.scrollY > 30) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }

    window.addEventListener("scroll", updateHeader);

    updateHeader();


    /* =====================================================
       ACTIVE NAVIGATION
       ===================================================== */

    const sections = document.querySelectorAll("section[id]");

    function updateActiveNavigation() {

        const scrollPosition =
            window.scrollY + 150;

        sections.forEach(function (section) {

            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute("id");

            if (
                scrollPosition >= sectionTop &&
                scrollPosition < sectionTop + sectionHeight
            ) {

                navLinks.forEach(function (link) {

                    link.classList.remove("active");

                    const href = link.getAttribute("href");

                    if (href === "#" + sectionId) {
                        link.classList.add("active");
                    }

                });

            }

        });

    }

    window.addEventListener(
        "scroll",
        updateActiveNavigation
    );

    updateActiveNavigation();


    /* =====================================================
       BACK TO TOP
       ===================================================== */

    function updateBackToTop() {

        if (!backToTop) {
            return;
        }

        if (window.scrollY > 500) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    }

    window.addEventListener(
        "scroll",
        updateBackToTop
    );

    updateBackToTop();


    if (backToTop) {

        backToTop.addEventListener(
            "click",
            function () {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    }


    /* =====================================================
       CONTACT FORM
       ===================================================== */

    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();

                formMessage.className =
                    "form-message success";

                formMessage.textContent =
                    "Thank you! Your message has been received. We will get back to you soon.";

                contactForm.reset();

                setTimeout(function () {

                    formMessage.style.display = "none";

                }, 5000);

            }
        );

    }


    /* =====================================================
       SCROLL REVEAL
       ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".course-card, " +
            ".benefit-card, " +
            ".testimonial-card, " +
            ".process-item, " +
            ".feature-item"
        );


    revealElements.forEach(function (element) {

        element.classList.add("reveal");

    });


    const revealObserver =
        new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(function (element) {

        revealObserver.observe(element);

    });


    /* =====================================================
       CLOSE MENU WHEN CLICKING OUTSIDE
       ===================================================== */

    document.addEventListener(
        "click",
        function (event) {

            if (
                navbar &&
                menuToggle &&
                navbar.classList.contains("active") &&
                !navbar.contains(event.target) &&
                !menuToggle.contains(event.target)
            ) {

                navbar.classList.remove("active");

                const icon =
                    menuToggle.querySelector("i");

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        }
    );


    /* =====================================================
       ESCAPE KEY CLOSES MOBILE MENU
       ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                if (
                    navbar &&
                    navbar.classList.contains("active")
                ) {

                    navbar.classList.remove("active");

                    const icon =
                        menuToggle.querySelector("i");

                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");

                }

            }

        }
    );

});