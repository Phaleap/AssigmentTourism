 gsap.registerPlugin(ScrollTrigger);

    gsap.to(".background", {
        y: "-20%",
        ease: "none",
        scrollTrigger: {
            trigger: ".parallax-section",
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5
        }
    });
  gsap.from(".blade", {
  y: 100, // move up into place
  opacity: 0,
  scrollTrigger: {
    trigger: ".parallax-section",
    start: "top 80%",
    end: "center center",
    scrub: 1.5
  }
});

gsap.from(".runer", {
  y: -100, // move down into place
  opacity: 0,
  scrollTrigger: {
    trigger: ".parallax-section",
    start: "top 80%",
    end: "center center",
    scrub: 1.5
  }
});


    const panels = document.querySelectorAll(".panel");

    gsap.to(".horizontal-container", {
        x: () => `-${(panels.length - 1) * 100}vw`,
        ease: "none",
        scrollTrigger : {
            trigger: ".horizontal-container",
            start: "top top",
            end: () => `+=${panels.length * 100}%`,
            scrub: 1.5,
            pin: true,
        }
    })
gsap.registerPlugin(ScrollTrigger);

// Heading animation
gsap.from(".MkText", {
  opacity: 0,
  x: -100,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".MkText",
    start: "top 90%",
    toggleActions: "play none none none"
  }
});

// Paragraph: fade in + slide up
gsap.from(".textDescript", {
  opacity: 0,
  y: 100,
  duration: 1.2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".textDescript",
    start: "top 90%",
    toggleActions: "play none none none"
  }
});
// gsap.from(".Ratanakiri", {
//   opacity: 0,
//   x: 200,
//   ease: "power2.out",
//   scrollTrigger: {
//     trigger: ".RatanakiriSection",
//     start: "top top",
//     end: "top center",
//     scrub: 1.5,
//   }
// });
// gsap.from(".RatanakiriImage", {
//     opacity: 0,
//     rotateY: 180,
//     rotateZ: 10,
//     y: 200,
//     ease: "none",
//     scrollTrigger: {
//         trigger: ".RatanakiriSection",
//         start: "center center",
//         bottom: "+=1000",
//         pin: true,
//         scrub: 1.5
//     }
// });
// // Animate left image (fade + move left)
// gsap.from(".leftImage", {
//   opacity: 0,
//   x: -200,
//   scrollTrigger: {
//     trigger: ".RatanakiriSection",
//     start: "center center",
//     end: "bottom bottom",
//     scrub: 1.5,
//   }
// });

// // Animate right image (fade + move right)
// gsap.from(".rightImage", {
//   opacity: 0,
//   x: 200,
//   scrollTrigger: {
//     trigger: ".RatanakiriSection",
//     start: "center center",
//      end: "bottom bottom",
//     scrub: 1.5,
//   }
// });

// gsap.to(".view-btn3", {
//     opacity: 1,
//     ease: "power1.out",
//     scrollTrigger: {
//         trigger: ".RatanakiriSection",
//         start: "top center",
//         end: "top center",
//         scrub: 1.7,
//     }
// });
gsap.from(".Talking", {
  opacity: 0,
  y: 100,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".Talking",
    start: "top center",
    end: "bottom center",
    scrub: 1.5,
    toggleActions: "play none none reverse"
  }
});
gsap.to(".bousraImage", {
  scale: 0.9,
  ease: "power3.out",
  scrollTrigger: {
    trigger:".BouSra",
    start: "top top",
    end: "bottom bottom",
    scrub: 1.5
  }
  
});
gsap.from(".BousraText", {
  opacity: 0,
  y: 100,
  ease: "none",
  scrollTrigger: {
    trigger: ".BousraText",
    start: "top bottom",
    end: "top center",
    scrub: 1.5
  }
});
gsap.from(".LengKhinImage", {
  scale: 0.9,
  y: 100,
  opacity: 0,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".LengKhinImage",
    start: "top 90%",
    end: "top center",
    scrub: 1.5,
  }
});
gsap.from(".PhnongImage-1", {
  opacity: 0,
  x: -100,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".PhnongImage-1",
    start: "top 80%",
    end: "top center",
    scrub: 1.5
  }
});
gsap.from(".PhnongImage-2", {
  opacity: 0,
  x: 100,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".PhnongImage-2",
    start: "top 80%",
    end: "top center",
    scrub: 1.5
  }
});
gsap.from(".PhnongImage-3", {
  opacity: 0,
  x: 100,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".PhnongImage-3",
    start: "top 80%",
    end: "top center",
    scrub: 1.5
  }
});
gsap.from(".PhnongImage-4", {
  opacity: 0,
  x: -100,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".PhnongImage-4",
    start: "top 80%",
    end: "top center",
    scrub: 1.5
  }
});
gsap.from(".PhnongDescription", {
  opacity: 0,
  y: 100,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".PhnongDescription",
    start: "top 80%",
    end: "top center",
    scrub: 1.7,
  }
});
gsap.from(".ElephantValleyText", {
  opacity: 0,
  y: 100,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".ElephantValleyText",
    start: "top 90%",
    end: "top center",
    scrub: 1.7,
  }
});
gsap.to(".welcomeElephant", {
  scale: 1.2,
  marginTop: "30px",
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".welcomeElephant",
    start: "top 90%",
    end: "bottom bottom",
    scrub: 1.7,
  }
});
gsap.from(".ElephantCard1", {
  opacity: 0,
  y: 100,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".ElephantCard1",
    start: "top 90%",
    end: "top center",
    scrub: 1.7,
  }
});
gsap.from(".ElephantCard2", {
  opacity: 0,
  y: 100,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".ElephantCard2",
    start: "top 90%",
    end: "top center",
    scrub: 1.7,
  }
});
gsap.from(".ElephantCard3", {
  opacity: 0,
  y: 100,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".ElephantCard3",
    start: "top 90%",
    end: "top center",
    scrub: 1.7,
  }
});
gsap.from(".JungleTrek1", {
  opacity: 0,
  y: 100,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".JungleTrek1",
    start: "top 80%",
    end: "top center",
    scrub: 1.7,
  }
});
gsap.from(".JungleTrek2", {
  opacity: 0,
  y: 100,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".JungleTrek2",
    start: "top 80%",
    end: "top center",
    scrub: 2,
  }
});
gsap.from(".JungleTrekText", {
  opacity: 0,
  y: 100,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".JungleTrekText",
    start: "top 80%",
    end: "top center",
    scrub: 2,
  }
});

