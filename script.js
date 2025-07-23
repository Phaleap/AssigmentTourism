gsap.registerPlugin(ScrollTrigger);

// Smooth background scroll (optional tweak)
gsap.to(".SiemReapSection", {
  ease: "none",
  scrollTrigger: {
    trigger: ".SiemReapSection",
    start: "top top",
    end: "bottom bottom",
    scrub: 1.5,
  },
});

// Fade-in image and text
gsap.from(".Image1", {
  opacity: 0,
  y: 100,
  duration: 1.5,
  scrollTrigger: {
    trigger: ".Image1",
    start: "top 80%",
  },
});

gsap.from(".Description", {
  opacity: 0,
  x: 100,
  duration: 1.5,
  scrollTrigger: {
    trigger: ".Description",
    start: "top 80%",
  },
});
  gsap.from(".phnomPenhText", {
    opacity: 0,
    y: 50,
    duration: 1.2,
    ease: "power3.out",
  });

  gsap.from(".phnomPenhImage", {
    opacity: 0,
    x: 50,
    duration: 1.4,
    ease: "power3.out",
    delay: 0.2,
  });
gsap.from(".Ratanakiri", {
  opacity: 0,
  x: 200,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".RatanakiriSection",
    start: "top top",
    end: "top center",
    scrub: 1.5,
  }
});
gsap.from(".RatanakiriImage", {
    opacity: 0,
    rotateY: 180,
    rotateZ: 10,
    y: 200,
    ease: "none",
    scrollTrigger: {
        trigger: ".RatanakiriSection",
        start: "center center",
        bottom: "+=1000",
        pin: true,
        scrub: 1.5
    }
});
// Animate left image (fade + move left)
gsap.from(".leftImage", {
  opacity: 0,
  x: -200,
  scrollTrigger: {
    trigger: ".RatanakiriSection",
    start: "center center",
    end: "bottom bottom",
    scrub: 1.5,
  }
});

// Animate right image (fade + move right)
gsap.from(".rightImage", {
  opacity: 0,
  x: 200,
  scrollTrigger: {
    trigger: ".RatanakiriSection",
    start: "center center",
     end: "bottom bottom",
    scrub: 1.5,
  }
});

gsap.to(".view-btn3", {
    opacity: 1,
    ease: "power1.out",
    scrollTrigger: {
        trigger: ".RatanakiriSection",
        start: "top center",
        end: "top center",
        scrub: 1.7,
    }
});

  gsap.from(".Mondolkiri", {
    opacity: 0,
    y: 80,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".MondulkiriSection",
      start: "top center",
      toggleActions: "play none none reverse",
    }
  });

  gsap.from(".MondolKiri-container p", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".MondulkiriSection",
      start: "top center",
      toggleActions: "play none none reverse",
    }
  });

  gsap.from(".view-more-btn", {
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 0.4,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".MondulkiriSection",
      start: "top center",
      toggleActions: "play none none reverse",
    }
  });
  