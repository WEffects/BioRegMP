console.log("hello")

// import Shery from "sheryjs";


document.addEventListener("DOMContentLoaded", function () {
    // Animate the first text element from left to right
    gsap.fromTo(".gsap-text1", { opacity: 0, x: -100 }, { duration: 1, opacity: 1, x: 0, delay: 0.5 });

    // Animate the second text element with a fade-in and upward movement
    gsap.fromTo(".gsap-text2", { opacity: 0, y: 10 }, { duration: 1, opacity: 1, y: 0, delay: 1 });

    // Animate the third text element with a fade-in and upward movement
    gsap.fromTo(".gsap-text3", { opacity: 0, y: 10 }, { duration: 1, opacity: 1, y: 0, delay: 1.5 });

    // Animate the button with a fade-in and upward movement
    gsap.fromTo(".gsap-button", { opacity: 0, y: 10 }, { duration: 1, opacity: 1, y: 0, delay: 2 });

    gsap.fromTo(".gsap-img1", { opacity: 0, x: -10 }, { duration: 1, opacity: 1, x: 0, delay: 2 });
    gsap.fromTo(".gsap-img2", { opacity: 0, x: -10 }, { duration: 1, opacity: 1, x: 0, delay: 2 });
    gsap.fromTo(".gsap-img3", { opacity: 0, x: 10 }, { duration: 1, opacity: 1, x: 0, delay: 2 });
    gsap.fromTo(".gsap-img4", { opacity: 0, x: 10 }, { duration: 1, opacity: 1, x: 0, delay: 2 });

    gsap.fromTo(".gsap-text1s", { opacity: 0, x: 100 }, { duration: 1, opacity: 1, x: 0, delay: 0.5 });

    gsap.fromTo(".gsap-img1s", { opacity: 0, x: -60 }, { duration: 1, opacity: 1, x: 0, delay: 0.5 });
    gsap.fromTo(".gsap-img2s", { opacity: 0, x: 60 }, { duration: 1, opacity: 1, x: 0, delay: 0.5 });
    
});


// document.addEventListener("DOMContentLoaded", function () {
//     gsap.registerPlugin(ScrollTrigger);

//     // Animate the image
//     gsap.from(".about img", {
//         scrollTrigger: {
//             trigger: ".about",
//             start: "top 50%",
//             end: "top 10%",
//             scrub: true,
//             markers: false
//         },
//         opacity: 0,
//         x: -100,
//         duration: 4.5, // Increased duration for slower animation
//         ease: "power1.out" // Smooth easing
//     });

//     // Animate the headings and paragraph
//     gsap.from(".about h2, .about h1, .about p", {
//         scrollTrigger: {
//             trigger: ".about",
//             start: "top 50%",
//             end: "top 10%",
//             scrub: true,
//             markers: false
//         },
//         opacity: 0,
//         y: 30,
//         duration: 3.5, // Increased duration for slower animation
//         ease: "power1.out", // Smooth easing
//         stagger: 1.9 // Slightly increased stagger
//     });

//     // Animate the buttons
//     gsap.from(".about button:nth-of-type(1)", {
//         scrollTrigger: {
//             trigger: ".about",
//             start: "top 30%",
//             end: "top 10%",
//             scrub: true,
//             markers: false
//         },
//         opacity: 0,
//         x: -40,
//         duration: 5.5, // Increased duration for slower animation
//         ease: "power1.out", // Smooth easing
//         stagger: 3 // Slightly increased stagger
//     });

//     gsap.from(".about button:nth-of-type(2)", {
//         scrollTrigger: {
//             trigger: ".about",
//             start: "top 30%",
//             end: "top 10%",
//             scrub: true,
//             markers: false
//         },
//         opacity: 0,
//         x: 40,
//         duration: 5.5, // Increased duration for slower animation
//         ease: "power1.out", // Smooth easing
//         stagger: 5 // Slightly increased stagger
//     });
// });


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
                        duration: 1.5,
                        ease: "power1.out"
                    });
                }

                // Heading and paragraph animation
                if (element.matches(".about h2, .about h1, .about p")) {
                    gsap.from(element, {
                        opacity: 0,
                        y: 30,
                        duration: 1.8,
                        ease: "power1.out",
                        stagger: 0.4
                    });
                }

                // Button animations
                if (element.matches(".about button:first-of-type")) {
                    gsap.from(element, {
                        opacity: 0,
                        x: -40,
                        duration: 1.5,
                        ease: "power1.out"
                    });
                }

                // if (element.matches(".about button:last-of-type")) {
                //     gsap.from(element, {
                //         opacity: 0,
                //         x: 40,
                //         duration: 1.5,
                //         ease: "power1.out"
                //     });
                // }

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



document.addEventListener('DOMContentLoaded', function () {
    // Fade-in effect for initial page load
    const content = document.getElementById('content');
    setTimeout(() => {
        content.classList.add('show');
    }, 100);

    // Handle fade-out effect for links
    const links = document.querySelectorAll('a[href]');
    for (let link of links) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const href = this.getAttribute('href');
            content.classList.add('fade-out');
            setTimeout(() => {
                window.location.href = href;
            }, 500); // Match the transition duration
        });
    }


});






document.addEventListener("DOMContentLoaded", () => {
    // Select all dropdown toggle buttons


    const dropdownToggles = document.querySelectorAll(".dropdown-toggle")

    dropdownToggles.forEach((toggle) => {
        toggle.addEventListener("click", () => {
            console.log("hello");
            // Find the next sibling element which is the dropdown menu
            const dropdownMenu = toggle.nextElementSibling

            // Toggle the 'hidden' class to show or hide the dropdown menu
            if (dropdownMenu.classList.contains("hidden")) {
                // Hide any open dropdown menus before showing the new one
                document.querySelectorAll(".dropdown-menu").forEach((menu) => {
                    menu.classList.add("hidden")
                })

                dropdownMenu.classList.remove("hidden")
            } else {
                dropdownMenu.classList.add("hidden")
            }
        })
    })

    // Optional: Clicking outside of an open dropdown menu closes it
    // window.addEventListener("click", (event) => {
    //   if (!event.target.matches(".dropdown-toggle")) {
    //     document.querySelectorAll(".dropdown-menu").forEach((menu) => {
    //       if (!menu.contains(event.target)) {
    //         menu.classList.add("hidden")
    //       }
    //     })
    //   }
    // })
})


function change(e) {
    let list = document.getElementById('mobileMenu');

    console.log(list);

    if (e.name === 'menu') {
        e.name = "close";
        list.classList.remove('left-[-80vw]');
        list.classList.remove('opacity-0')

    }
    else if (e.name === 'close') {
        e.name = "menu"
        // list.classList.remove('top-[6.1rem]');
        list.classList.add('left-[-80vw]');
        list.classList.add('opacity-0');
        // list.classList.remove('w-full');
        // list.classList.remove('transition-all ease-in duration-500');
    }
}


