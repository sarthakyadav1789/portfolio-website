gsap.registerPlugin(ScrollTrigger);

function abt_fly_l(selector, vars = {}) {
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

abt_fly_l(".abt-fly-l");

function abt_fly_r(selector, vars = {}) {
    gsap.from(selector, {
        opacity: 0,
        x: -120,
        duration: 0.8,
        ease: "power3.out",

        scrollTrigger: {
            trigger: selector,
            start: "top 60%",
            toggleActions: "play reverse play reverse"
        },

        ...vars
    });
}

abt_fly_r(".abt-fly-r");


function abt_fly_qt(selector, vars = {}) {
    gsap.from(selector, {
        opacity: 0,
        x: -60,
        duration: 0.8,
        stagger: 0.05,
        ease: "power3.out",

        scrollTrigger: {
            trigger: selector,
            start: "top 80%",
            toggleActions: "play reverse play reverse"
        },

        ...vars
    });
}

abt_fly_qt(".abt-fly-quote");

function abt_fade_up(selector, vars = {}) {
    gsap.from(selector, {
        opacity: 0,
        y: 80,
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

abt_fade_up(".abt-fade-up");


function skill_fly_r(selector, vars = {}) {
    gsap.from(selector, {
        opacity: 0,
        x: -60,
        duration: 0.8,
        stagger: 0.05,
        ease: "power3.out",

        scrollTrigger: {
            trigger: selector,
            start: "top 80%",
            toggleActions: "play reverse play reverse"
        },

        ...vars
    });
}

skill_fly_r(".skill-fly-r");


function skill_fly_l(selector, vars = {}) {
    gsap.from(selector, {
        opacity: 0,
        x: 60,
        duration: 0.8,
        stagger: 0.05,
        ease: "power3.out",

        scrollTrigger: {
            trigger: selector,
            start: "top 80%",
            toggleActions: "play reverse play reverse"
        },

        ...vars
    });
}

skill_fly_l(".skill-fly-l");

function skill_fade(selector, vars = {}) {
    gsap.from(selector, {
        opacity: 0,
        y: 60,
        duration: 0.8,
        stagger: 0.05,
        ease: "power3.out",

        scrollTrigger: {
            trigger: selector,
            start: "top 80%",
            toggleActions: "play reverse play reverse"
        },

        ...vars
    });
}

skill_fade(".skill_fade");


function proj_fly_l(selector, vars = {}) {
    gsap.from(selector, {
        opacity: 0,
        x: -60,
        duration: 0.8,
        stagger: 0.05,
        ease: "power3.out",

        scrollTrigger: {
            trigger: selector,
            start: "top 80%",
            toggleActions: "play reverse play reverse"
        },

        ...vars
    });
}

proj_fly_l(".proj_fly_l");

function proj_fly_r(selector, vars = {}) {
    gsap.from(selector, {
        opacity: 0,
        x: 60,
        duration: 0.8,
        stagger: 0.05,
        ease: "power3.out",

        scrollTrigger: {
            trigger: selector,
            start: "top 80%",
            toggleActions: "play reverse play reverse"
        },

        ...vars
    });
}

proj_fly_r(".proj_fly_r");