document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    // Intersection Observer setup
    const observerOptions = {
        root: null, // Use the viewport as the root
        rootMargin: "0px",
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;

                // Image animation
                if (element.matches(".company img")) {
                    gsap.from(element, {
                        opacity: 0,
                        x: 40,
                        duration: 0.5,
                        ease: "power1.out"
                    });
                }

                // Heading and paragraph animation
                if (element.matches(".company h2, .company h1, .company p")) {
                    gsap.from(element, {
                        opacity: 0,
                        y: 40,
                        duration: 0.5,
                        ease: "power1.out",
                        // stagger: 0.1
                    });
                }

                // Button animations
                if (element.matches(".company button:first-of-type")) {
                    gsap.from(element, {
                        opacity: 0,
                        x: -40,
                        duration: 1.5,
                        ease: "power1.out"
                    });
                }

                if (element.matches(".company button:last-of-type")) {
                    gsap.from(element, {
                        opacity: 0,
                        x: 40,
                        duration: 1.5,
                        ease: "power1.out"
                    });
                }

                // Unobserve the element after animation
                observer.unobserve(element);
            }
        });
    }, observerOptions);

    // Target elements to observe
    document.querySelectorAll(".company img, .company h2, .company h1, .company p, .company button").forEach(el => {
        observer.observe(el);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Animate the first text element from left to right
    gsap.fromTo(".gsap-text1", { opacity: 0, x: 20 }, { duration: 1, opacity: 1, x: 0, delay: 0.5 });

    // Animate the second text element with a fade-in and upward movement
    gsap.fromTo(".gsap-text2", { opacity: 0, y: 10 }, { duration: 1, opacity: 1, y: 0, delay: 1 });

    // Animate the third text element with a fade-in and upward movement
    gsap.fromTo(".gsap-text3", { opacity: 0, y: 10 }, { duration: 1, opacity: 1, y: 0, delay: 1.5 });

    gsap.fromTo(".gsap-text4", { opacity: 0, y: 10 }, { duration: 1, opacity: 1, y: 0, delay: 1.5 });


    // Animate the button with a fade-in and upward movement
    // gsap.fromTo(".gsap-button", { opacity: 0, y: 10 }, { duration: 1, opacity: 1, y: 0, delay: 2 });
});
