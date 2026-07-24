gsap.to(".exit", {
  opacity: 0,
  filter: "blur(6px)",
  ease: "none",
  scale: 0.3,
  scrollTrigger: {
    trigger: ".exit",
    start: "top -20%",
    end: "bottom top",
    scrub: true
  }
});

gsap.to(".exit2", {
  scale: 0.5,
  opacity: 0,
  rotateX: 85,
  y: -80,
  filter: "blur(6px)",
  ease: "none",
  scrollTrigger: {
    trigger: ".exit2",
    start: "top -50%",
    end: "bottom top",
    scrub: true
  }
});

gsap.to(".exit3", {
  scale: 0.5,
  opacity: 0,
  y: -80,
  rotateX: 85,
  filter: "blur(6px)",
  ease: "none",
  scrollTrigger: {
    trigger: ".exit3",
    start: "top -30%",
    end: "bottom top",
    scrub: true
  }
});

gsap.to(".exit4", {
  scale: 0.5,
  opacity: 0,
  rotateX: 85,
  y: -80,
  filter: "blur(6px)",
  ease: "none",
  scrollTrigger: {
    trigger: ".exit4",
    start: "top -60%",
    end: "bottom top",
    scrub: true
  }
});