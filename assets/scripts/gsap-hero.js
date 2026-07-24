gsap.registerPlugin(ScrollTrigger);

function fly_left(selector, vars = {}) {
    gsap.from(selector, {
        opacity: 0,
        x: -120,
        duration: 0.8,
        ease: "power3.out",

        scrollTrigger: {
            trigger: selector,
            start: "top 80%",
            toggleActions: "play reverse play reverse"
        },

        ...vars
    });
}

fly_left(".fly-left");



function fly_right(selector, vars = {}) {
    gsap.from(selector, {
        opacity: 0,
        x: 120,
        duration: 0.8,
        ease: "power3.out",

        scrollTrigger: {
            trigger: selector,
            start: "top 80%",
            toggleActions: "play reverse play reverse"
        },

        ...vars
    });
}

fly_right(".fly-right");





function fade(selector, vars = {}) {
    gsap.from(selector, {
        opacity: 0,
        duration: 1,
        ease: "power3.out",

        scrollTrigger: {
            trigger: selector,
            start: "top 80%",
            toggleActions: "play reverse play reverse"
        },

        ...vars
    });
}

fade(".fade");




function fadeup(selector, vars = {}) {
    gsap.from(selector, {
        opacity: 0,
        y: 60,
        duration: 0.8,
        ease: "power3.out",

        scrollTrigger: {
            trigger: selector,
            start: "top 80%",
            toggleActions: "play reverse play reverse"
        },

        ...vars
    });
}

fadeup(".fade-up");



function fadedown(selector, vars = {}) {
    gsap.from(selector, {
        opacity: 0,
        y: -60,
        duration: 0.8,
        ease: "power3.out",

        scrollTrigger: {
            trigger: selector,
            start: "top 80%",
            toggleActions: "play reverse play reverse"
        },

        ...vars
    });
}

fadedown(".fade-down");

function fade_r(selector, vars = {}) {
    gsap.from(selector, {
        opacity: 0,
        x: 100,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.65,

        scrollTrigger: {
            trigger: selector,
            start: "top 90%",
            toggleActions: "play reverse play reverse"
        },

        ...vars
    });
}

fade_r(".fade-r");


