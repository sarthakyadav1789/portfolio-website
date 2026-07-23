class MouseParallax {
    constructor(options = {}) {
        this.options = {
            perspective: 1200,
            smoothness: 0.08,
            maxTranslate: 30,
            maxRotate: 6,
            ...options
        };

        this.items = [];
        this.mouseX = 0;
        this.mouseY = 0;

        this.init();
        this.bindEvents();
        this.animate();
    }

    init() {
        // Custom depth
        document.querySelectorAll(".parallax").forEach(el => {
            this.addElement(
                el,
                parseFloat(el.dataset.depth) || 0.2
            );
        });

        // Presets
        document.querySelectorAll(".parallax-1").forEach(el => this.addElement(el, 0.10));
        document.querySelectorAll(".parallax-2").forEach(el => this.addElement(el, 0.20));
        document.querySelectorAll(".parallax-3").forEach(el => this.addElement(el, 0.35));
        document.querySelectorAll(".parallax-4").forEach(el => this.addElement(el, 0.50));
    }

    addElement(el, depth) {
        this.items.push({
            el,
            depth,
            tx: 0,
            ty: 0,
            rx: 0,
            ry: 0
        });

        el.style.transformStyle = "preserve-3d";
        el.style.willChange = "transform";
    }

    bindEvents() {
        window.addEventListener("mousemove", e => {
            this.mouseX = (e.clientX / window.innerWidth - 0.5);
            this.mouseY = (e.clientY / window.innerHeight - 0.5);
        });

        window.addEventListener("mouseleave", () => {
            this.mouseX = 0;
            this.mouseY = 0;
        });
    }

    animate() {
        this.items.forEach(item => {

            const targetTX = this.mouseX * this.options.maxTranslate * item.depth;
            const targetTY = this.mouseY * this.options.maxTranslate * item.depth;

            const targetRX = -this.mouseY * this.options.maxRotate * item.depth;
            const targetRY = this.mouseX * this.options.maxRotate * item.depth;

            item.tx += (targetTX - item.tx) * this.options.smoothness;
            item.ty += (targetTY - item.ty) * this.options.smoothness;

            item.rx += (targetRX - item.rx) * this.options.smoothness;
            item.ry += (targetRY - item.ry) * this.options.smoothness;

            item.el.style.transform = `
                perspective(${this.options.perspective}px)
                translate3d(${item.tx}px, ${item.ty}px, 0)
                rotateX(${item.rx}deg)
                rotateY(${item.ry}deg)
            `;
        });

        requestAnimationFrame(() => this.animate());
    }
}

new MouseParallax();