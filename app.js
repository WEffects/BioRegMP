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
});


// document.addEventListener("DOMContentLoaded", function () {
//     gsap.registerPlugin(ScrollTrigger);

//     // Animate the image
//     gsap.from(".container img", {
//         scrollTrigger: {
//             trigger: ".container",
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
//     gsap.from(".container h2, .container h1, .container p", {
//         scrollTrigger: {
//             trigger: ".container",
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
//     gsap.from(".container button:nth-of-type(1)", {
//         scrollTrigger: {
//             trigger: ".container",
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

//     gsap.from(".container button:nth-of-type(2)", {
//         scrollTrigger: {
//             trigger: ".container",
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
                if (element.matches(".container img")) {
                    gsap.from(element, {
                        opacity: 0,
                        x: -100,
                        duration: 3.5,
                        ease: "power1.out"
                    });
                }

                // Heading and paragraph animation
                if (element.matches(".container h2, .container h1, .container p")) {
                    gsap.from(element, {
                        opacity: 0,
                        y: 30,
                        duration: 3.5,
                        ease: "power1.out",
                        stagger: 0.4
                    });
                }

                // Button animations
                if (element.matches(".container button:first-of-type")) {
                    gsap.from(element, {
                        opacity: 0,
                        x: -100,
                        duration: 3.5,
                        ease: "power1.out"
                    });
                }

                if (element.matches(".container button:last-of-type")) {
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
    document.querySelectorAll(".container img, .container h2, .container h1, .container p, .container button").forEach(el => {
        observer.observe(el);
    });
});




// document.getElementById('toggle').addEventListener('click', function() {
//     document.getElementById('Layer_1').classList.toggle('active');

// })

// const services_svg = document.getElementById('services_svg')

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

    // fetch("images/svg/services.svg").then(function(response){
    //     return response.text()
    // }).then(function(data){
    //     // console.log(data);
    //     services_svg.innerHTML=data
    // }).catch(function(error){
    //     console.log(error);
    // })

    // Fetch and inject SVG
    // fetch('images/svg/logo_animation.svg')
    //     .then(response => response.text())
    //     .then(svg => {
    //         document.getElementById('svg-container').innerHTML = svg;
    //     })
    //     .catch(error => console.error('Error fetching SVG:', error));

    // Toggle animation
    // document.getElementById('toggle').addEventListener('click', function() {
    //     const svgElement = document.getElementById('svg-container').querySelector('svg');
    //     if (svgElement) {
    //         svgElement.classList.toggle('active');
    //     }
    // });
});

// document.getElementById('toggle').addEventListener('click', function() {
//     const svgElement = document.getElementById('services_svg').querySelector('svg');
//     if (svgElement) {
//         svgElement.classList.toggle('active');
//     }
// });

// const services = document.getElementById("services")
// const nav = document.querySelector("nav");
// const header = document.querySelector("header");
// const listItems = document.querySelectorAll('ul li');
// let logo = document.getElementById("logo")

// const options = {
//   threshold: 0.65 // Trigger the function when 80% of the section is visible
// };

// function handleIntersection(entries, observer) {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//             // logo.src = "images/landing_img/logo/Veffects white logo.png"
//             // logo.classList.remove("translate-y-3")
//       nav.classList.toggle('nav_background', false);
//     //   nav.classList.toggle('text-white', true);
//     //   listItems.forEach(item => item.classList.toggle('text-white', true));
//     } else {
//     //   logo.src = "images/landing_img/logo/Veffects Black logo.png"
//     //   logo.classList.add("translate-y-3")
//       nav.classList.toggle('nav_background', true);
//     //   nav.classList.toggle('text-white', false);
//     //   listItems.forEach(item => item.classList.toggle('text-white', false));
//     }
//   });
// }


// const optionsForServices = {
//     threshold: 0.70 // Trigger the function when 80% of the section is visible
//   };
  
//   function handleIntersectionForServices(entries, observer) {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//               logo.src = "images/landing_img/logo/Veffects white logo.png"
//               logo.classList.remove("translate-y-3")
//         nav.classList.toggle('bg-gray-200', false);
//         nav.classList.toggle('text-white', true);
//         listItems.forEach(item => item.classList.toggle('text-white', true));
//       } else {
//         logo.src = "images/landing_img/logo/Veffects Black logo.png"
//         logo.classList.add("translate-y-3")
//         nav.classList.toggle('bg-gray-200', true);
//         nav.classList.toggle('text-white', false);
//         listItems.forEach(item => item.classList.toggle('text-white', false));
//       }
//     });
//   }









const observer = new IntersectionObserver(handleIntersection, options);

observer.observe(header);

// const gallery=document.querySelectorAll(".gallery .image");
// const image=document.querySelectorAll(".gallery .image src");

// const preview=document.querySelector(".preview-box");
// selectimg=preview .querySelector("img");
// window.onload=()=>{

