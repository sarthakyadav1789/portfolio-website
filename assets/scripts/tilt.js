const tiltElements = document.querySelectorAll(".tilt");

tiltElements.forEach((element) => {
  const maxTilt = 5; // Maximum rotation in degrees

  element.addEventListener("mousemove", (e) => {
    const rect = element.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Normalize mouse position (-1 to 1)
    const rotateY = ((x / rect.width) - 0.5) * 2 * maxTilt;
    const rotateX = -((y / rect.height) - 0.5) * 2 * maxTilt;

    element.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
    `;
  });

  element.addEventListener("mouseleave", () => {
    element.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
    `;
  });
});