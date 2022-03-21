import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";
gsap.from('.navigation', { opacity: 0, y: '-100%', duration: 1, ease: 'Bounce.easeOut' });

gsap.registerEffect({
    name: "fade",
    defaults: { duration: 2 }, //defaults get applied to the "config" object passed to the effect below
    effect: (targets, config) => {
        return gsap.to(targets, { duration: config.duration, opacity: 0 });
    }
});

//now we can use it like this:
//gsap.effects.fade(".box");

let i = 0.1;
document.querySelectorAll(".box").forEach(function(box) {
    i++
    console.log(1);
    gsap.from(box, { opacity: 0, y: '-100%', duration: i, ease: 'Bounce.easeOut' });
    box.addEventListener("mouseenter", function() {
        gsap.effects.fade(this);
    });
});