//     for (let index = 0; index < gallery.length; index++) {
//         // console.log(index);
//         gallery[index].onclick =()=>{
//             let newindex=index;
//             console.log(newindex);
//             preview.classList.remove("hidden");
//             function preview1(){
//                 let selectedimgurl=gallery[newindex].querySelector("img").src;
//                 // console.log(selectedimgurl);
//                 selectimg.src=selectedimgurl;
//                 // selectimg=selectedimgurl
//             }
//             const prevBtn= document.querySelector(".prev")
//             const nexBtn=document.querySelector(".next")
//             if (newindex == 0) {
//                 prevBtn.style.display="none";
//             }
//             else{
//                 prevBtn.style.display="block"
//             }
//             if (newindex >=gallery.length-1) {
//                 nexBtn.style.display="none";
//             }
//             else{
//                 nexBtn.style.display="block";
//             }
//             prevBtn.onclick=()=>{
//                 newindex--;
//                 if (newindex==0) {
//                     preview1();
//                     prevBtn.style.display="none";
//                 }
//                 else{

//                     preview1();
//                 }
//             }
//             nexBtn.onclick=()=>{
//                 newindex++;
//                 if (newindex >=gallery.length-1) {
//                     preview1();
//                     nexBtn.style.display="none";
//                 }
//                 else{

//                     preview1();
//                 }
//             }
//             preview1();


//         }
        
// const close=document.getElementById("close");
// close.onclick=()=>{

//     preview.classList.add("hidden")
// }
        
//     }
// }


function change(e){
    let list=document.querySelector('aside');
    
    console.log(list);

    if(e.name==='menu'){
        e.name="close";
        list.classList.remove('left-[-80vw]');
        list.classList.remove('opacity-0')
        // list.classList.add('top-[6.1rem]');
        // // list.classList.add('.transion');
        // list.classList.add('left-[-1px]');
        // list.classList.add('w-full');
        // list.classList.add('bg-white');
        // list.classList.add('text-center');
        // list.classList.add('pb-3');
        // list.classList.add('pt-5');
    }
    else if(e.name==='close'){
        e.name="menu"
        // list.classList.remove('top-[6.1rem]');
        list.classList.add('left-[-80vw]');
        list.classList.add('opacity-0');
        // list.classList.remove('w-full');
        // list.classList.remove('transition-all ease-in duration-500');
    }
}


// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

// gsap.from(".nlink",{
//     stagger:.5,
//     x: -60,
//     duration: 3,
//     ease: Power2,
//     opacity: 0
// })

// Shery.imageEffect(".images", {
//     style: 4,
//     /*optional parameters
//     these parameter dose not applies to custom scroll trigger callback */
//     scrollSnapping: true,
//     scrollSpeed: 5,
//     touchSpeed: 5,
//     // loop: true,
//     // auto:true,
//     damping: 2,
//   });

//   Shery.imageEffect(".images", {
//     style: 3,
//     slideStyle: (setScroll) => {
//       window.addEventListener("scroll", () => {
//         setScroll(window.scrollY / innerHeight); //Updating the scroll
//       });
//     },
//   });



//   Shery.imageEffect(".images", {
//     style: 1,
//     slideStyle: (setScroll) => {
//       let scrollPosition = 0;
//       const scrollSpeed = 0.01; // Adjust the speed as needed
//   let i=0;
//       const animateScroll = () => {
//         scrollPosition += scrollSpeed;
//         // if (i > 10.0) {
//         //   scrollPosition = 0;
//         //    // Reset scroll position to loop the animation
//         // }
//         setScroll(scrollPosition);
//         console.log(scrollPosition);
//         i++
  
//         // Use requestAnimationFrame for smoother animations
//         requestAnimationFrame(animateScroll);
//       };
  
//       // Start the animation
//       animateScroll();
//     },
//   });


// Shery.imageEffect(".images", {
//     style: 7,
//     damping: 2,
//     slideStyle: (setScroll) => {
//       let scrollPosition = 0;
//       const scrollSpeed = 0.005; // Adjust the speed as needed
  
//       const animateScroll = () => {
//         scrollPosition += scrollSpeed;
//         if (scrollPosition > 10) {
//           scrollPosition = 0; // Reset scroll position to loop the animation
//         }
//         setScroll(scrollPosition);
  
//         // Debugging output to see the scroll position
//         // console.log("Scroll Position: ", scrollPosition);
  
//         // Use requestAnimationFrame for smoother animations
//         requestAnimationFrame(animateScroll);
//       };
  
//       // Start the animation
//       requestAnimationFrame(animateScroll);
//     },
//   });

//   Shery.imageEffect(".images2", {
//     style: 5,
//     damping: 2,
//     slideStyle: (setScroll) => {
//       let scrollPosition = 0;
//       const scrollSpeed = 0.005; // Adjust the speed as needed
  
//       const animateScroll = () => {
//         scrollPosition += scrollSpeed;
//         if (scrollPosition > 10) {
//           scrollPosition = 0; // Reset scroll position to loop the animation
//         }
//         setScroll(scrollPosition);
  
//         // Debugging output to see the scroll position
//         // console.log("Scroll Position: ", scrollPosition);
  
//         // Use requestAnimationFrame for smoother animations
//         requestAnimationFrame(animateScroll);
//       };
  
//       // Start the animation
//       requestAnimationFrame(animateScroll);
//     },
//   });

  
  