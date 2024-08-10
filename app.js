console.log("hello")

document.addEventListener("DOMContentLoaded", function () {
    // Animate the first text element from left to right
    gsap.fromTo(".gsap-text1", { opacity: 0, x: -100 }, { duration: 1, opacity: 1, x: 0, delay: 0.5 });

    // Animate the second text element with a fade-in and upward movement
    gsap.fromTo(".gsap-text2", { opacity: 0, y: 10 }, { duration: 1, opacity: 1, y: 0, delay: 1 });

    // Animate the third text element with a fade-in and upward movement
    gsap.fromTo(".gsap-text3", { opacity: 0, y: 10 }, { duration: 1, opacity: 1, y: 0, delay: 1.5 });

    // Animate the button with a fade-in and upward movement
    gsap.fromTo(".gsap-button", { opacity: 0, y: 10 }, { duration: 1, opacity: 1, y: 0, delay: 2 });
});

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
                if (element.matches(".about img")) {
                    gsap.from(element, {
                        opacity: 0,
                        x: -100,
                        duration: 3.5,
                        ease: "power1.out"
                    });
                }

                // Heading and paragraph animation
                if (element.matches(".about h2, .about h1, .about p")) {
                    gsap.from(element, {
                        opacity: 0,
                        y: 30,
                        duration: 3.5,
                        ease: "power1.out",
                        stagger: 0.4
                    });
                }

                // Button animations
                if (element.matches(".about button:first-of-type")) {
                    gsap.from(element, {
                        opacity: 0,
                        x: -100,
                        duration: 3.5,
                        ease: "power1.out"
                    });
                }

                if (element.matches(".about button:last-of-type")) {
                    gsap.from(element, {
                        opacity: 0,
                        x: 100,
                        duration: 3.5,
                        ease: "power1.out"
                    });
                }

                // Unobserve the element after animation
                observer.unobserve(element);
            }
        });
    }, observerOptions);

    // Target elements to observe
    document.querySelectorAll(".about img, .about h2, .about h1, .about p, .about button").forEach(el => {
        observer.observe(el);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Fade-in effect for initial page load
    const content = document.getElementById('content');
    setTimeout(() => {
        content.classList.add('show');
    }, 100);

    // Handle fade-out effect for links
    const links = document.querySelectorAll('a[href]');
    for (let link of links) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const href = this.getAttribute('href');
            content.classList.add('fade-out');
            setTimeout(() => {
                window.location.href = href;
            }, 500); // Match the transition duration
        });
    }

function change(e){
    let list=document.getElementById('mobileMenu');
    
    console.log(list);

    if(e.name==='menu'){
        e.name="close";
        list.classList.remove('left-[-80vw]');
        list.classList.remove('opacity-0')
    }
    else if(e.name==='close'){
        e.name="menu"
        list.classList.add('left-[-80vw]');
        list.classList.add('opacity-0');
    }
}
