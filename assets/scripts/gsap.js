gsap.registerPlugin(ScrollTrigger);

gsap.from(".fly-left", {
    x: -80,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});

gsap.from(".fly-right", {
    x: 80,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});

gsap.from(".fade-up", {
    y: 140,
    opacity: 0,
    duration: 0.9,
    ease: "power2.out"
});

gsap.from(".fade-down", {
    y: -40,
    opacity: 0,
    duration: 0.9,
    ease: "power2.out"
});

gsap.from(".fade", {
    opacity: 0,
    duration: 1
});

gsap.from(".scale-in", {
    scale: 0.9,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
});

gsap.from(".zoom-out", {
    scale: 1.15,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
});

gsap.from(".rotate-in", {
    rotation: -8,
    y: 20,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
});

gsap.from(".stagger", {
    y: 30,
    opacity: 0,
    stagger: 0.12,
    duration: 0.7,
    ease: "power2.out"
});

gsap.from(".pop", {
    scale: 0.8,
    opacity: 0,
    duration: 0.6,
    ease: "back.out(1.7)"
});

gsap.from("about-fly-left", {
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",

    scrollTrigger: {
        trigger: "#about",
        start: "top 80%",
        once: true
    }
});


/*
function reveal(selector, vars = {}) {
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
    



gsap.from(".fly-left", {
    y: 80,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",

    scrollTrigger: {
        trigger: ".card",
        start: "top 80%",
        toggleActions: "play reverse play reverse"
    }
});*/